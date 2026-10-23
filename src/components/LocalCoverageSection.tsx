import React, { useState } from 'react';
import { siteConfig, type LocalityItem } from '../config/siteConfig';
import { trackConversion } from '../utils/analytics';

export const LocalCoverageSection: React.FC = () => {
  const [activeLocalityId, setActiveLocalityId] = useState<string>('vilafranca');

  const activeLocality = siteConfig.localityDetails.find(l => l.id === activeLocalityId) || siteConfig.localityDetails[0];

  const handleSelectLocality = (locality: LocalityItem) => {
    setActiveLocalityId(locality.id);
    trackConversion('locality_selected', {
      locality: locality.name,
      postalCode: locality.postalCode
    });
  };

  const handleCallLocality = () => {
    trackConversion('click_to_call', {
      locality: activeLocality.name,
      placement: 'local_coverage_card'
    });
  };

  return (
    <section id="cobertura" className="pt-2 pb-2 text-center h-full" data-purpose="local-coverage">
      {/* White Card Container matching original bold card style */}
      <div className="bg-white rounded-[32px] sm:rounded-[36px] border-2 border-black p-6 sm:p-8 md:p-9 max-w-[340px] sm:max-w-md md:max-w-none h-full flex flex-col justify-between mx-auto shadow-sm text-left">
        <div>
          {/* Header Badge & Title with correct accent */}
          <div className="text-center mb-5">
            <span className="inline-block bg-[#feb616] text-black text-[11px] md:text-xs font-extrabold uppercase px-3 py-1 rounded-full border border-black mb-2 tracking-wider">
              Área de Servicio Inmediato
            </span>
            <h2 className="text-[#feb616] font-extrabold text-[26px] sm:text-[30px] md:text-[32px] leading-tight">
              Cerrajero de<br />
              Proximidad<br />
              en Alt Penedès
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-black/75 font-medium text-center mb-5 leading-relaxed">
            Base operativa local para desplazamientos directos en menos de 20 minutos. Selecciona tu localidad:
          </p>

          {/* 2-column Grid of Locality Buttons */}
          <div className="grid grid-cols-2 gap-2 sm:gap-2.5 max-w-[290px] sm:max-w-sm md:max-w-md mx-auto mb-5">
            {siteConfig.localityDetails.map((locality) => {
              const isSelected = activeLocality.id === locality.id;
              return (
                <button
                  type="button"
                  key={locality.id}
                  onClick={() => handleSelectLocality(locality)}
                  className={`h-[42px] md:h-[46px] rounded-xl border-[1.5px] border-black flex items-center justify-center px-2.5 shadow-xs transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-black text-[#feb616] font-black scale-[1.02] shadow-sm'
                      : 'bg-[#feb616] text-white hover:brightness-105 active:scale-95'
                  }`}
                  aria-pressed={isSelected}
                  title={`Ver tiempos y cerrajería en ${locality.name}`}
                >
                  <span className="font-extrabold text-xs sm:text-[13px] md:text-sm tracking-wide truncate w-full text-center">
                    {locality.shortName}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Locality Info Box */}
          <div className="bg-[#fff9e6] rounded-2xl border-[1.5px] border-black p-4 mb-4">
            <div className="flex items-center justify-between gap-2 mb-2">
              <h3 className="font-extrabold text-sm sm:text-base text-black truncate">
                📍 {activeLocality.name}
              </h3>
              <span className="text-[11px] font-black bg-white px-2 py-0.5 rounded-md border border-black/20 text-black shrink-0">
                CP {activeLocality.postalCode}
              </span>
            </div>
            <p className="text-xs text-black/80 font-medium leading-relaxed mb-3">
              {activeLocality.description}
            </p>
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold text-black border-t border-black/10 pt-2">
              <span className="text-black/60">Tiempo estimado:</span>
              <span className="bg-[#feb616] px-2 py-0.5 rounded-full text-black font-extrabold">
                ⏱ {activeLocality.estimatedArrival}
              </span>
            </div>
          </div>
        </div>

        {/* Localized CTA & Arrival Badge */}
        <div>
          <a
            href={siteConfig.phoneHref}
            onClick={handleCallLocality}
            className="w-full py-3 px-4 rounded-xl bg-[#feb616] border-[1.5px] border-black text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs active:scale-95 transition-transform hover:brightness-105 mb-3"
          >
            <svg className="w-4 h-4 text-black shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
            </svg>
            <span>Llamar Cerrajero en {activeLocality.shortName}</span>
          </a>

          <div className="inline-flex items-center justify-center gap-1.5 text-[#feb616] font-extrabold text-xs sm:text-sm w-full pt-1">
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
      </div>
    </section>
  );
};

export default LocalCoverageSection;
