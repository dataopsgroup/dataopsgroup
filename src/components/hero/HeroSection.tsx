
import React from 'react';
import HeroTextContent from './HeroTextContent';
import HeroDashboards from './HeroDashboards';

interface HeroSectionProps {
  onCTAClick: () => void;
}

const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <>
      {/* Critical LCP optimization - preload hero images with high priority */}
      <link rel="preload" href="/lovable-uploads/98b80390-1e73-4256-a9fe-fc237c118c8b.png" as="image" fetchPriority="high" />
      <link rel="preload" href="/lovable-uploads/61e82165-c0b9-4fde-98f6-f68f483b1017.png" as="image" fetchPriority="high" />
      
      <div className="hero-section">
        <div className="hero-container">
          <HeroTextContent onCTAClick={onCTAClick} />
          <HeroDashboards />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
