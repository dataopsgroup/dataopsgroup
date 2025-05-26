
import React from 'react';
import HeroTextContent from './HeroTextContent';

interface HeroSectionProps {
  onCTAClick: () => void;
}

const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <>
      {/* Critical LCP optimization - preload hero background image */}
      <link rel="preload" href="/lovable-uploads/98b80390-1e73-4256-a9fe-fc237c118c8b.png" as="image" fetchPriority="high" />
      
      <div className="hero-section">
        <div className="hero-container">
          <HeroTextContent onCTAClick={onCTAClick} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
