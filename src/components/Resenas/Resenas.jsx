import { useCallback, useEffect, useMemo, useRef } from 'react'
import { resenas } from '../../data/content'
import { IconGoogle } from '../Icons/LinkIcons'
import Reveal from '../Reveal/Reveal'
import './Resenas.css'

const VELOCIDAD = 0.58

const AVATAR_COLORES = ['#0d652d', '#8e24aa', '#c5221f', '#1967d2', '#e37400', '#5f6368']

function inicial(nombre) {
  return nombre.trim().charAt(0).toUpperCase()
}

function colorAvatar(nombre) {
  const codigo = nombre.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)
  return AVATAR_COLORES[codigo % AVATAR_COLORES.length]
}

function Estrellas({ cantidad }) {
  return (
    <span className="resenas__estrellas" aria-label={`${cantidad} de 5 estrellas`}>
      {Array.from({ length: cantidad }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  )
}

function Resenas() {
  const itemsDoble = useMemo(() => [...resenas.items, ...resenas.items], [])

  const trackRef = useRef(null)
  const offsetRef = useRef(0)
  const loopWidthRef = useRef(0)
  const draggingRef = useRef(false)
  const dragStartRef = useRef({ x: 0, offset: 0 })
  const reducedMotionRef = useRef(false)
  const rafRef = useRef(0)

  const aplicarTransform = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`
  }, [])

  const normalizarOffset = useCallback(() => {
    const loop = loopWidthRef.current
    if (loop <= 0) return

    while (offsetRef.current <= -loop) offsetRef.current += loop
    while (offsetRef.current > 0) offsetRef.current -= loop
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    reducedMotionRef.current = media.matches

    const onChange = () => {
      reducedMotionRef.current = media.matches
    }

    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const medir = () => {
      loopWidthRef.current = track.scrollWidth / 2
      normalizarOffset()
      aplicarTransform()
    }

    medir()

    const observer = new ResizeObserver(medir)
    observer.observe(track)

    const tick = () => {
      if (!reducedMotionRef.current && !draggingRef.current) {
        offsetRef.current -= VELOCIDAD
        normalizarOffset()
        aplicarTransform()
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
    }
  }, [aplicarTransform, normalizarOffset])

  const onPointerDown = useCallback(
    (event) => {
      draggingRef.current = true
      dragStartRef.current = {
        x: event.clientX,
        offset: offsetRef.current,
      }
      event.currentTarget.setPointerCapture(event.pointerId)
    },
    [],
  )

  const onPointerMove = useCallback(
    (event) => {
      if (!draggingRef.current) return

      const { x, offset } = dragStartRef.current
      offsetRef.current = offset + (event.clientX - x)
      normalizarOffset()
      aplicarTransform()
    },
    [aplicarTransform, normalizarOffset],
  )

  const finalizarArrastre = useCallback((event) => {
    draggingRef.current = false

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }, [])

  return (
    <section id="resenas" className="resenas" aria-label="Reseñas de clientes">
      <div className="contenedor resenas__contenedor">
        <Reveal>
          <header className="resenas__encabezado">
            <h2 className="resenas__titulo">{resenas.titulo}</h2>
            <div className="resenas__resumen">
              <Estrellas cantidad={resenas.rating} />
              <span className="resenas__rating-texto">
                {resenas.ratingTexto} · {resenas.total} reseñas
              </span>
              <span className="resenas__resumen-sep" aria-hidden="true" />
              <a
                href={resenas.mapsUrl}
                className="resenas__maps-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="resenas__maps-icono enlace-btn__icono" aria-hidden="true">
                  <IconGoogle />
                </span>
                {resenas.verEnMaps}
              </a>
            </div>
          </header>
        </Reveal>

        <div className="resenas__carrusel-wrap">
          <div
            className="resenas__viewport"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={finalizarArrastre}
            onPointerCancel={finalizarArrastre}
          >
            <ul className="resenas__lista" ref={trackRef}>
              {itemsDoble.map((item, index) => (
                <li key={`${item.nombre}-${item.fecha}-${index}`} className="resenas__slide">
                  <article className="resena-card">
                    <div className="resena-card__cabecera">
                      <div className="resena-card__autor">
                        <span
                          className="resena-card__avatar"
                          style={{ backgroundColor: colorAvatar(item.nombre) }}
                          aria-hidden="true"
                        >
                          {inicial(item.nombre)}
                        </span>
                        <div className="resena-card__meta">
                          <span className="resena-card__nombre">{item.nombre}</span>
                          {item.meta && <span className="resena-card__info">{item.meta}</span>}
                        </div>
                      </div>
                      <IconGoogle className="resena-card__google" />
                    </div>

                    <div className="resena-card__rating">
                      <Estrellas cantidad={item.estrellas} />
                      <span className="resena-card__fecha">{item.fecha}</span>
                    </div>

                    <p className="resena-card__texto">{item.texto}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resenas
