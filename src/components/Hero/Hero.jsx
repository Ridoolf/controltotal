import { hero, site } from '../../data/content'
import { urlWhatsApp } from '../../utils/enlaces'
import { IconWhatsApp } from '../Icons/LinkIcons'
import TextoConResaltado from '../TextoConResaltado/TextoConResaltado'
import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-titulo">
      <div className="hero__fondo" aria-hidden="true">
        <img
          src={hero.imagenFondo}
          alt=""
          className="hero__fondo-img"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
      </div>
      <div className="hero__overlay"></div>

      <div className="contenedor hero__contenido">
        <div className="hero__texto">
          <p className="hero__bienvenida">{hero.bienvenida}</p>
          <h1 id="hero-titulo" className="hero__titulo">
            <span className="hero__titulo-linea">{hero.titulo.linea1}</span>
            <span className="hero__titulo-linea hero__titulo-linea--rojo">{hero.titulo.linea2}</span>
          </h1>
          <p className="hero__tagline">{hero.tagline}</p>
          <p className="hero__descripcion">
            <TextoConResaltado contenido={hero.descripcionIntro} />
            <br />
            <TextoConResaltado contenido={hero.descripcion} />
          </p>
          <a href={urlWhatsApp()} className="hero__cta" target="_blank" rel="noopener noreferrer">
            <span className="hero__cta-icono enlace-btn__icono" aria-hidden="true">
              <IconWhatsApp />
            </span>
            {hero.cta}
          </a>
        </div>

        <img src={site.logo} alt="" className="hero__logo" aria-hidden="true" width="280" height="280" />
      </div>
    </section>
  )
}

export default Hero
