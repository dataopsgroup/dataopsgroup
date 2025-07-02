
/**
 * ⚠️ HERO COMPONENT - LOCKED FOR EDITING ⚠️
 * 
 * This component is currently working correctly and should NOT be modified
 * without explicit user permission. The hero layout and functionality are
 * locked to prevent accidental changes.
 * 
 * Current structure:
 * - Hero section with proper background
 * - HeroContent with headline and buttons
 * - HeroContentSection with stats and CTAs
 * - TrustedCompanies section
 * 
 * DO NOT MODIFY without user approval!
 */

import React from 'react';
import HeroContent from '@/components/hero/HeroContent';
import HeroContentSection from '@/components/hero/HeroContentSection';
import TrustedCompanies from '@/components/hero/TrustedCompanies';

const Hero = React.memo(() => {
  return (
    <>
      <div className="hero-section">
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
