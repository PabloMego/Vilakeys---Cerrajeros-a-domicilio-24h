import heroImage from '../assets/hero.jpg';
import logoImage from '../assets/logo.png';
import lockIcon from '../assets/lock-icon.png';

export interface LocalityItem {
  id: string;
  name: string;
  shortName: string;
  postalCode: string;
  estimatedArrival: string;
  roadAccess: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  iconName: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  bulletPoints: string[];
  situations: string[];
  priceFactors: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const siteConfig = {
  name: 'Vilakeys',
  legalName: 'VilaKeys · Cerrajeros a Domicilio 24h',
  tagline: 'Cerrajeros a Domicilio 24h',
  subtitle: 'Vilafranca del Penedès y Comarca del Alt Penedès',
  canonicalUrl: 'https://www.vilakeys.es',
  domain: 'vilakeys.es',
  phone: '+34 711 55 24 54',
  phoneDisplay: '711 55 24 54',
  phoneRaw: '+34711552454',
  whatsappNumber: '34711552454',
  whatsappMessage: 'Hola, necesito un cerrajero urgente en el Alt Penedès',
  email: 'vilakeys.info@gmail.com',
  get emailHref() {
    return `mailto:${this.email}`;
  },
  get phoneHref() {
    return `tel:${this.phoneRaw}`;
  },
  get whatsappHref() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
  googleMapsUrl: 'https://maps.app.goo.gl/Tb92yaHdnUp59g257',
  avgArrivalTime: '20 minutos',
  heroImage,
  logoImage,
  lockIcon,

  // Localidades atendidas en Alt Penedès (limpio, sin caracteres extraños ni duplicados)
  localities: [
    'Vilafranca del Penedès',
    'Santa Margarida i els Monjos',
    'Sant Sadurní d\'Anoia',
    'Olèrdola (Moja)',
    'Sant Pere Molanta',
    'Les Cabanyes',
    'La Granada',
    'Sant Martí Sarroca',
    'Gelida',
    'Subirats'
  ],

  // Detalle enriquecido para SEO Local y conversión geográfica
  localityDetails: [
    {
      id: 'vilafranca',
      name: 'Vilafranca del Penedès',
      shortName: 'Vilafranca',
      postalCode: '08720',
      estimatedArrival: '15 - 20 minutos',
      roadAccess: 'Centro neurálgico y base operativa',
      description: 'Atención urgente en todos los barrios: Centre, La Girada, Sant Julià, Poble Nou, Les Clotes, Molí d\'en Rovira y Espirall.'
    },
    {
      id: 'els-monjos',
      name: 'Santa Margarida i els Monjos',
      shortName: 'Els Monjos',
      postalCode: '08730',
      estimatedArrival: '15 - 20 minutos',
      roadAccess: 'Acceso directo por N-340',
      description: 'Cobertura rápida a domicilio para aperturas limpias de puertas y cambio de bombines en Els Monjos, La Ràpita y Cal Salines.'
    },
    {
      id: 'sant-sadurni',
      name: 'Sant Sadurní d\'Anoia',
      shortName: 'Sant Sadurní',
      postalCode: '08770',
      estimatedArrival: '20 - 25 minutos',
      roadAccess: 'Conexión por C-243a y AP-7',
      description: 'Servicio 24 horas para viviendas, comercios y bodegas. Aperturas urgentes y cerraduras de seguridad.'
    },
    {
      id: 'olerdola-moja',
      name: 'Olèrdola (Moja y Sant Pere Molanta)',
      shortName: 'Moja / Olèrdola',
      postalCode: '08734',
      estimatedArrival: '15 - 20 minutos',
      roadAccess: 'Conexión inmediata por BV-2119 y C-15',
      description: 'Intervenciones inmediatas en Moja, Sant Pere Molanta, Viladellops y polígonos colindantes.'
    },
    {
      id: 'les-cabanyes',
      name: 'Les Cabanyes',
      shortName: 'Les Cabanyes',
      postalCode: '08791',
      estimatedArrival: '15 minutos',
      roadAccess: 'Acceso directo contiguo a Vilafranca por BV-2127',
      description: 'Proximidad inmediata: cerrajero directo a tu puerta para cualquier problema con cerraduras o llaves puestas por dentro.'
    },
    {
      id: 'la-granada',
      name: 'La Granada',
      shortName: 'La Granada',
      postalCode: '08792',
      estimatedArrival: '15 - 20 minutos',
      roadAccess: 'Acceso directo por C-243a',
      description: 'Llegada rápida para urgencias 24h, sustitución de cilindros y mejora de la seguridad del hogar.'
    },
    {
      id: 'sant-marti-sarroca',
      name: 'Sant Martí Sarroca',
      shortName: 'Sant Martí',
      postalCode: '08731',
      estimatedArrival: '20 minutos',
      roadAccess: 'Ruta directa por BV-2121',
      description: 'Cerrajero a domicilio para casas unifamiliares, pisos y locales comerciales en el municipio.'
    },
    {
      id: 'gelida',
      name: 'Gelida',
      shortName: 'Gelida',
      postalCode: '08790',
      estimatedArrival: '25 minutos',
      roadAccess: 'Acceso rápido por autopista AP-7',
      description: 'Asistencia para aperturas de urgencia y cerraduras de alta seguridad antibumping.'
    }
  ] as LocalityItem[],

  // Catálogo de Servicios Oficiales para SEO y Conversión
  services: [
    {
      id: 'apertura-puertas',
      title: 'Apertura de Puertas Urgente Sin Romper',
      shortTitle: 'Apertura de Puertas',
      category: 'Urgencias 24h',
      badge: '95% Sin Rotura',
      iconName: 'DoorOpen',
      shortDescription: 'Apertura técnica y no destructiva para llaves olvidadas por dentro, cerraduras atascadas o llaves perdidas.',
      fullDescription: 'Intervenimos con técnicas especializadas de ganzuado profesional y mica técnica que permiten abrir tu puerta sin causar daños en la cerradura ni en el marco, ahorrándote costes de reparación innecesarios.',
      bulletPoints: [
        'Apertura limpia y sin rotura de la puerta',
        'Llaves puestas por dentro o puerta echada de golpe',
        'Llaves extraviadas o robadas',
        'Herramientas profesionales de cerrajería técnica no destructiva',
        'Llegada media en 20 minutos en todo el Alt Penedès'
      ],
      situations: [
        'Has salido a tirar la basura y la puerta se ha cerrado con la corriente.',
        'Las llaves se han quedado puestas por detrás de la cerradura.',
        'La cerradura se ha quedado bloqueada o la llave gira en falso.'
      ],
      priceFactors: 'El coste de la apertura depende principalmente de si la puerta está sólo de golpe (sin vueltas de llave) o con cerrojo echado, y de la franja horaria.'
    },
    {
      id: 'cambio-bombines',
      title: 'Cambio de Bombines y Cerraduras de Seguridad',
      shortTitle: 'Cambio de Bombines',
      category: 'Seguridad Residencial',
      badge: 'Anti-Bumping',
      iconName: 'ShieldCheck',
      shortDescription: 'Instalación y sustitución de bombines de alta seguridad con protección antibumping, antiganzúa y antitaladro.',
      fullDescription: 'El 80% de los robos se producen mediante técnicas de bumping o ganzuado en bombines obsoletos. Actualizamos tu cerradura con cilindros europeos de máxima seguridad con tarjeta de propiedad para duplicados.',
      bulletPoints: [
        'Cilindros de perfil europeo de máxima seguridad',
        'Protección certificada antibumping, antitaladro y antiextracción',
        'Llaves de puntos de alta precisión con tarjeta de propiedad',
        'Marcas de referencia: Tesa, Mauer, Cisa, MCM, Kaba, Mottura',
        'Entrega de llaves precintadas de fábrica al propietario'
      ],
      situations: [
        'Te has mudado a una nueva vivienda o piso de alquiler.',
        'Has perdido un juego de llaves o sospechas de una copia no autorizada.',
        'Quieres proteger tu hogar contra intrusiones con técnica bumping.'
      ],
      priceFactors: 'Varía según el nivel de seguridad del cilindro elegido (estándar, antibumping reforzado o alta gama con puente reforzado antirotura).'
    },
    {
      id: 'urgencias-24h',
      title: 'Cerrajero Urgente 24 Horas y Festivos',
      shortTitle: 'Urgencias 24h',
      category: 'Disponibilidad Continua',
      badge: '24/7/365',
      iconName: 'ClockAlert',
      shortDescription: 'Servicio de guardia permanente las 24 horas del día, de noche, fines de semana y festivos.',
      fullDescription: 'Las urgencias no eligen horario. Contamos con cerrajero de guardia local equipado con taller móvil en el Alt Penedès para atender cualquier emergencia con presupuesto cerrado antes del desplazamiento.',
      bulletPoints: [
        'Atención inmediata 24h los 365 días del año',
        'Sin intermediarios: hablas directamente con el cerrajero de guardia',
        'Presupuesto previo cerrado por teléfono para tu tranquilidad',
        'Vehículo taller equipado con repuestos y bombines homologados',
        'Factura oficial válida para presentar a tu seguro de hogar'
      ],
      situations: [
        'Llegas a casa de madrugada y la cerradura no abre.',
        'Incidencia en fin de semana o día festivo en Vilafranca.',
        'Intento de robo con daños en la cerradura que requiere cierre seguro inmediato.'
      ],
      priceFactors: 'Informamos con total transparencia de la tarifa telefónicamente antes de salir, incluyendo el suplemento de nocturnidad o festivo si corresponde.'
    },
    {
      id: 'puertas-blindadas',
      title: 'Cerrajería para Puertas Blindadas y Acorazadas',
      shortTitle: 'Puertas Blindadas',
      category: 'Alta Seguridad',
      badge: 'Escudos Macizos',
      iconName: 'LockKeyhole',
      shortDescription: 'Apertura técnica, ajuste y refuerzo de cerraduras multipunto y escudos protectores macizos.',
      fullDescription: 'Las puertas blindadas y acorazadas requieren herramientas de precisión y experiencia técnica específica para evitar dañar los mecanismos internos multipunto y las barras de anclaje.',
      bulletPoints: [
        'Apertura y reparación de cerraduras embutidas multipunto',
        'Instalación de escudos de seguridad acorazados antiextracción',
        'Ajuste de holguras, roce en el marco y alineación de pestillos',
        'Sustitución de borjas por bombín de perfil europeo moderno',
        'Asesoramiento personalizado en protección física del acceso'
      ],
      situations: [
        'La puerta blindada roza en el suelo o cuesta girar la llave.',
        'Tu puerta tiene cerradura antigua de borjas y deseas actualizarla a bombín antibumping.',
        'Necesitas reforzar la protección exterior con un escudo protector macizo.'
      ],
      priceFactors: 'Depende del tipo de mecanismo multipunto y de la compatibilidad del escudo protector con el herraje de la puerta.'
    },
    {
      id: 'negocios-comercios',
      title: 'Cerrajería para Negocios y Persianas Comerciales',
      shortTitle: 'Comercios y Locales',
      category: 'Servicios Comerciales',
      badge: 'Soluciones Locales',
      iconName: 'Store',
      shortDescription: 'Aperturas urgentes de locales, cambio de cerraduras en persianas enrollables y cerrojos de anclaje al suelo.',
      fullDescription: 'Garantizamos que tu negocio en Vilafranca o comarca no pierda horas de actividad. Solucionamos problemas de persianas comerciales bloqueadas y cambios de combinación de cerraduras por rotación de personal.',
      bulletPoints: [
        'Apertura urgente de persianas metálicas comerciales y rejas',
        'Instalación de cerraduras de suelo y candados de alta resistencia',
        'Cambio urgente de bombín tras cese de personal o cambio de titularidad',
        'Mantenimiento de cierres y bombines para naves y comercios',
        'Facturación desglosada para autónomos y empresas'
      ],
      situations: [
        'La persiana del comercio está atascada a primera hora de apertura.',
        'Pérdida de llaves del local o cambio de bombín preventivo.',
        'Necesidad de instalar cerrojos de suelo para blindar el cierre exterior.'
      ],
      priceFactors: 'Varía según el tipo de cierre metálico y el sistema de anclaje al pavimento.'
    }
  ] as ServiceItem[],

  // Preguntas Frecuentes (FAQ) de alta intención de búsqueda
  faqs: [
    {
      category: 'Precios y Tarifas',
      question: '¿Por qué dais presupuesto telefónico cerrado antes de salir?',
      answer: 'Porque creemos en la transparencia absoluta. En el sector de la cerrajería abundan los sobrecostes inesperados. En VilaKeys te pedimos que nos expliques qué ocurre (tipo de puerta, si está echada de golpe o con llave) y te damos el precio cerrado antes de subirnos al vehículo.'
    },
    {
      category: 'Aperturas',
      question: '¿Se rompe la puerta o la cerradura al abrir?',
      answer: 'En más del 95% de los casos de puertas cerradas de golpe o con llaves por dentro, realizamos una apertura limpia sin causar ningún desperfecto, utilizando ganzúas especializadas o técnica de mica. Solo en casos excepcionales con cerrojo echado y avería mecánica interna se recurre a técnicas destructivas controladas, sustituyendo el bombín al instante.'
    },
    {
      category: 'Tiempos',
      question: '¿Cuánto tardáis en llegar a mi casa en Vilafranca o pueblos cercanos?',
      answer: 'Nuestro tiempo medio de llegada es de 20 minutos. Al ser cerrajeros de proximidad afincados en el Alt Penedès y contar con vehículo taller móvil, nos desplazamos de forma directa sin pasar por intermediarios ni esperas de centralitas externas.'
    },
    {
      category: 'Seguridad',
      question: '¿Qué es el bumping y por qué conviene cambiar a un bombín antibumping?',
      answer: 'El bumping es un método de apertura silencioso y rápido que utilizan los ladrones mediante una llave manipulada que golpean para hacer saltar los pistones. Un bombín moderno antibumping cuenta con pistones de acero reforzado, pitones antiganzúa y protección antitaladro que impiden este ataque.'
    },
    {
      category: 'Seguros',
      question: '¿El seguro de hogar cubre la factura del cerrajero?',
      answer: 'Sí, la gran mayoría de pólizas de hogar multirriesgo cubren la asistencia por robo de llaves, extravío, vandalismo o bloqueo de cerradura. Con VilaKeys siempre te entregamos factura legal y detallada con CIF y desglose de IVA para que puedas tramitar el reembolso con tu aseguradora sin inconvenientes.'
    },
    {
      category: 'Servicio 24h',
      question: '¿Trabajáis de madrugada y durante los días festivos?',
      answer: 'Sí. Disponemos de cerrajero de guardia activo las 24 horas del día, los 365 días del año en todo el Alt Penedès, tanto en fines de semana como en días festivos oficiales.'
    }
  ] as FAQItem[],

  // Redes Sociales
  socials: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/vilakeys/',
      handle: '@vilakeys'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@vilakeys1',
      handle: '@vilakeys1'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UC7rkOaWRBf6nWPt8ZC7Nfrw',
      handle: 'Vilakeys'
    },
    {
      name: 'Google Maps',
      url: 'https://maps.app.goo.gl/Tb92yaHdnUp59g257',
      handle: 'Ficha Oficial VilaKeys'
    }
  ],

  // Enlaces de Navegación del Header y Footer
  navLinks: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Cobertura Alt Penedès', href: '#cobertura' },
    { label: 'Tarifas y Garantías', href: '#tarifas-garantias' },
    { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { label: 'Preguntas Frecuentes', href: '#faq' }
  ]
};

export default siteConfig;
