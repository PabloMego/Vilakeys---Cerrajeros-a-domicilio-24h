import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export const HeroSection: React.FC = () => {
  const [isCalling, setIsCalling] = useState(false);

  const handleCallClick = () => {
    setIsCalling(true);
    setTimeout(() => {
      setIsCalling(false);
    }, 1200);
  };

  return (
    <section id="inicio" className="pt-2 md:pt-8 pb-6 md:pb-10 text-center md:text-left" data-purpose="hero-section">
      <div className="md:grid md:grid-cols-12 md:gap-10 lg:gap-14 md:items-center">
        {/* Left Column on Desktop / Main Block on Mobile */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start">
          {/* 1. Arrival Time Badge */}
          <div className="inline-flex items-center justify-center md:justify-start gap-1.5 text-white font-medium text-xs sm:text-sm md:text-base mb-4">
            <svg
              className="w-4 h-4 text-white shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Tiempo medio de llegada: {siteConfig.avgArrivalTime}</span>
          </div>

          {/* 2. Main Headline */}
          <h1 className="text-[34px] sm:text-[44px] md:text-[50px] lg:text-[58px] font-extrabold text-black tracking-tight leading-[1.08] mb-4">
            ¿Te has quedado<br className="md:hidden" /> fuera de casa?
          </h1>

          {/* 3. Reassurance Paragraph */}
          <p className="text-[15px] sm:text-base md:text-lg font-bold text-black leading-snug max-w-[310px] sm:max-w-md md:max-w-xl mx-auto md:mx-0 mb-7">
            Llegamos en 20 minutos con presupuesto telefónico cerrado y apertura limpia sin romper tu puerta.
          </p>

          {/* 4. Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-[310px] sm:max-w-none md:max-w-md mx-auto md:mx-0 mb-7 md:mb-0">
            {/* Call Urgencias 24h Button */}
            <a
              href={siteConfig.phoneHref}
              onClick={handleCallClick}
              className={`w-full sm:w-auto sm:flex-1 py-3.5 px-6 rounded-2xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.06)] active:scale-95 transition-all duration-300 ${
                isCalling
                  ? 'bg-[#feb616] border-2 border-black text-white shadow-md'
                  : 'bg-white border-2 border-transparent text-[#e59800] hover:bg-white/95'
              }`}
            >
              {isCalling ? (
                <span className="w-5 h-5 rounded-full border-[1.5px] border-white flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
                  </svg>
                </span>
              ) : (
                <svg className="w-5 h-5 text-black shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
                </svg>
              )}
              <span className="tracking-wide whitespace-nowrap">LLAMAR URGENCIAS 24H</span>
            </a>

            {/* WhatsApp Directo Button */}
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto sm:flex-1 py-3.5 px-6 rounded-2xl bg-transparent border-2 border-white text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 active:scale-95 transition-all hover:bg-white/10"
            >
              <span className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
                </svg>
              </span>
              <span className="tracking-wide whitespace-nowrap">WHATSAPP DIRECTO</span>
            </a>
          </div>
        </div>

        {/* Right Column on Desktop / Door Technician Photo */}
        <div className="md:col-span-5 w-full max-w-[310px] sm:max-w-xs md:max-w-none mx-auto mt-7 md:mt-0">
          <div className="relative rounded-[28px] md:rounded-[36px] border-2 md:border-[2.5px] border-black overflow-hidden bg-black/5 shadow-md">
            <img
              src={siteConfig.heroImage}
              alt="Cerrajero profesional Vilakeys realizando apertura limpia de puerta sin romper"
              className="w-full h-auto aspect-[4/3.1] object-cover block"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
