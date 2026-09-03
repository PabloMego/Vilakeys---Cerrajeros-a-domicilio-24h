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
  heroImage: 'https://lh3.googleusercontent.com/aida/AEtjO1XMEt9JiSxpzMWF9oA6DYJDcM1B3h4SHLliMjeAVYb2MuDtcQ7A5ExRr28HB6DhaUHBbjQM_ZwwwRhNIC8Lh_zVQS42uua-pGlH4zFdxzMJscMQawF5mVIgFLhvappe3aezAfBvGFI97ghUtJ7ZmiM7DSusCbP6kljGN0030dS7ZDU_sxpSW7c6hMBvPhKrHVbKYmWNbsex58V5IjEKefIbN1ocV-sfpJ-2L6JAHoOo9MIPrSxJXRE7zA',
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
