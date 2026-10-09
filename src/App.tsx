import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LocalCoverageSection } from './components/LocalCoverageSection';
import { AboutUsSection } from './components/AboutUsSection';
import { SiteFooter } from './components/SiteFooter';
import { StickyBottomActionBar } from './components/StickyBottomActionBar';

export const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#feb616] text-black font-sans selection:bg-black selection:text-white">
      {/* Header */}
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      {/* Main Content Sections */}
      <main className="max-w-md md:max-w-5xl lg:max-w-6xl mx-auto px-5 space-y-4 md:space-y-8">
        <HeroSection />
        
        {/* Responsive Cards Grid: 1 col on mobile, 2 cols side-by-side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch">
          <LocalCoverageSection />
          <AboutUsSection />
        </div>
      </main>

      {/* Footer */}
      <SiteFooter />

      {/* Sticky Bottom Action Bar */}
      <StickyBottomActionBar isHidden={isMobileMenuOpen} />
    </div>
  );
};

export default App;
