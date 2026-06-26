import { contacto, site } from '../../data/content'
import { IconEmail, IconGoogle, IconInstagram, IconWhatsApp } from '../Icons/LinkIcons'
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
            <a
              href={whatsappUrl}
              className="contacto__canal contacto__canal--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contacto__canal-icon enlace-btn__icono" aria-hidden="true">
                <IconWhatsApp />
              </span>
              <span className="contacto__canal-info">
                <span className="contacto__canal-label">WhatsApp</span>
                <span className="contacto__canal-valor">{site.whatsappDisplay}</span>
              </span>
            </a>

            <a href={`mailto:${contacto.email}`} className="contacto__canal contacto__canal--email">
              <span className="contacto__canal-icon enlace-btn__icono" aria-hidden="true">
                <IconEmail />
              </span>
              <span className="contacto__canal-info">
                <span className="contacto__canal-label">Email</span>
                <span className="contacto__canal-valor">{contacto.email}</span>
              </span>
            </a>

            <a
              href={site.instagramUrl}
              className="contacto__canal contacto__canal--instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contacto__canal-icon enlace-btn__icono" aria-hidden="true">
                <IconInstagram />
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
                      <span className="contacto__maps-icono enlace-btn__icono" aria-hidden="true">
                        <IconGoogle />
                      </span>
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

        <Reveal delay={120}>
          <p className="contacto__nota-legal">{contacto.notaLegal}</p>
        </Reveal>
      </div>
    </section>
  )
}

export default Contacto
