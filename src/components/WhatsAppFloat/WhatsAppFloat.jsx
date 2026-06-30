import { urlWhatsApp } from '../../utils/enlaces'
import { IconWhatsApp } from '../Icons/LinkIcons'
import './WhatsAppFloat.css'

function WhatsAppFloat() {
  return (
    <a
      href={urlWhatsApp()}
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
