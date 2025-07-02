
import React from 'react';
import HeroContent from '@/components/hero/HeroContent';
import HeroContentSection from '@/components/hero/HeroContentSection';
import TrustedCompanies from '@/components/hero/TrustedCompanies';

const Hero = React.memo(() => {
  return (
    <>
      <div className="hero-section">
        {/* Hero Background */}
        <div className="hero-bg"></div>
        
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
