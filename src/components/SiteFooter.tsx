import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="pt-6 pb-32 text-center" data-purpose="site-footer">
      <div className="max-w-md mx-auto px-5 flex flex-col items-center">
        {/* Social Media Section */}
        <div className="mb-6 w-full">
          <p className="text-[11px] font-extrabold text-black/70 uppercase tracking-wider mb-3">
            Síguenos en redes sociales
          </p>
          <div className="flex items-center justify-center gap-2.5 flex-wrap">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/vilakeys/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Vilakeys"
              className="w-10 h-10 rounded-full bg-white border-[1.5px] border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-xs active:scale-95"
              title="Instagram: @vilakeys"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@vilakeys1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de Vilakeys"
              className="w-10 h-10 rounded-full bg-white border-[1.5px] border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-xs active:scale-95"
              title="TikTok: @vilakeys1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.36 0 .7.07 1.01.2V9.45a6.34 6.34 0 00-1.01-.08A6.34 6.34 0 003.15 15.7 6.34 6.34 0 009.49 22a6.34 6.34 0 006.34-6.33V9.17c1.37.98 3.03 1.57 4.82 1.57v-3.46a4.85 4.85 0 01-1.06-.59z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UC7rkOaWRBf6nWPt8ZC7Nfrw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube de Vilakeys"
              className="w-10 h-10 rounded-full bg-white border-[1.5px] border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-xs active:scale-95"
              title="YouTube: Vilakeys"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Official Logo (matching Screenshot 2) */}
        <div className="mb-2">
          <img
            src={siteConfig.logoImage}
            alt="Vilakeys Cerrajeros 24h"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </div>

        {/* Contact Email */}
        <a
          href={siteConfig.emailHref}
          className="text-xs font-bold text-black hover:underline transition-colors block mb-1.5"
        >
          {siteConfig.email}
        </a>

        {/* Copyright notice (matching Screenshot 2) */}
        <p className="text-[12px] sm:text-xs font-bold text-black/80 tracking-tight">
          © 2026 {siteConfig.name} · Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
