
import React from 'react';
import HeroTextContent from './HeroTextContent';

interface HeroSectionProps {
  onCTAClick: () => void;
}

const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <>
      {/* Critical LCP optimization - preload hero background image for desktop only */}
      <link rel="preload" href="/lovable-uploads/dda96630-3254-4551-8fe9-33127763c436.png" as="image" fetchpriority="high" media="(min-width: 1024px)" />
      
      <div className="hero-section">
        <div className="hero-container">
          <HeroTextContent onCTAClick={onCTAClick} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
