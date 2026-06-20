import { useEffect, useRef } from 'react'
import './Reveal.css'

function estaCercaDelViewport(el, margen = 200) {
  const rect = el.getBoundingClientRect()
  return rect.top < window.innerHeight + margen && rect.bottom > -margen
}

function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const mostrar = (sinDelay = false) => {
      if (sinDelay) el.style.transitionDelay = '0ms'
      el.classList.add('reveal--visible')
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      mostrar(true)
      return
    }

    // Ya en pantalla al montar (refresh, link con ancla, etc.)
    if (estaCercaDelViewport(el)) {
      mostrar(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        // Si ya entró en pantalla al dispararse, mostrar sin esperar el delay
        const entroEnPantalla = entry.boundingClientRect.top < window.innerHeight
        mostrar(entroEnPantalla)
        observer.unobserve(el)
      },
      {
        threshold: 0,
        // Dispara la animación antes de que la sección sea visible
        rootMargin: '80px 0px 45% 0px',
      },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const classes = ['reveal', className].filter(Boolean).join(' ')
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <Tag ref={ref} className={classes} style={style}>
      {children}
    </Tag>
  )
}

export default Reveal
