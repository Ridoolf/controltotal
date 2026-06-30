import { useState } from 'react'
import { nosotros } from '../../data/content'
import Reveal from '../Reveal/Reveal'
import TextoConResaltado from '../TextoConResaltado/TextoConResaltado'
import './Nosotros.css'

function Nosotros() {
  const [expandido, setExpandido] = useState(false)
  const [pasosVisitaAbiertos, setPasosVisitaAbiertos] = useState(() => new Set())
  const parrafosVisibles = nosotros.parrafos.slice(0, nosotros.parrafosVisibles)
  const parrafosExtra = nosotros.parrafos.slice(nosotros.parrafosVisibles)
  const hayMas = parrafosExtra.length > 0

  const togglePasoVisita = (titulo) => {
    setPasosVisitaAbiertos((prev) => {
      const next = new Set(prev)
      if (next.has(titulo)) next.delete(titulo)
      else next.add(titulo)
      return next
    })
  }

  return (
    <section id="nosotros" className="nosotros">
      <div className="contenedor nosotros__contenedor">
        <Reveal className="nosotros__imagen-wrap">
          <img
            className="nosotros__imagen"
            src={nosotros.imagen}
            alt={nosotros.imagenAlt}
            loading="lazy"
          />
        </Reveal>

        <div className="nosotros__contenido">
          <Reveal>
            <h2 className="nosotros__titulo">{nosotros.titulo}</h2>
            <div className="nosotros__cuerpo">
              {parrafosVisibles.map((parrafo, i) => (
                <p key={i}>
                  <TextoConResaltado contenido={parrafo} />
                </p>
              ))}

              {hayMas && expandido && (
                <div className="nosotros__cuerpo-extra">
                  {parrafosExtra.map((parrafo, i) => (
                    <p key={i}>
                      <TextoConResaltado contenido={parrafo} />
                    </p>
                  ))}
                </div>
              )}

              {hayMas && (
                <button
                  type="button"
                  className="nosotros__ver-mas"
                  onClick={() => setExpandido((prev) => !prev)}
                  aria-expanded={expandido}
                >
                  {expandido ? nosotros.verMenos : nosotros.verMas}
                </button>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="nosotros__destacados">
              {nosotros.destacados.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <Reveal delay={80}>
        <div className="contenedor nosotros__visita">
          <div className="nosotros__visita-intro">
            <h3 className="nosotros__visita-titulo">{nosotros.primeraVisita.titulo}</h3>
            <p className="nosotros__visita-lead">
              <TextoConResaltado contenido={nosotros.primeraVisita.subtitulo} />
            </p>
          </div>

          <div className="nosotros__visita-cuerpo">
            {nosotros.primeraVisita.pasos.map((paso) => {
              const abierto = pasosVisitaAbiertos.has(paso.titulo)

              return (
                <div
                  key={paso.titulo}
                  className={`nosotros__visita-bloque${abierto ? ' nosotros__visita-bloque--abierto' : ''}`}
                >
                  <button
                    type="button"
                    className="nosotros__visita-bloque-btn"
                    onClick={() => togglePasoVisita(paso.titulo)}
                    aria-expanded={abierto}
                  >
                    <span className="nosotros__visita-bloque-titulo">{paso.titulo}</span>
                    <span className="nosotros__visita-flecha" aria-hidden="true" />
                  </button>
                  <div className="nosotros__visita-bloque-panel">
                    <p>
                      <TextoConResaltado contenido={paso.texto} />
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="contenedor">
          <div className="nosotros__habilitacion">
            <span className="nosotros__habilitacion-icono" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="12" width="48" height="40" stroke="currentColor" strokeWidth="2" />
                <line x1="16" y1="24" x2="48" y2="24" stroke="currentColor" strokeWidth="2" />
                <line x1="16" y1="32" x2="40" y2="32" stroke="currentColor" strokeWidth="2" />
                <circle cx="46" cy="44" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M42 44 L45 47 L51 41" stroke="var(--rojo)" strokeWidth="2" />
              </svg>
            </span>
            <div className="nosotros__habilitacion-contenido">
              <p className="nosotros__habilitacion-texto">
                <TextoConResaltado contenido={nosotros.habilitacion.texto} />
              </p>
              <ul className="nosotros__registros">
                {nosotros.habilitacion.registros.map((registro) => (
                  <li key={registro.numero}>
                    <span className="nosotros__registro-num">N° {registro.numero}</span>
                    {registro.saltoDespuesDe ? (
                      <span className="nosotros__registro-act">
                        {registro.saltoDespuesDe}
                        <span className="nosotros__registro-salto">
                          {registro.actividad.replace(`${registro.saltoDespuesDe} `, '')}
                        </span>
                      </span>
                    ) : (
                      <span className="nosotros__registro-act">{registro.actividad}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Nosotros
