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
      <main className="max-w-md md:max-w-xl lg:max-w-2xl mx-auto px-5 space-y-4">
        <HeroSection />
        <LocalCoverageSection />
        <AboutUsSection />
      </main>

      {/* Footer */}
      <SiteFooter />

      {/* Sticky Bottom Action Bar */}
      <StickyBottomActionBar isHidden={isMobileMenuOpen} />
    </div>
  );
};

export default App;
