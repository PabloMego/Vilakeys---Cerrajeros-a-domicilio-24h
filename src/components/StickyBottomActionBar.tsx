import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { trackConversion } from '../utils/analytics';

interface StickyBottomActionBarProps {
  isHidden?: boolean;
}

export const StickyBottomActionBar: React.FC<StickyBottomActionBarProps> = ({ isHidden = false }) => {
  const [isCalling, setIsCalling] = useState(false);

  if (isHidden) return null;

  const handleCallClick = () => {
    setIsCalling(true);
    trackConversion('click_to_call', { placement: 'sticky_bottom_bar' });
    setTimeout(() => {
      setIsCalling(false);
    }, 1200);
  };

  const handleWhatsAppClick = () => {
    trackConversion('click_to_whatsapp', { placement: 'sticky_bottom_bar' });
  };

  return (
    <aside
      className="fixed bottom-4 sm:bottom-6 inset-x-0 z-40 px-4 pointer-events-none"
      data-purpose="quick-conversion-bar"
    >
      {/* Light Golden Capsule Container */}
      <div className="max-w-[340px] sm:max-w-md mx-auto pointer-events-auto bg-[#fed977]/95 backdrop-blur-md rounded-[28px] sm:rounded-[32px] p-2 sm:p-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-black/10 flex items-center gap-2.5">
        {/* Left Button: Calls with active state toggle (white -> yellow on click -> returns to white) */}
        <a
          href={siteConfig.phoneHref}
          onClick={handleCallClick}
          className={`flex-1 py-3 sm:py-3.5 px-3 rounded-2xl border-[1.5px] border-black text-sm sm:text-base font-extrabold tracking-wide flex items-center justify-center gap-2 shadow-xs active:scale-95 transition-all duration-300 overflow-hidden ${
            isCalling
              ? 'bg-[#feb616] text-white shadow-md'
              : 'bg-white text-[#e59800] hover:bg-white/90'
          }`}
          title="Llamar Urgencias 24h"
        >
          {isCalling ? (
            <span className="w-5 h-5 rounded-full border-[1.5px] border-white flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
              </svg>
            </span>
          ) : (
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
            </svg>
          )}
          <span className="truncate">Llamar 24h</span>
        </a>

        {/* Right Button: WhatsApp Directo */}
        <a
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="flex-1 py-3 sm:py-3.5 px-3 rounded-2xl bg-[#feb616] border-[1.5px] border-black text-white text-sm sm:text-base font-extrabold tracking-wide flex items-center justify-center gap-2 shadow-xs hover:brightness-105 active:scale-95 transition-all overflow-hidden"
          title="WhatsApp Directo 24h"
        >
          <span className="w-5 h-5 rounded-full border-[1.5px] border-white flex items-center justify-center shrink-0">
            <svg
              className="w-3 h-3 text-white shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
            </svg>
          </span>
          <span className="truncate">WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};

export default StickyBottomActionBar;
