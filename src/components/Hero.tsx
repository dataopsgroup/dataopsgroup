
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import HeroBackground from '@/components/hero/HeroBackground';
import HeroContent from '@/components/hero/HeroContent';
import HeroContentSection from '@/components/hero/HeroContentSection';
import TrustedCompanies from '@/components/hero/TrustedCompanies';

const Hero = React.memo(() => {
  const { isMobile, isInitialized } = useIsMobile();

  // Don't render until mobile detection is complete to prevent hydration issues
  if (!isInitialized) {
    return (
      <div className="hero-section bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="hero-section bg-gray-50 pb-0">
        {/* Background Image - desktop only with simplified loading */}
        {!isMobile && <HeroBackground />}
        
        {/* Layout Container */}
        <div className="hero-container">
          {/* Hero Content - headline overlay */}
          <HeroContent />
        </div>
      </div>

      {/* New content section below hero */}
      <HeroContentSection />

      <TrustedCompanies />
    </>
  );
});

Hero.displayName = 'Hero';

export default Hero;
