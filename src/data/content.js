export const site = {
  nombre: 'Control Total Fumigaciones Paz',
  subtitulo: 'Manejo integral de plagas',
  logo: '/assets/images/logo.png',
  whatsapp: '5491140233561',
  whatsappDisplay: '+54 9 11 4023-3561',
  instagram: 'control.total.fumigaciones.paz',
  instagramUrl: 'https://www.instagram.com/control.total.fumigaciones.paz/',
  desarrollador: {
    nombre: 'Tu Espacio Online',
    url: 'https://instagram.com/tu_espacio.online',
  },
}

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Contacto', href: '#contacto' },
]

export const hero = {
  bienvenida: 'Bienvenidos a',
  titulo: {
    linea1: 'Control Total',
    linea2: 'Fumigaciones Paz',
  },
  descripcionIntro: [
    { resaltado: 'Manejo integral de plagas' },
    '.',
  ],
  descripcion: [
    'Realizamos tratamientos con ',
    { resaltado: 'productos residuales e inoloros' },
    '.',
  ],
  tagline: 'Empresa familiar · atención directa',
  imagenFondo: '/assets/images/hero-fondo.png',
  cta: 'Escribíme por WhatsApp',
}

export const nosotros = {
  titulo: 'Acerca de Nosotros',
  imagen: '/assets/images/nosotros.png',
  imagenAlt: 'Profesional con traje de protección realizando fumigación en un hogar',
  parrafosVisibles: 2,
  verMas: 'Ver más',
  verMenos: 'Ver menos',
  parrafos: [
    [
      'Somos una ',
      { resaltado: 'empresa familiar' },
      ' dedicada al ',
      { resaltado: 'control de plagas, desinfección y saneamiento ambiental' },
      ', comprometida con brindar un servicio ',
      { resaltado: 'profesional, confiable y de calidad' },
      '. En cada servicio, ',
      { resaltado: 'me ocupo personalmente de la visita, el tratamiento y el seguimiento' },
      ', con el respaldo de un equipo reducido y la habilitación correspondiente.',
    ],
    [
      'Me distingo por ofrecer una ',
      { resaltado: 'atención personalizada' },
      ', adaptándome a las necesidades específicas de cada cliente y estableciendo una comunicación cercana y directa durante todo el proceso. ',
      { resaltado: 'Coordino cada visita' },
      ' de manera previa, respetando los horarios acordados y procurando generar la ',
      { resaltado: 'menor interrupción posible' },
      ' en las actividades de mis clientes.',
    ],
    [
      'Nuestro principal objetivo es la ',
      { resaltado: 'satisfacción y conformidad' },
      ' de quienes confían en nosotros. Por ello, trabajamos con ',
      { resaltado: 'responsabilidad, seriedad y compromiso' },
      ', ofreciendo soluciones prácticas, eficaces y un ',
      { resaltado: 'seguimiento continuo' },
      ' que garantice los mejores resultados.',
    ],
    [
      'Creemos que la ',
      { resaltado: 'confianza' },
      ' se construye a través del buen servicio, la atención al detalle y el cumplimiento de cada compromiso asumido, valores que nos acompañan desde nuestros inicios como ',
      { resaltado: 'empresa familiar' },
      '.',
    ],
  ],
  destacados: [
    'Atención directa en cada visita',
    '20 años de experiencia',
    'Rural y urbano',
    'Productos autorizados',
  ],
  primeraVisita: {
    titulo: 'Primera Visita e Inspección Inicial',
    subtitulo: [
      'Un ',
      { resaltado: 'proceso claro y ordenado' },
      ' desde el primer contacto con su establecimiento.',
    ],
    pasos: [
      {
        titulo: 'Inspección y tratamiento',
        texto: [
          'En la primera visita, junto con la ',
          { resaltado: 'desinfección que corresponde' },
          ', realizo una ',
          { resaltado: 'inspección detallada' },
          ' de las instalaciones e informo las ',
          { resaltado: 'acciones preventivas' },
          ' para un servicio completo.',
        ],
      },
      {
        titulo: 'Conversación con el cliente',
        texto: [
          'Durante la visita ',
          { resaltado: 'converso con el cliente' },
          ' para conocer sus inquietudes, antecedentes de la infestación y las situaciones observadas en el lugar. Combinando la información que me brinda con los resultados de mi inspección, identifico los ',
          { resaltado: 'focos del problema' },
          ', las vías de acceso y las condiciones que favorecen la presencia de la plaga.',
        ],
      },
      {
        titulo: 'Diagnóstico y recomendaciones',
        texto: [
          'A partir de este diagnóstico, ',
          { resaltado: 'brindo recomendaciones prácticas y personalizadas' },
          ' orientadas a la prevención y el control. Considero que el éxito del tratamiento depende del ',
          { resaltado: 'trabajo conjunto' },
          ' entre el cliente y nosotros',
        ],
      },
    ],
  },
  habilitacion: {
    texto: [
      'Nuestra empresa se encuentra ',
      { resaltado: 'habilitada por el Gobierno de la Ciudad de Buenos Aires' },
      '. Actuamos a través de ',
      { resaltado: 'A.P.R.A. (Agencia de Protección Ambiental)' },
      ' con los siguientes registros:',
    ],
    registros: [
      { numero: '1244', actividad: 'Control de plagas' },
      {
        numero: '917',
        actividad: 'Limpieza de tanques de agua',
        saltoDespuesDe: 'Limpieza de',
      },
    ],
  },
}

export const tratamientos = {
  titulo: 'Tratamientos',
  subtitulo: 'Control de plagas, desinfección y saneamiento para hogares, comercios e industria.',
  verMas: 'Ver más',
  verMenos: 'Ver menos',
  imagenPorDefecto: '/assets/images/nosotros.png',
  imagenAlternativa: '/assets/images/hero-fondo.png',
  items: [
    {
      nombre: 'Desinfección',
      imagen: '/assets/images/nosotros.png',
      descripcion: [
        'Se utilizan ',
        { resaltado: 'amónios cuaternarios' },
        ' que abarcan ',
        { resaltado: 'bacterias, hongos y virus' },
        ' en superficies y en el aire. Recomendado para lugares con gran cantidad de gente.',
      ],
    },
    {
      nombre: 'Desratización',
      descripcion: [
        { resaltado: 'Inspección previa' },
        ' para identificar origen, intensidad, recorridos y refugios. ',
        { resaltado: 'Cebos parafinados de alta resistencia' },
        ', ',
        { resaltado: 'aptos para climas húmedos y exteriores' },
        ', colocados en portacebos o ',
        { resaltado: 'estaciones de seguridad señalizadas' },
        ', que protegen a personas, mascotas y fauna no objetivo.',
      ],
    },
    {
      nombre: 'Oficinas y Empresas',
      descripcion: [
        'Control de plagas en espacios corporativos. ',
        { resaltado: 'Tratamientos programados' },
        ' para mantener ambientes de trabajo ',
        { resaltado: 'libres de insectos.' },
        '.',
      ],
    },
    {
      nombre: 'Restaurantes y Gastronomía',
      descripcion: [
        { resaltado: 'Especialistas en el sector gastronómico' },
        ': control de plagas y saneamiento para restaurantes, bares, cafeterías y cocinas industriales. Tratamientos ',
        { resaltado: 'inoloros, seguros y altamente residuales' },
        ' que no interrumpen la actividad, con productos de última generación y estándares de ',
        { resaltado: 'higiene alimentaria' },
        '.',
      ],
    },
    {
      nombre: 'Limpieza de Tanques',
      descripcion: [
        'Limpieza y desinfección de tanques de agua. De tanque sucio a tanque limpio con ',
        { resaltado: 'protocolos profesionales' },
        '.',
      ],
    },
    {
      nombre: 'Control de Plagas',
      descripcion: [
        { resaltado: 'Tratamiento integral' },
        ' para comercios, oficinas y administraciones de edificios. Control de ',
        { resaltado: 'cucarachas, hormigas, pulgas, pulgas de papel, moscas, moscas de fruta, mosquitos y polillas' },
        ', y de cualquier otra plaga que ingrese desde el exterior o por vías de tránsito.',
      ],
    },
  ],
}

export const resenas = {
  titulo: 'Lo que dicen nuestros clientes',
  rating: 5,
  total: 10,
  ratingTexto: '5.0 en Google',
  verEnMaps: 'Ver en Google Maps',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Control+Total+Fumigaciones+Paz+CABA+rese%C3%B1as',
  items: [
    {
      nombre: 'Agustín Benítez',
      meta: '10 reseñas',
      fecha: 'Hace 2 años',
      estrellas: 5,
      texto:
        'Excelente servicio!! Me solucionaron una plaga que pasaron 4 empresas que solo me sacaron dinero. Ellos en solo un mes lo solucionaron. Super recomendable. Gracias.',
    },
    {
      nombre: 'Alejandra Padilla',
      meta: '5 reseñas',
      fecha: 'Hace 3 meses',
      estrellas: 5,
      texto:
        'Servicio excepcional. El producto que utiliza erradicó a los bichos en la primera pasada que hizo en la oficina. Muy conforme y los súper recomiendo. Me pasó el contacto mi amiga que tenía también una plaga y los fumigadores anteriores no se lo resolvían. Son excelentes.',
    },
    {
      nombre: 'Andrea',
      meta: 'Local Guide · 46 reseñas',
      fecha: 'Hace 3 meses',
      estrellas: 5,
      texto:
        'Excelente servicio. Hace años que confiamos en ellos para la fumigación y siempre han respondido con puntualidad y eficacia. La comunicación es muy fluida y el asesoramiento técnico es de primera. Es un placer trabajar con gente tan comprometida. Sumamente recomendable.',
    },
    {
      nombre: 'Franco Terrile',
      meta: '5 reseñas',
      fecha: 'Hace 3 meses',
      estrellas: 5,
      texto:
        'En mi caso, que tengo negocio de comidas, fue la solución definitiva. Luego de probar con 3 empresas de fumigación, me recomendaron Control Total. Con mucho conocimiento y mucho compromiso eliminaron en su totalidad la plaga de cucarachas que parecía imposible. Fueron 45 días intensos de compromiso mutuo entre nosotros y la empresa. Eternamente agradecidos.',
    },
    {
      nombre: 'Maximiliano Kowalski',
      meta: '1 reseña',
      fecha: 'Hace 3 meses',
      estrellas: 5,
      texto:
        'Somos una clínica de la salud y el servicio y profesionalismo de Control Total no tiene comparación. Realizamos fumigaciones y limpiezas de tanques de agua con ellos y siempre fue una respuesta inmediata y un trabajo impoluto. Super recomendable.',
    },
    {
      nombre: 'Joaco Pelaez',
      meta: '7 reseñas',
      fecha: 'Hace 3 meses',
      estrellas: 5,
      texto:
        'Excelente servicio de fumigación que brinda Paz. Muy profesional y efectivo. Mata cualquier plaga.',
    },
    {
      nombre: 'Milagros Martínez Aguirre',
      meta: 'Local Guide · 23 reseñas',
      fecha: 'Hace 2 años',
      estrellas: 5,
      texto: 'Excelente servicio. Muy profesional. Recomiendo.',
    },
    {
      nombre: 'Ramón Andrés Arriola',
      meta: '2 reseñas',
      fecha: 'Hace 3 meses',
      estrellas: 5,
      texto: 'Excelente servicio, estoy muy conforme, la mejor.',
    },
    {
      nombre: 'Sebastian',
      meta: '13 reseñas',
      fecha: 'Hace 2 años',
      estrellas: 5,
      texto:
        'Excelente servicio, pudieron eliminar las cucarachas coloradas chiquitas. Ojalá te hubiera conocido antes. Gracias.',
    },
  ],
}

export const contacto = {
  titulo: 'Contactanos',
  ubicacionTitulo: 'Encontranos en',
  sedes: [
    {
      nombre: 'Capital Federal',
      direccion: 'Cnel. Niceto Vega 6089',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Cnel.+Niceto+Vega+6089,+C1414+CABA,+Argentina',
      mapEmbedUrl:
        'https://www.google.com/maps?q=Cnel.+Niceto+Vega+6089,+C1414+Cdad.+Autónoma+de+Buenos+Aires,+Argentina&output=embed',
    },
  ],
  email: 'controltotaldesinfeccion@gmail.com',
  notaLegal:
    'Por quejas, denuncias y/o sugerencias dirigirse a la Dirección General de Control Ambiental, Av. Escalada & Castañares, Paseo Malvinas, CIFA (Centro de Información y Formación Ambiental) de 8 a 14hs. o llamar al 147.',
}
