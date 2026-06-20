import { site } from '../../data/content'
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
          @{site.instagram}
        </a>
        <p className="footer__copy">&copy; {year} {site.nombre}. Todos los derechos reservados.</p>
        <span className="footer__dev">
          Desarrollado por{' '}
          <a
            href={site.desarrollador.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.desarrollador.nombre}
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
