import heroImage from '../assets/hero.png';
import logoImage from '../assets/logo.png';
import lockIcon from '../assets/lock-icon.png';

export const siteConfig = {
  name: 'Vilakeys',
  tagline: 'Cerrajeros a Domicilio 24h',
  subtitle: 'Vilafranca y Pueblos Colindantes',
  phone: '+34 711 55 24 54',
  phoneDisplay: '711 55 24 54',
  phoneRaw: '+34711552454',
  whatsappNumber: '34711552454',
  whatsappMessage: 'Hola, necesito un cerrajero urgente',
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
  avgArrivalTime: '20 minutos',
  heroImage,
  logoImage,
  lockIcon,
  localities: [
    'Els Monjos',
    '• Els Monjos',
    'Vilafranca',
    '• Les Cabanyes',
    'Moja',
    '• Sant Pere Molanta'
  ],
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
    }
  ],
  navLinks: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Cobertura Alt Penedès', href: '#cobertura' },
    { label: 'Sobre Nosotros', href: '#sobre-nosotros' }
  ]
};

