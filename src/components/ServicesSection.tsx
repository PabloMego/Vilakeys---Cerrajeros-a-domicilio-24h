import React, { useState } from 'react';
import { siteConfig, type ServiceItem } from '../config/siteConfig';
import { trackConversion } from '../utils/analytics';

export const ServicesSection: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    const nextId = selectedServiceId === id ? null : id;
    setSelectedServiceId(nextId);
    if (nextId) {
      trackConversion('service_inquiry', { service: nextId, placement: 'services_list' });
    }
  };

  const handleCall = (service: ServiceItem) => {
    trackConversion('click_to_call', {
      service: service.id,
      placement: 'service_card_call'
    });
  };

  const handleWhatsApp = (service: ServiceItem) => {
    trackConversion('click_to_whatsapp', {
      service: service.id,
      placement: 'service_card_whatsapp'
    });
  };

  return (
    <section id="servicios" className="pt-6 pb-6 text-left" data-purpose="services-section">
      <div className="bg-white rounded-[32px] sm:rounded-[36px] border-2 border-black p-6 sm:p-8 md:p-10 shadow-sm">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-block bg-[#feb616] text-black text-[11px] md:text-xs font-extrabold uppercase px-3.5 py-1 rounded-full border border-black mb-3 tracking-wider">
            Servicios Profesionales de Cerrajería
          </span>
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-extrabold text-black leading-tight mb-3">
            ¿Qué servicio de cerrajería necesitas hoy?
          </h2>
          <p className="text-sm sm:text-base text-black/80 font-medium">
            Atención técnica directa sin intermediarios en <strong className="text-black">Vilafranca del Penedès</strong> y municipios de la comarca. Aperturas limpias, máxima seguridad y presupuesto telefónico cerrado.
          </p>
        </div>

        {/* Services Grid: 1 col on mobile, 2 cols on md, 3 cols on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.services.map((service) => {
            const isExpanded = selectedServiceId === service.id;

            return (
              <article
                key={service.id}
                id={service.id}
                className={`rounded-[24px] border-2 border-black p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between ${
                  isExpanded ? 'bg-[#fff9e6] shadow-md' : 'bg-white hover:border-black/70 hover:shadow-xs'
                }`}
              >
                <div>
                  {/* Category and Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] uppercase font-extrabold text-black/60 tracking-wider">
                      {service.category}
                    </span>
                    <span className="bg-[#feb616] text-black text-[10px] sm:text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border border-black shrink-0">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-black leading-snug mb-2.5">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-black/80 font-medium leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Key points checklist */}
                  <ul className="space-y-1.5 mb-4">
                    {service.bulletPoints.slice(0, 3).map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-black font-semibold">
                        <span className="text-[#feb616] font-black text-sm shrink-0">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expandable Technical Details */}
                  {isExpanded && (
                    <div className="pt-3 pb-2 border-t border-black/15 space-y-3 animate-in fade-in duration-200">
                      <div>
                        <h4 className="text-xs uppercase font-extrabold text-black/70 tracking-wider mb-1">
                          Situaciones habituales:
                        </h4>
                        <ul className="list-disc pl-4 text-xs text-black/80 space-y-1">
                          {service.situations.map((sit, sIdx) => (
                            <li key={sIdx}>{sit}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-[#feb616]/20 p-2.5 rounded-xl border border-black/10">
                        <p className="text-[11px] text-black font-bold leading-tight">
                          <span className="font-extrabold">Tarifas transparentes: </span>
                          {service.priceFactors}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-black/10 mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={siteConfig.phoneHref}
                      onClick={() => handleCall(service)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#feb616] border-[1.5px] border-black text-black font-extrabold text-xs sm:text-[13px] flex items-center justify-center gap-1.5 active:scale-95 transition-transform hover:brightness-105"
                      title={`Llamar para ${service.shortTitle}`}
                    >
                      <svg className="w-3.5 h-3.5 text-black shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
                      </svg>
                      <span>Llamar Ahora</span>
                    </a>

                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Hola VilaKeys, necesito información o asistencia sobre: ${service.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleWhatsApp(service)}
                      className="py-2.5 px-3 rounded-xl bg-white border-[1.5px] border-black text-black font-extrabold text-xs flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                      title="Consultar por WhatsApp"
                      aria-label={`WhatsApp para ${service.shortTitle}`}
                    >
                      <span className="text-xs font-bold">WhatsApp</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className="w-full text-center text-[11px] font-bold text-black/70 hover:text-black py-1 focus:outline-none cursor-pointer"
                  >
                    {isExpanded ? '▲ Ver menos' : '▼ Ver información técnica y tarifas'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
