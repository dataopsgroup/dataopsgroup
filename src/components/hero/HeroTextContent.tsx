
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroTextContentProps {
  onCTAClick: () => void;
}

const HeroTextContent = ({ onCTAClick }: HeroTextContentProps) => {
  return (
    <div className="hero-text-column">
      <div className="hero-text-overlay">
        {/* Premium Tagline */}
        <div className="mb-4">
          <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
            EXPERT HUBSPOT TRANSFORMATION SPECIALISTS
          </span>
        </div>
        
        {/* LCP optimized heading */}
        <h1 className="hero-headline">
          HubSpot Not Delivering ROI?<br />
          <span className="hero-emphasis">We Fix That.</span>
        </h1>
        <p className="hero-description text-white">
          Stop losing money on broken workflows, messy data, and disconnected teams. 
          We rescue HubSpot implementations and turn them into revenue-generating machines.
        </p>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">
              Discover What's Costing You Deals
            </h2>
            <p className="text-white">
              Free 30-minute HubSpot assessment reveals hidden revenue leaks
            </p>
          </div>
          
          <div className="space-y-3">
            <div>
              <Link to="/contact" onClick={onCTAClick} className="hero-cta">
                Book My Assessment
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="text-sm text-white italic">
              <strong className="text-white">No-Risk Assessment</strong><br />
              <span className="text-white">
                We'll audit your HubSpot setup and show you exactly what's wrong - completely free. 
                No obligation, no sales pitch, just honest feedback about your ROI potential.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTextContent;
