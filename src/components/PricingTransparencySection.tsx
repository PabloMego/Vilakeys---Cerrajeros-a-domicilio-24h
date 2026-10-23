import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { trackConversion } from '../utils/analytics';

export const PricingTransparencySection: React.FC = () => {
  const handleCall = () => {
    trackConversion('click_to_call', { placement: 'pricing_transparency_section' });
  };

  return (
    <section id="tarifas-garantias" className="pt-4 pb-4 text-left" data-purpose="pricing-transparency">
      <div className="bg-white rounded-[32px] sm:rounded-[36px] border-2 border-black p-6 sm:p-8 md:p-10 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block bg-[#feb616] text-black text-[11px] md:text-xs font-extrabold uppercase px-3.5 py-1 rounded-full border border-black mb-3 tracking-wider">
            Compromiso VilaKeys
          </span>
          <h2 className="text-[26px] sm:text-[32px] font-extrabold text-black leading-tight mb-3">
            Tarifas Claras y Presupuesto Telefónico Cerrado
          </h2>
          <p className="text-xs sm:text-base text-black/80 font-medium">
            Sin intermediarios, sin tarifas sorpresa al llegar a tu puerta y con total transparencia desde el primer minuto.
          </p>
        </div>

        {/* 4 Pillars of Confidence Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#fff9e6] rounded-2xl border-[1.5px] border-black p-4 flex flex-col justify-between">
            <div>
              <span className="text-2xl mb-2 block">📞</span>
              <h3 className="font-extrabold text-sm sm:text-base text-black mb-1">
                Presupuesto Telefónico Previo
              </h3>
              <p className="text-xs text-black/80 font-medium leading-relaxed">
                Nos explicas el caso y te comunicamos el precio antes de desplazarnos. Sabrás el importe exacto antes de autorizar el trabajo.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-black/10 text-[11px] font-bold text-black/60">
              100% Sin sorpresas
            </div>
          </div>

          <div className="bg-[#fff9e6] rounded-2xl border-[1.5px] border-black p-4 flex flex-col justify-between">
            <div>
              <span className="text-2xl mb-2 block">🛡️</span>
              <h3 className="font-extrabold text-sm sm:text-base text-black mb-1">
                Apertura Limpia Sin Daños
              </h3>
              <p className="text-xs text-black/80 font-medium leading-relaxed">
                Priorizamos siempre técnicas de ganzuado profesional y herramientas no destructivas. Si la puerta sólo está de golpe, no rompemos.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-black/10 text-[11px] font-bold text-black/60">
              Cuidamos tu puerta y cerradura
            </div>
          </div>

          <div className="bg-[#fff9e6] rounded-2xl border-[1.5px] border-black p-4 flex flex-col justify-between">
            <div>
              <span className="text-2xl mb-2 block">📄</span>
              <h3 className="font-extrabold text-sm sm:text-base text-black mb-1">
                Factura Oficial para Seguro
              </h3>
              <p className="text-xs text-black/80 font-medium leading-relaxed">
                Emitimos factura detallada con CIF legal y desglose de IVA para que puedas solicitar el reintegro a tu seguro de hogar multirriesgo.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-black/10 text-[11px] font-bold text-black/60">
              Válida para aseguradoras
            </div>
          </div>

          <div className="bg-[#fff9e6] rounded-2xl border-[1.5px] border-black p-4 flex flex-col justify-between">
            <div>
              <span className="text-2xl mb-2 block">🔑</span>
              <h3 className="font-extrabold text-sm sm:text-base text-black mb-1">
                Bombines Precintados
              </h3>
              <p className="text-xs text-black/80 font-medium leading-relaxed">
                En caso de sustitución, abrimos el blíster del bombín y las llaves precintadas de fábrica delante de ti para tu máxima seguridad.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-black/10 text-[11px] font-bold text-black/60">
              Garantía legal del fabricante
            </div>
          </div>
        </div>

        {/* Factors influencing price explanation */}
        <div className="rounded-2xl border border-black/20 p-5 bg-white mb-6">
          <h4 className="font-extrabold text-sm sm:text-base text-black mb-2 flex items-center gap-2">
            <span>ℹ️</span> ¿Qué factores determinan el precio de un cerrajero?
          </h4>
          <p className="text-xs sm:text-sm text-black/80 font-medium leading-relaxed mb-3">
            Para ofrecerte un presupuesto realista y exacto por teléfono, valoramos tres factores técnicos:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="p-3 rounded-xl bg-black/5">
              <strong className="block text-black font-extrabold mb-1">1. Estado de la cerradura:</strong>
              <p className="text-black/80">Si la puerta está sólo cerrada de golpe (llave dentro o resbalón) la intervención es más rápida y económica que si tiene los cerrojos y vueltas de llave echados.</p>
            </div>
            <div className="p-3 rounded-xl bg-black/5">
              <strong className="block text-black font-extrabold mb-1">2. Tipo de puerta y seguridad:</strong>
              <p className="text-black/80">Las puertas estándar tienen mecanismos más accesibles que las puertas acorazadas con escudos protectores de acero o cierres embutidos multipunto.</p>
            </div>
            <div className="p-3 rounded-xl bg-black/5">
              <strong className="block text-black font-extrabold mb-1">3. Horario del servicio:</strong>
              <p className="text-black/80">Las intervenciones en horario laboral habitual difieren de los servicios nocturnos de madrugada o en días festivos oficiales.</p>
            </div>
          </div>
        </div>

        {/* Quick action bar */}
        <div className="text-center pt-2">
          <a
            href={siteConfig.phoneHref}
            onClick={handleCall}
            className="inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-2xl bg-[#feb616] border-2 border-black text-black font-extrabold text-sm sm:text-base shadow-sm hover:brightness-105 active:scale-95 transition-all"
          >
            <svg className="w-5 h-5 text-black shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
            </svg>
            <span>Pedir Presupuesto Telefónico Cerrado Ahora</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingTransparencySection;
