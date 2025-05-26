
import React from 'react';
import HeroTextContent from './HeroTextContent';

interface HeroSectionProps {
  onCTAClick: () => void;
}

const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <HeroTextContent onCTAClick={onCTAClick} />
      </div>
    </div>
  );
};

export default HeroSection;
