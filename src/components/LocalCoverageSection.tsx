import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const LocalCoverageSection: React.FC = () => {
  return (
    <section id="cobertura" className="pt-4 pb-4 text-center" data-purpose="local-coverage">
      {/* White Card Container (matching Screenshot 2 exactly) */}
      <div className="bg-white rounded-[32px] sm:rounded-[36px] border-2 border-black p-6 sm:p-8 max-w-[340px] sm:max-w-md mx-auto shadow-sm">
        {/* Title inside card (matching Screenshot 2) */}
        <h2 className="text-[#feb616] font-extrabold text-[26px] sm:text-[30px] leading-tight mb-6">
          Cerrajero de<br />
          Proximidad<br />
          en Alt Pendes
        </h2>

        {/* 2-column Grid of Locality Buttons (matching Screenshot 2) */}
        <div className="grid grid-cols-2 gap-3 max-w-[290px] mx-auto mb-6">
          {siteConfig.localities.map((locality, index) => (
            <div
              key={index}
              className="h-[42px] rounded-xl bg-[#feb616] border-[1.5px] border-black flex items-center justify-center px-2 shadow-xs hover:brightness-105 transition-all select-none"
            >
              <span className="text-white font-extrabold text-xs sm:text-[13px] tracking-wide truncate">
                {locality}
              </span>
            </div>
          ))}
        </div>

        {/* Arrival Time Badge inside card (matching Screenshot 2) */}
        <div className="inline-flex items-center justify-center gap-1.5 text-[#feb616] font-extrabold text-xs sm:text-sm">
          <svg
            className="w-4 h-4 text-[#feb616] shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>Tiempo medio de llegada: {siteConfig.avgArrivalTime}</span>
        </div>
      </div>
    </section>
  );
};

export default LocalCoverageSection;
