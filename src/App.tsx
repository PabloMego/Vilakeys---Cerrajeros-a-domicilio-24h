import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LocalCoverageSection } from './components/LocalCoverageSection';
import { SiteFooter } from './components/SiteFooter';
import { StickyBottomActionBar } from './components/StickyBottomActionBar';

export const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-linen-100 text-bark-800 font-sans pb-36 selection:bg-terracotta-100 selection:text-terracotta-600">
      {/* Header */}
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      {/* Main Content Sections */}
      <main className="max-w-md md:max-w-xl lg:max-w-2xl mx-auto px-5 space-y-12">
        <HeroSection />
        <LocalCoverageSection />
      </main>

      {/* Footer */}
      <SiteFooter />

      {/* Sticky Bottom Action Bar */}
      <StickyBottomActionBar isHidden={isMobileMenuOpen} />
    </div>
  );
};

export default App;
