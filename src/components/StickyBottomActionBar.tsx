import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { siteConfig } from '../config/siteConfig';

interface StickyBottomActionBarProps {
  isHidden?: boolean;
}

export const StickyBottomActionBar: React.FC<StickyBottomActionBarProps> = ({ isHidden = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pillRef = useRef<HTMLDivElement>(null);
  const isMountedRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Solo aparece si se baja más de 120px desde arriba del todo
      setIsScrolled(window.scrollY > 120);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldShow = isScrolled && !isHidden;

  useEffect(() => {
    const pill = pillRef.current;
    if (!pill) return;

    if (shouldShow) {
      // Animación de entrada: píldora se abre -> botones se hacen grandes -> luego sale texto e icono
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });

      tl.set(pill, { pointerEvents: 'auto', visibility: 'visible' });

      // 1. Píldora exterior se abre directamente en su sitio desde el centro
      tl.fromTo(
        pill,
        {
          clipPath: 'inset(0 50% 0 50% round 9999px)',
          opacity: 0,
          scale: 0.96,
          force3D: true
        },
        {
          clipPath: 'inset(0 0% 0 0% round 9999px)',
          opacity: 1,
          scale: 1,
          duration: 0.44,
          ease: 'power3.inOut'
        }
      );

      // 2. Primero los botones se hacen grandes desde cero
      if (pill.children.length > 0) {
        tl.fromTo(
          pill.children,
          {
            scale: 0,
            opacity: 0,
            transformOrigin: 'center center',
            force3D: true
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.42,
            stagger: 0.08,
            ease: 'back.out(1.5)'
          },
          '-=0.08'
        );
      }

      // 3. Y LUEGO salen el texto y el icono de los botones
      const contents = pill.querySelectorAll('.btn-content');
      if (contents.length > 0) {
        tl.fromTo(
          contents,
          {
            opacity: 0,
            scale: 0.7,
            y: 6,
            force3D: true
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.38,
            stagger: 0.08,
            ease: 'back.out(1.6)'
          },
          '+=0.02'
        );
      }
    } else {
      // Estado al estar arriba del todo
      if (!isMountedRef.current) {
        // En la carga inicial arriba del todo: oculto en su posición
        gsap.set(pill, { opacity: 0, pointerEvents: 'none', visibility: 'hidden' });
        isMountedRef.current = true;
        return;
      }

      // Animación de salida al subir arriba del todo (inversa limpia)
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(pill, { pointerEvents: 'none', visibility: 'hidden' });
        }
      });

      const contents = pill.querySelectorAll('.btn-content');
      if (contents.length > 0) {
        tl.to(contents, {
          opacity: 0,
          scale: 0.8,
          duration: 0.18,
          ease: 'power2.in'
        });
      }

      if (pill.children.length > 0) {
        tl.to(
          pill.children,
          {
            scale: 0,
            opacity: 0,
            duration: 0.22,
            ease: 'back.in(1.4)'
          },
          '-=0.05'
        );
      }

      tl.to(
        pill,
        {
          clipPath: 'inset(0 50% 0 50% round 9999px)',
          opacity: 0,
          scale: 0.96,
          duration: 0.28,
          ease: 'power3.in'
        },
        '-=0.08'
      );
    }
  }, [shouldShow]);

  return (
    <aside
      className="fixed bottom-8 sm:bottom-10 inset-x-0 z-40 px-4 pointer-events-none"
      data-purpose="quick-conversion-bar"
    >
      <div
        ref={pillRef}
        className="max-w-md mx-auto pointer-events-auto bg-linen-50/95 backdrop-blur-md rounded-full p-2.5 shadow-[0_10px_35px_rgba(45,36,31,0.16)] border border-linen-300/80 flex items-center gap-2.5 transform transition-transform hover:scale-[1.01]"
      >
        {/* Call Button */}
        <a
          className="flex-1 py-3.5 sm:py-4 px-4 sm:px-5 rounded-full bg-bark-800 text-linen-50 text-sm sm:text-base font-bold tracking-wide flex items-center justify-center shadow-sm hover:bg-bark-900 active:scale-[0.98] transition-all overflow-hidden"
          href={siteConfig.phoneHref}
          style={{ backgroundColor: 'rgb(46, 21, 16)', color: 'rgb(255, 255, 255)' }}
        >
          <div className="btn-content flex items-center justify-center gap-2.5">
            <svg
              className="w-5 h-5 text-linen-200 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="whitespace-nowrap">Llamar 24h</span>
          </div>
        </a>

        {/* WhatsApp Button */}
        <a
          className="flex-1 py-3.5 sm:py-4 px-4 sm:px-5 rounded-full bg-linen-100 hover:bg-white text-bark-800 border border-linen-300 text-sm sm:text-base font-semibold tracking-wide flex items-center justify-center shadow-sm active:scale-[0.98] transition-all overflow-hidden"
          href={siteConfig.whatsappHref}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="btn-content flex items-center justify-center gap-2.5">
            <svg className="w-5 h-5 text-bark-800 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
            </svg>
            <span className="whitespace-nowrap">WhatsApp</span>
          </div>
        </a>
      </div>
    </aside>
  );
};
