
import React from 'react';
import HeroTextContent from './HeroTextContent';

interface HeroSectionProps {
  onCTAClick: () => void;
}

const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <>
      {/* Critical LCP optimization - preload hero background image */}
      <link rel="preload" href="/lovable-uploads/afb1ced2-4687-47d3-b600-945954edb0fc.png" as="image" fetchPriority="high" />
      
      <div className="hero-section">
        <div className="hero-container">
          <HeroTextContent onCTAClick={onCTAClick} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
