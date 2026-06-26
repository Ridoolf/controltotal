import { site } from '../../data/content'
import { IconInstagram } from '../Icons/LinkIcons'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="contenedor footer__contenedor">
        <p className="footer__nombre">{site.nombre}</p>
        <p className="footer__sub">{site.subtitulo}</p>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="footer__ig"
        >
          <span className="footer__ig-icono enlace-btn__icono" aria-hidden="true">
            <IconInstagram />
          </span>
          @{site.instagram}
        </a>
        <p className="footer__copy">&copy; {year} {site.nombre}. Todos los derechos reservados.</p>
        <span className="footer__dev">
          Desarrollado por{' '}
          <a href={site.desarrollador.url} target="_blank" rel="noopener noreferrer">
            <span className="footer__dev-icono enlace-btn__icono" aria-hidden="true">
              <IconInstagram />
            </span>
            {site.desarrollador.nombre}
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
