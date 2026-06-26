import { hero, site } from '../../data/content'
import { IconWhatsApp } from '../Icons/LinkIcons'
import TextoConResaltado from '../TextoConResaltado/TextoConResaltado'
import './Hero.css'

function Hero() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=Hola,%20quiero%20consultar%20por%20un%20servicio%20de%20fumigación.`

  return (
    <section id="inicio" className="hero">
      <div className="hero__fondo">
        <img
          src={hero.imagenFondo}
          alt=""
          className="hero__fondo-img"
          fetchPriority="high"
        />
      </div>
      <div className="hero__overlay"></div>

      <div className="contenedor hero__contenido">
        <div className="hero__texto">
          <p className="hero__bienvenida">{hero.bienvenida}</p>
          <h1 className="hero__titulo">
            <span className="hero__titulo-linea">{hero.titulo.linea1}</span>
            <span className="hero__titulo-linea hero__titulo-linea--rojo">{hero.titulo.linea2}</span>
          </h1>
          <p className="hero__tagline">{hero.tagline}</p>
          <p className="hero__descripcion">
            <TextoConResaltado contenido={hero.descripcion} />
          </p>
          <a href={whatsappUrl} className="hero__cta" target="_blank" rel="noopener noreferrer">
            <span className="hero__cta-icono enlace-btn__icono" aria-hidden="true">
              <IconWhatsApp />
            </span>
            {hero.cta}
          </a>
        </div>

        <img src={site.logo} alt="" className="hero__logo" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Hero
