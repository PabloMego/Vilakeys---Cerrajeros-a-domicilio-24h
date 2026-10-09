import React, { useState, useEffect } from 'react';
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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Switch to centered lock pill when scrolled past 140px on mobile
      setIsScrolled(window.scrollY > 140);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full bg-[#feb616] transition-all duration-300 px-5 pt-4 pb-3"
        data-purpose="main-header"
      >
        <div className="max-w-md md:max-w-5xl lg:max-w-6xl mx-auto flex items-center justify-between relative min-h-[50px]">
          {/* Logo (shown on left; on mobile fades out when scrolled past hero) */}
          <div
            className={`transition-all duration-300 ${
              isScrolled
                ? 'opacity-0 -translate-y-2 pointer-events-none absolute left-0 md:opacity-100 md:translate-y-0 md:pointer-events-auto md:static'
                : 'opacity-100 translate-y-0'
            }`}
          >
            <a href="#inicio" className="block focus:outline-none focus:ring-2 focus:ring-black rounded-lg">
              <img
                src={siteConfig.logoImage}
                alt="Vilakeys · Cerrajeros a Domicilio 24h"
                className="h-11 sm:h-12 md:h-13 w-auto object-contain"
              />
            </a>
          </div>

          {/* Scrolled State for Mobile: Centered Lock Capsule (matching Screenshot 2 on mobile only) */}
          <div
            className={`md:hidden absolute left-1/2 -translate-x-1/2 transition-all duration-300 ${
              isScrolled ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'
            }`}
          >
            <a
              href="#inicio"
              className="bg-white border-2 border-black rounded-full px-5 py-2 inline-flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-transform"
              title="Volver arriba - Vilakeys"
            >
              <img
                src={siteConfig.lockIcon}
                alt="Vilakeys Lock"
                className="h-6 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-extrabold text-sm lg:text-base text-black hover:opacity-75 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Direct Call CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className="py-2.5 px-5 rounded-xl bg-white border-2 border-black text-[#e59800] font-extrabold text-sm flex items-center gap-2 shadow-xs hover:bg-white/95 active:scale-95 transition-all"
            >
              <svg className="w-4 h-4 text-black shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
              </svg>
              <span>{siteConfig.phone}</span>
            </a>
          </div>

          {/* Mobile Hamburger Menu Button (visible on mobile only) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden ml-auto p-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black hover:opacity-80 active:scale-95 transition-transform cursor-pointer"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-8 h-5 flex flex-col justify-between items-center">
              <span
                className={`block h-[3.5px] w-8 bg-black rounded-full transition-transform duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''
                }`}
              />
              <span
                className={`block h-[3.5px] w-8 bg-black rounded-full transition-opacity duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-[3.5px] w-8 bg-black rounded-full transition-transform duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-xs sm:max-w-sm h-full bg-[#feb616] p-6 shadow-2xl flex flex-col justify-between border-l-2 border-black animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-black/20">
                <img
                  src={siteConfig.logoImage}
                  alt="Vilakeys"
                  className="h-10 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center text-black font-bold text-lg hover:bg-black hover:text-white transition-colors"
                  aria-label="Cerrar menú"
                >
                  ✕
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 space-y-3">
                {siteConfig.navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-xl font-extrabold text-black hover:translate-x-1.5 transition-transform py-2"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Localities in Drawer */}
              <div className="mt-8">
                <p className="text-xs uppercase tracking-wider font-extrabold text-black/70 mb-3">
                  Poblaciones en Alt Penedès
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {siteConfig.localities.map((loc) => (
                    <div
                      key={loc}
                      className="bg-black/10 rounded-lg px-2.5 py-1.5 text-xs font-bold text-black truncate"
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions in Drawer */}
            <div className="space-y-3 pt-6 border-t border-black/20">
              <a
                href={siteConfig.phoneHref}
                className="w-full py-3.5 px-4 rounded-xl bg-white text-[#e59800] border-2 border-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform"
              >
                <svg className="w-5 h-5 text-black shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
                </svg>
                <span>LLAMAR: {siteConfig.phone}</span>
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-transparent border-2 border-black text-black font-extrabold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform hover:bg-black hover:text-white"
              >
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-bold">
                  W
                </span>
                WHATSAPP DIRECTO
              </a>
              <a
                href={siteConfig.emailHref}
                className="w-full py-2.5 px-4 rounded-xl bg-black/10 hover:bg-black/20 text-black font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <svg className="w-4 h-4 text-black shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {siteConfig.email}
              </a>
              {/* Social links */}
              <div className="flex items-center justify-center gap-2 pt-1">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-7 px-2.5 rounded-full bg-white border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all text-[11px] font-extrabold shadow-2xs"
                    title={social.name}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
              <p className="text-[11px] text-center font-semibold text-black/60 pt-1">
                Llegamos en 20 minutos · Presupuesto telefónico cerrado
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
