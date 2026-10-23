import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { trackConversion } from '../utils/analytics';

export const AboutUsSection: React.FC = () => {
  const handleCall = () => {
    trackConversion('click_to_call', { placement: 'about_us_card' });
  };

  return (
    <section id="sobre-nosotros" className="pt-2 pb-2 text-center h-full" data-purpose="about-us">
      {/* White Card Container matching the site's bold card style */}
      <div className="bg-white rounded-[32px] sm:rounded-[36px] border-2 border-black p-6 sm:p-8 md:p-9 max-w-[340px] sm:max-w-md md:max-w-none h-full flex flex-col justify-between mx-auto shadow-sm text-left">
        <div>
          {/* Title */}
          <div className="text-center mb-6">
            <span className="inline-block bg-[#feb616] text-black text-[11px] md:text-xs font-extrabold uppercase px-3 py-1 rounded-full border border-black mb-2 tracking-wider">
              Cerrajeros de Proximidad
            </span>
            <h2 className="text-[#feb616] font-extrabold text-[26px] sm:text-[30px] md:text-[32px] leading-tight">
              Sobre Nosotros
            </h2>
          </div>

          {/* Value Points */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#feb616] border border-black flex items-center justify-center shrink-0 font-extrabold text-black text-sm">
                ✓
              </span>
              <div>
                <h3 className="font-extrabold text-sm md:text-base text-black">
                  Trato Directo y Local
                </h3>
                <p className="text-xs md:text-sm text-black/80 font-medium leading-relaxed mt-0.5">
                  Somos cerrajeros profesionales afincados en el Alt Penedès. Sin intermediarios, sin comisionistas ni centralitas externas de terceros.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#feb616] border border-black flex items-center justify-center shrink-0 font-extrabold text-black text-sm">
                ✓
              </span>
              <div>
                <h3 className="font-extrabold text-sm md:text-base text-black">
                  Apertura Limpia Sin Romper
                </h3>
                <p className="text-xs md:text-sm text-black/80 font-medium leading-relaxed mt-0.5">
                  Cuidamos tu puerta. Siempre priorizamos métodos no destructivos (ganzúas técnicas y mica) para abrir sin ocasionar desperfectos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#feb616] border border-black flex items-center justify-center shrink-0 font-extrabold text-black text-sm">
                ✓
              </span>
              <div>
                <h3 className="font-extrabold text-sm md:text-base text-black">
                  Presupuesto Telefónico Cerrado
                </h3>
                <p className="text-xs md:text-sm text-black/80 font-medium leading-relaxed mt-0.5">
                  Transparencia total: te informamos del coste exacto antes de salir hacia tu ubicación, para que decidas con total seguridad.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#feb616] border border-black flex items-center justify-center shrink-0 font-extrabold text-black text-sm">
                ✓
              </span>
              <div>
                <h3 className="font-extrabold text-sm md:text-base text-black">
                  Disponibilidad 24h los 365 días
                </h3>
                <p className="text-xs md:text-sm text-black/80 font-medium leading-relaxed mt-0.5">
                  Atendemos emergencias de día y de noche con un tiempo medio de llegada de {siteConfig.avgArrivalTime} y taller móvil completamente equipado.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Small CTA Banner inside card */}
        <div className="mt-6 pt-5 border-t border-black/10 text-center">
          <p className="text-xs md:text-sm font-bold text-black mb-3">
            ¿Necesitas ayuda inmediata en tu puerta?
          </p>
          <a
            href={siteConfig.phoneHref}
            onClick={handleCall}
            className="w-full py-3 px-4 rounded-xl bg-[#feb616] border-[1.5px] border-black text-black font-extrabold text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 shadow-xs active:scale-95 transition-transform hover:brightness-105"
          >
            <svg className="w-4 h-4 text-black shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
            </svg>
            LLAMAR AHORA: {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
