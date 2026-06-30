import { site } from '../data/content'

const MENSAJE_WHATSAPP = 'Hola, quiero consultar por un servicio de fumigación.'

export function urlWhatsApp(mensaje) {
  const base = `https://wa.me/${site.whatsapp}`
  if (mensaje === false) return base
  const texto = mensaje ?? MENSAJE_WHATSAPP
  return `${base}?text=${encodeURIComponent(texto)}`
}
