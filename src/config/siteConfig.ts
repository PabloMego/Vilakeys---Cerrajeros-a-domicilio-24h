import heroImage from '../assets/hero.png';

export const siteConfig = {
  name: 'Vilakeys',
  tagline: 'Cerrajeros a Domicilio 24h',
  subtitle: 'Vilafranca y Pueblos Colindantes',
  phone: '600 000 000',
  phoneRaw: '600000000',
  whatsappNumber: '34600000000',
  whatsappMessage: 'Hola, necesito un cerrajero urgente',
  get phoneHref() {
    return `tel:${this.phoneRaw}`;
  },
  get whatsappHref() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
  avgArrivalTime: '22 minutos',
  heroImage,
  localities: [
    'Vilafranca del Penedès',
    'Els Monjos',
    'Moja',
    'Les Cabanyes',
    'La Granada',
    'Sant Pere Molanta'
  ],
  navLinks: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Cobertura Alt Penedès', href: '#cobertura' }
  ]
};
