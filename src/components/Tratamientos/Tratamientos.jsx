import { useState } from 'react'
import { contacto, hero, site, tratamientos } from '../../data/content'
import { IconContacto, IconWhatsApp } from '../Icons/LinkIcons'
import Reveal from '../Reveal/Reveal'
import TextoConResaltado from '../TextoConResaltado/TextoConResaltado'
import './Tratamientos.css'

function Tratamientos() {
  const [activo, setActivo] = useState(null)
  const whatsappUrl = `https://wa.me/${site.whatsapp}`

  const abrirCard = (index) => {
    setActivo(index)
  }

  const cerrarCard = () => {
    setActivo(null)
  }

  const manejarClickCard = (index) => {
    const esMobile = window.matchMedia('(max-width: 639px)').matches

    if (esMobile) {
      if (activo !== index) abrirCard(index)
      return
    }

    setActivo((prev) => (prev === index ? null : index))
  }

  return (
    <section id="tratamientos" className="tratamientos">
      <div className="contenedor tratamientos__contenedor">
        <Reveal>
          <header className="tratamientos__encabezado">
            <h2 className="tratamientos__titulo">{tratamientos.titulo}</h2>
            <p className="tratamientos__subtitulo">{tratamientos.subtitulo}</p>
          </header>
        </Reveal>

        <div className="tratamientos__grid-wrap">
          <ul className="tratamientos__lista">
            {tratamientos.items.map((item, index) => {
              const imagen =
                item.imagen ??
                (index % 2 === 0 ? tratamientos.imagenPorDefecto : tratamientos.imagenAlternativa)

              return (
                <Reveal key={item.nombre} as="li" delay={index * 35} className="tratamiento-card">
                  <div
                    className={`tratamiento-card__btn${activo === index ? ' tratamiento-card__btn--activo' : ''}`}
                    role="button"
                    tabIndex={activo === index ? -1 : 0}
                    aria-expanded={activo === index}
                    onClick={() => manejarClickCard(index)}
                    onKeyDown={(evento) => {
                      if (evento.key !== 'Enter' && evento.key !== ' ') return
                      evento.preventDefault()
                      manejarClickCard(index)
                    }}
                  >
                    <span className="tratamiento-card__media" aria-hidden="true">
                      <img
                        className="tratamiento-card__img"
                        src={imagen}
                        alt=""
                        loading="lazy"
                      />
                    </span>

                    <span className="tratamiento-card__frente">
                      <span className="tratamiento-card__titulo">{item.nombre}</span>
                      <span className="tratamiento-card__mas">{tratamientos.verMas}</span>
                    </span>

                    <span className="tratamiento-card__detalle">
                      <span className="tratamiento-card__detalle-titulo">{item.nombre}</span>
                      <span className="tratamiento-card__detalle-texto">
                        <TextoConResaltado contenido={item.descripcion} />
                      </span>
                      <button
                        type="button"
                        className="tratamiento-card__menos"
                        onClick={(evento) => {
                          evento.stopPropagation()
                          cerrarCard()
                        }}
                      >
                        {tratamientos.verMenos}
                      </button>
                    </span>
                  </div>
                </Reveal>
              )
            })}
          </ul>
        </div>

        <Reveal delay={80}>
          <div className="tratamientos__acciones">
            <a href="#contacto" className="tratamientos__cta tratamientos__cta--secundario">
              <span className="tratamientos__cta-icono enlace-btn__icono" aria-hidden="true">
                <IconContacto />
              </span>
              {contacto.titulo}
            </a>
            <a
              href={whatsappUrl}
              className="tratamientos__cta tratamientos__cta--primario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tratamientos__cta-icono enlace-btn__icono" aria-hidden="true">
                <IconWhatsApp />
              </span>
              {hero.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Tratamientos
