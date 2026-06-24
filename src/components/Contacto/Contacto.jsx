import { contacto, site } from '../../data/content'
import Reveal from '../Reveal/Reveal'
import './Contacto.css'

function Contacto() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}`

  return (
    <section id="contacto" className="contacto">
      <div className="contenedor">
        <Reveal>
          <h2 className="contacto__titulo">{contacto.titulo}</h2>
        </Reveal>

        <Reveal delay={50}>
          <div className="contacto__canales">
          <a href={whatsappUrl} className="contacto__canal" target="_blank" rel="noopener noreferrer">
            <span className="contacto__canal-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            <span className="contacto__canal-info">
              <span className="contacto__canal-label">WhatsApp</span>
              <span className="contacto__canal-valor">{site.whatsappDisplay}</span>
            </span>
          </a>

          <a href={`mailto:${contacto.email}`} className="contacto__canal">
            <span className="contacto__canal-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </span>
            <span className="contacto__canal-info">
              <span className="contacto__canal-label">Email</span>
              <span className="contacto__canal-valor">{contacto.email}</span>
            </span>
          </a>

          <a
            href={site.instagramUrl}
            className="contacto__canal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contacto__canal-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <span className="contacto__canal-info">
              <span className="contacto__canal-label">Instagram</span>
              <span className="contacto__canal-valor">@{site.instagram}</span>
            </span>
          </a>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="contacto__ubicacion">
          {contacto.sedes.map((sede) => (
            <div key={sede.nombre} className="contacto__ubicacion-grid">
              <div className="contacto__ubicacion-info">
                <h3 className="contacto__subtitulo">{contacto.ubicacionTitulo}</h3>
                <div className="contacto__sede">
                  <strong>{sede.nombre}</strong>
                  <p>{sede.direccion}</p>
                  <a
                    href={sede.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacto__maps-link"
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </div>

              <div className="contacto__mapa">
                <iframe
                  src={sede.mapEmbedUrl}
                  title={`Mapa — ${sede.direccion}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contacto
