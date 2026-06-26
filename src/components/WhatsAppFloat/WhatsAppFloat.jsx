import { site } from '../../data/content'
import { IconWhatsApp } from '../Icons/LinkIcons'
import './WhatsAppFloat.css'

function WhatsAppFloat() {
  const url = `https://wa.me/${site.whatsapp}?text=Hola,%20quiero%20consultar%20por%20un%20servicio%20de%20fumigación.`

  return (
    <a
      href={url}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <IconWhatsApp />
    </a>
  )
}

export default WhatsAppFloat
