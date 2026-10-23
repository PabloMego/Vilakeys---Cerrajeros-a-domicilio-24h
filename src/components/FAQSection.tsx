import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { trackConversion } from '../utils/analytics';

export const FAQSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // First question open by default

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
      trackConversion('faq_opened', {
        question: siteConfig.faqs[index]?.question,
        placement: 'faq_accordion'
      });
    }
  };

  return (
    <section id="faq" className="pt-4 pb-4 text-left" data-purpose="faq-section">
      <div className="bg-white rounded-[32px] sm:rounded-[36px] border-2 border-black p-6 sm:p-8 md:p-10 shadow-sm">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block bg-[#feb616] text-black text-[11px] md:text-xs font-extrabold uppercase px-3.5 py-1 rounded-full border border-black mb-3 tracking-wider">
            Resolvemos tus dudas
          </span>
          <h2 className="text-[26px] sm:text-[32px] font-extrabold text-black leading-tight mb-3">
            Preguntas Frecuentes sobre Cerrajeros en Vilafranca
          </h2>
          <p className="text-xs sm:text-base text-black/80 font-medium">
            Todo lo que necesitas saber antes de solicitar un cerrajero urgente o concertado en el Alt Penedès.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);

            return (
              <div
                key={index}
                className={`rounded-2xl border-2 border-black transition-all duration-200 overflow-hidden ${
                  isOpen ? 'bg-[#fff9e6]' : 'bg-white hover:border-black/70'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-[#feb616] border border-black flex items-center justify-center shrink-0 font-extrabold text-xs text-black">
                      ?
                    </span>
                    <span className="font-extrabold text-sm sm:text-base text-black leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={`w-7 h-7 rounded-full border border-black flex items-center justify-center shrink-0 text-black font-black transition-transform duration-300 text-sm ${
                      isOpen ? 'rotate-180 bg-black text-[#feb616]' : 'bg-white'
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 animate-in fade-in duration-200">
                    <div className="border-t border-black/10 pt-3">
                      <p className="text-xs sm:text-sm text-black/85 font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                      <div className="mt-2 text-right">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-black/50 bg-black/5 px-2 py-0.5 rounded">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Small reassurance footer */}
        <div className="text-center mt-8 pt-6 border-t border-black/10">
          <p className="text-xs sm:text-sm font-bold text-black mb-3">
            ¿Tienes otra duda o necesitas asistencia inmediata?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className="py-2.5 px-5 rounded-xl bg-[#feb616] border-[1.5px] border-black text-black font-extrabold text-xs sm:text-sm flex items-center gap-2 hover:brightness-105 active:scale-95 transition-all"
            >
              <span>Llamar al {siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 rounded-xl bg-white border-[1.5px] border-black text-black font-extrabold text-xs sm:text-sm hover:bg-black hover:text-white transition-colors"
            >
              <span>Preguntar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
