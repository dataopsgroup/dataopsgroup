
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface MobileOptimizedHeroSectionProps {
  onCTAClick: () => void;
}

const MobileOptimizedHeroSection = ({ onCTAClick }: MobileOptimizedHeroSectionProps) => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-text-column">
          <h1 className="hero-heading">
            Let's Make Your Business <span style={{color: '#22C55E'}}>Bigger</span>
          </h1>
          <p className="hero-description">
            Turn your HubSpot into a revenue engine. We transform your dirty and disorganized portal into a clean machine for efficiency, insights, and growth across the customer journey.
          </p>
          <Button 
            onClick={onCTAClick}
            className="btn-primary"
            size="lg"
          >
            Get Free Assessment
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileOptimizedHeroSection;
