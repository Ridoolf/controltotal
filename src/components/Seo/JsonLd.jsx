import { contacto, hero, resenas, site, tratamientos } from '../../data/content'

function urlAbsoluta(ruta) {
  if (!site.url) return ruta
  return `${site.url.replace(/\/$/, '')}${ruta}`
}

function JsonLd() {
  const sede = contacto.sedes[0]
  const datos = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'PestControlService',
        '@id': `${urlAbsoluta('/')}#empresa`,
        name: site.nombre,
        description: site.seo.descripcion,
        url: urlAbsoluta('/'),
        telephone: site.whatsappDisplay.replace(/\s/g, ''),
        email: contacto.email,
        image: urlAbsoluta(hero.imagenFondo),
        logo: urlAbsoluta(site.logo),
        address: {
          '@type': 'PostalAddress',
          streetAddress: sede.direccion,
          addressLocality: 'Ciudad Autónoma de Buenos Aires',
          addressRegion: 'CABA',
          postalCode: 'C1414',
          addressCountry: 'AR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -34.5989,
          longitude: -58.4312,
        },
        areaServed: [
          { '@type': 'City', name: 'Ciudad Autónoma de Buenos Aires' },
          { '@type': 'AdministrativeArea', name: 'Gran Buenos Aires' },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: String(resenas.rating),
          reviewCount: String(resenas.total),
          bestRating: '5',
        },
        sameAs: [site.instagramUrl, resenas.mapsUrl],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: tratamientos.titulo,
          itemListElement: tratamientos.items.map((item, i) => ({
            '@type': 'Offer',
            position: i + 1,
            itemOffered: {
              '@type': 'Service',
              name: item.nombre,
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${urlAbsoluta('/')}#sitio`,
        url: urlAbsoluta('/'),
        name: site.nombre,
        description: site.seo.descripcion,
        inLanguage: 'es-AR',
        publisher: { '@id': `${urlAbsoluta('/')}#empresa` },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(datos) }}
    />
  )
}

export default JsonLd
