import { nosotros } from '../../data/content'
import Reveal from '../Reveal/Reveal'
import './Nosotros.css'

function Nosotros() {
  return (
    <section id="nosotros" className="nosotros">
      <div className="contenedor nosotros__contenedor">
        <Reveal className="nosotros__imagen-wrap">
          <div className="nosotros__imagen img-placeholder">
            [PENDIENTE — Foto del equipo]
          </div>
        </Reveal>

        <div className="nosotros__contenido">
          <Reveal>
            <h2 className="nosotros__titulo">{nosotros.titulo}</h2>
            <div className="nosotros__cuerpo">
              <p>
                Como profesionales con{' '}
                <span className="nosotros__resaltado">años de experiencia</span> asumimos la
                responsabilidad de{' '}
                <span className="nosotros__resaltado">erradicar todo tipo de plagas</span>.{' '}
                <span className="nosotros__resaltado nosotros__resaltado--rojo">
                  Tu consulta no molesta.
                </span>
              </p>
              {nosotros.parrafos.map((parrafo, i) => (
                <p key={i}>{parrafo}</p>
              ))}
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
              <p className="nosotros__habilitacion-texto">{nosotros.habilitacion.texto}</p>
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
