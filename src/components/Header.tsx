import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { siteConfig } from '../config/siteConfig';

interface HeaderProps {
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isMobileMenuOpen: controlledOpen,
  setIsMobileMenuOpen: setControlledOpen
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isMobileMenuOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setIsMobileMenuOpen = setControlledOpen !== undefined ? setControlledOpen : setInternalOpen;

  const pillRef = useRef<HTMLDivElement>(null);
  const drawerOverlayRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const drawerPanelRef = useRef<HTMLDivElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to shrink the header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth GSAP slide animation for the left drawer
  useEffect(() => {
    if (!drawerOverlayRef.current || !backdropRef.current || !drawerPanelRef.current) return;

    if (isMobileMenuOpen) {
      gsap.set(drawerOverlayRef.current, { visibility: 'visible', pointerEvents: 'auto' });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(backdropRef.current, {
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out'
      });

      tl.fromTo(
        drawerPanelRef.current,
        { xPercent: 100 },
        { xPercent: 0, duration: 0.45, ease: 'power3.out' },
        '<0.05'
      );

      // Stagger items inside drawer
      const drawerItems = drawerPanelRef.current.querySelectorAll('.drawer-animate-item');
      if (drawerItems.length > 0) {
        tl.fromTo(
          drawerItems,
          { opacity: 0, x: 16 },
          { opacity: 1, x: 0, stagger: 0.04, duration: 0.35, ease: 'power2.out' },
          '-=0.25'
        );
      }
    } else {
      const tl = gsap.timeline({
        onComplete: () => {
          if (drawerOverlayRef.current) {
            gsap.set(drawerOverlayRef.current, { visibility: 'hidden', pointerEvents: 'none' });
          }
        }
      });

      tl.to(drawerPanelRef.current, {
        xPercent: 100,
        duration: 0.3,
        ease: 'power3.in'
      });

      tl.to(
        backdropRef.current,
        {
          opacity: 0,
          duration: 0.25,
          ease: 'power2.in'
        },
        '<0.05'
      );
    }
  }, [isMobileMenuOpen]);

  // Smooth entrance animation opening from the center
  useEffect(() => {
    if (!pillRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

      // Animate the pill capsule opening from the center outwards
      tl.fromTo(
        pillRef.current,
        {
          clipPath: 'inset(0 50% 0 50% round 9999px)',
          opacity: 0,
          y: -15,
          scale: 0.95
        },
        {
          clipPath: 'inset(0 0% 0 0% round 9999px)',
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.05,
          ease: 'power3.inOut',
          onComplete: () => {
            if (pillRef.current) {
              gsap.set(pillRef.current, { clearProps: 'clipPath' });
            }
          }
        }
      );

      // Stagger in the contents (logo, nav, buttons) as the pill opens
      if (pillRef.current) {
        tl.fromTo(
          pillRef.current.children,
          {
            opacity: 0,
            y: 4,
            filter: 'blur(3px)'
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out'
          },
          '-=0.45'
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Close menu on ESC key or resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className="sticky top-3 sm:top-4 z-40 px-4 pointer-events-none transition-all"
        data-purpose="site-header"
      >
        <div
          ref={pillRef}
          className={`mx-auto pointer-events-auto bg-linen-50/95 backdrop-blur-md rounded-full border border-linen-300/80 flex items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? 'max-w-[150px] sm:max-w-[160px] h-11 px-3.5 justify-center shadow-md'
              : 'w-full max-w-md md:max-w-2xl lg:max-w-3xl h-14 px-4 sm:px-6 justify-between'
          }`}
        >
          {/* Minimal Brand Logo */}
          <a
            aria-label="Vilakeys Inicio"
            className="flex items-center gap-2 group shrink-0 transition-transform active:scale-95"
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
          >
            <svg
              aria-hidden="true"
              className={`text-bark-800 transition-all duration-300 group-hover:rotate-12 ${
                isScrolled ? 'w-4 h-4' : 'w-5 h-5'
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              viewBox="0 0 24 24"
            >
              <path
                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className={`font-serif font-medium tracking-tight text-bark-800 transition-all duration-300 ${
                isScrolled ? 'text-base' : 'text-lg sm:text-xl'
              }`}
            >
              {siteConfig.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navegación principal"
            className={`hidden md:flex items-center gap-6 text-xs font-medium text-bark-700 tracking-wide transition-all duration-300 ${
              isScrolled
                ? 'opacity-0 max-w-0 pointer-events-none -translate-x-3 overflow-hidden'
                : 'opacity-100 max-w-xl translate-x-0'
            }`}
          >
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.href === '#inicio') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                  }
                }}
                className="hover:text-bark-900 transition-colors py-1 relative whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bark-800 text-linen-50 text-xs font-semibold hover:bg-bark-900 transition-all shadow-sm whitespace-nowrap"
              style={{ backgroundColor: 'rgb(46, 21, 16)', color: 'rgb(255, 255, 255)' }}
            >
              <span>{siteConfig.phone}</span>
            </a>
          </nav>

          {/* Minimal Two-line Editorial Hamburger (Mobile) */}
          <button
            aria-label={isMobileMenuOpen ? "Cerrar Menú" : "Abrir Menú"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden rounded-full flex flex-col justify-center items-end gap-1.5 p-1.5 hover:bg-linen-200/60 transition-all duration-300 focus:outline-none ${
              isScrolled
                ? 'opacity-0 max-w-0 max-h-0 pointer-events-none p-0 overflow-hidden'
                : 'opacity-100 w-8 h-8'
            }`}
            type="button"
          >
            <span
              className={`h-[1.5px] bg-bark-800 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'w-4 rotate-45 translate-y-[3.5px]' : 'w-4'
              }`}
            ></span>
            <span
              className={`h-[1.5px] bg-bark-800 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'w-4 -rotate-45 -translate-y-[4px]' : 'w-3'
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay (Opens smoothly from the left) */}
      <div
        ref={drawerOverlayRef}
        className="fixed inset-0 z-50 md:hidden invisible pointer-events-none"
      >
        {/* Backdrop */}
        <div
          ref={backdropRef}
          className="fixed inset-0 bg-bark-900/60 backdrop-blur-sm opacity-0"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer Content (Positioned on the Right with rounded-l-3xl) */}
        <div
          ref={drawerPanelRef}
          className="fixed right-0 top-0 bottom-0 w-[85%] max-w-xs bg-linen-100 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-linen-300 rounded-l-3xl"
        >
          <div className="space-y-6">
            {/* Top brand header */}
            <div className="flex items-center justify-between pb-4 border-b border-linen-200/80 drawer-animate-item">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-linen-200 flex items-center justify-center text-bark-800">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 text-bark-800"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <span className="font-serif text-lg font-medium text-bark-900 block leading-tight">
                    {siteConfig.name}
                  </span>
                  <span className="text-[11px] text-bark-500 font-sans">
                    Cerrajeros 24h
                  </span>
                </div>
              </div>
              <button
                aria-label="Cerrar menú"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-linen-200/70 flex items-center justify-center text-bark-800 hover:bg-linen-300 active:scale-95 transition-all text-sm"
              >
                ✕
              </button>
            </div>

            {/* Navigation links */}
            <div className="space-y-1 drawer-animate-item">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-bark-500 px-3 block mb-2">
                Navegación
              </span>
              <a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
                className="py-2.5 px-3 rounded-xl text-bark-800 font-medium text-sm hover:bg-linen-200/70 transition-colors flex items-center gap-3"
              >
                <svg className="w-4 h-4 text-bark-500" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span>Inicio</span>
              </a>
              <a
                href="#cobertura"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl text-bark-800 font-medium text-sm hover:bg-linen-200/70 transition-colors flex items-center gap-3"
              >
                <svg className="w-4 h-4 text-bark-500" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Zonas de Cobertura</span>
              </a>
            </div>

            {/* Pueblos con atención directa */}
            <div className="space-y-2 drawer-animate-item">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-bark-500 px-3 block">
                Pueblos con atención directa
              </span>
              <div className="flex flex-wrap gap-1.5 px-2">
                {siteConfig.localities.map((loc) => (
                  <span
                    key={loc}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-linen-200/60 text-bark-700 font-medium border border-linen-300/40"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Card: Contact & Arrival time badge */}
          <div className="pt-4 border-t border-linen-200/80 space-y-3 drawer-animate-item">
            <div className="bg-linen-50 rounded-2xl p-3.5 border border-linen-200 shadow-sm text-center">
              <div className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-bark-700 uppercase tracking-wide mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-bark-800"></span>
                <span>Llegada media: {siteConfig.avgArrivalTime}</span>
              </div>
              <p className="text-[11px] text-bark-500 leading-tight mb-3">
                Sin intermediarios ni costes ocultos
              </p>
              <div className="flex gap-2">
                <a
                  href={siteConfig.phoneHref}
                  className="flex-1 py-2.5 px-3 rounded-full bg-bark-800 text-linen-50 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-bark-900 active:scale-95 transition-all shadow-sm"
                  style={{ backgroundColor: 'rgb(46, 21, 16)', color: 'rgb(255, 255, 255)' }}
                >
                  <svg className="w-3.5 h-3.5 text-linen-200 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Llamar</span>
                </a>
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-full bg-linen-100 hover:bg-white text-bark-800 border border-linen-300 text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 text-bark-800 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
