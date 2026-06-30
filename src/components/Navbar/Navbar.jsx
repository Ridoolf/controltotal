import { useState } from 'react'
import { navLinks, site } from '../../data/content'
import './Navbar.css'

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <header className="navbar">
      <div className="contenedor navbar__contenedor">
        <a href="#inicio" className="navbar__logo" onClick={cerrarMenu} aria-label={`${site.nombre} — ir al inicio`}>
          <img src={site.logo} alt={site.logoAlt} className="navbar__logo-img" width="52" height="52" />
          <div className="navbar__logo-texto">
            <span className="navbar__logo-nombre">control total</span>
            <span className="navbar__logo-sub">Fumigaciones Paz</span>
          </div>
        </a>

        <button
          type="button"
          className={`navbar__toggle ${menuAbierto ? 'navbar__toggle--activo' : ''}`}
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar__nav ${menuAbierto ? 'navbar__nav--abierto' : ''}`} aria-label="Secciones del sitio">
          <ul className="navbar__lista">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={cerrarMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
