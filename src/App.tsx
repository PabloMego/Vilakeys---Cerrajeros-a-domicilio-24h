import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { LocalCoverageSection } from './components/LocalCoverageSection';
import { AboutUsSection } from './components/AboutUsSection';
import { PricingTransparencySection } from './components/PricingTransparencySection';
import { FAQSection } from './components/FAQSection';
import { SiteFooter } from './components/SiteFooter';
import { StickyBottomActionBar } from './components/StickyBottomActionBar';

export const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#feb616] text-black font-sans selection:bg-black selection:text-white">
      {/* Header con navegación completa y llamadas directas */}
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      {/* Main Content Sections */}
      <main className="max-w-md md:max-w-5xl lg:max-w-6xl mx-auto px-5 space-y-6 md:space-y-10">
        {/* 1. Hero Section con H1 optimizado, badges de tiempo real y llamadas de urgencia */}
        <HeroSection />

        {/* 2. Catálogo de Servicios con intenciones de búsqueda comercial y tarifas */}
        <ServicesSection />

        {/* 3. Grid de Cobertura Local y Sobre Nosotros (1 col móvil, 2 cols escritorio) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-stretch">
          <LocalCoverageSection />
          <AboutUsSection />
        </div>

        {/* 4. Transparencia de Tarifas, Presupuesto Telefónico y Factura para Seguro */}
        <PricingTransparencySection />

        {/* 5. Preguntas Frecuentes (FAQ) con marcado semántico y acordeón accesible */}
        <FAQSection />
      </main>

      {/* Footer con NAP completo, enlazado interno SEO y redes sociales */}
      <SiteFooter />

      {/* Barra fija inferior de conversión rápida (Llamar 24h + WhatsApp) */}
      <StickyBottomActionBar isHidden={isMobileMenuOpen} />
    </div>
  );
};

export default App;
