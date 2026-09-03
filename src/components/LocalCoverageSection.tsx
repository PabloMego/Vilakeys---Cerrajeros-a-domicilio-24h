import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '../config/siteConfig';

gsap.registerPlugin(ScrollTrigger);

export const LocalCoverageSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 28, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 88%',
            once: true
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="cobertura" className="pt-6 pb-2 text-center" data-purpose="seo-local-coverage">
      <div
        ref={cardRef}
        className="bg-linen-50/90 rounded-3xl p-7 sm:p-9 border border-linen-300/70 shadow-[0_8px_30px_rgba(45,36,31,0.04)]"
      >
        {/* Editorial Pill Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linen-200/70 border border-linen-300/60 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-bark-700"></span>
          <span className="text-[11px] font-medium tracking-wider uppercase text-bark-700">
            Cercanía y Confianza
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="serif-display text-3xl sm:text-4xl text-bark-900 font-medium tracking-tight mb-3 leading-tight">
          Cerrajero de Proximidad <br />
          <span className="italic font-normal text-bark-700">en Alt Penedès</span>
        </h2>

        {/* Short Editorial Reassurance */}
        <p className="text-sm sm:text-base text-bark-600 max-w-md mx-auto leading-relaxed mb-7 font-normal">
          Sin intermediarios de centralitas lejanas. Trato directo con el cerrajero que acudirá a tu puerta en:
        </p>

        {/* Locality Grid Micro-cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-md mx-auto mb-7">
          {siteConfig.localities.map((locality) => (
            <div
              key={locality}
              className="px-3.5 py-2.5 rounded-2xl bg-linen-100/90 border border-linen-200/90 text-xs font-medium text-bark-800 flex items-center justify-center gap-2 hover:bg-white hover:border-linen-300 transition-all shadow-[0_2px_8px_rgba(45,36,31,0.02)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-bark-500 shrink-0"></span>
              <span className="truncate">{locality}</span>
            </div>
          ))}
        </div>

        {/* Arrival Time Badge */}
        <div className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-linen-200/60 border border-linen-300/60 text-xs text-bark-800">
          <svg
            className="w-4 h-4 text-bark-700 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span className="text-bark-600">Tiempo medio de llegada:</span>
          <strong className="font-serif font-medium text-bark-900 italic text-sm">
            {siteConfig.avgArrivalTime}
          </strong>
        </div>
      </div>
    </section>
  );
};
