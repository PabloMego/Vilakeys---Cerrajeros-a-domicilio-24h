import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const SiteFooter: React.FC = () => {
  return (
    <footer
      className="mt-16 pt-10 pb-8 border-t border-linen-300/60 bg-linen-200/40 text-center"
      data-purpose="site-footer"
    >
      <div className="max-w-md mx-auto px-5">
        {/* Monogram */}
        <div className="w-9 h-9 mx-auto mb-3 rounded-full border border-bark-800/30 flex items-center justify-center bg-linen-50">
          <svg
            className="w-4 h-4 text-bark-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            viewBox="0 0 24 24"
          >
            <path
              d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <span className="font-serif text-lg font-medium text-bark-900 block mb-3">
          {siteConfig.name}
        </span>

        <p className="text-[11px] text-bark-500">
          © 2026 {siteConfig.name} · Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
