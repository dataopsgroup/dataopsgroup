
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
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase md:bg-blue-50 md:text-blue-700 backdrop-blur-sm">
            EXPERT HUBSPOT TRANSFORMATION SPECIALISTS
          </span>
        </div>
        
        {/* Split headline with proper color classes */}
        <h1 className="hero-headline">
          <span className="hero-headline-black">HubSpot Not Delivering ROI?</span>
          <span className="hero-headline-saffron">We Fix That.</span>
        </h1>
        
        {/* White description text */}
        <p className="hero-description">
          Stop losing money on broken workflows, messy data, and disconnected teams. 
          We rescue HubSpot implementations and turn them into revenue-generating machines.
        </p>
        
        <div className="space-y-6">
          <div className="space-y-2">
            {/* Black subheading */}
            <h2 className="hero-subheading">
              Discover What's Costing You Deals
            </h2>
            {/* White supporting text */}
            <p className="hero-subtext">
              Free 30-minute HubSpot assessment reveals hidden revenue leaks
            </p>
          </div>
          
          <div className="space-y-3">
            <div>
              <Link to="/contact" onClick={onCTAClick} className="hero-cta inline-flex items-center bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors md:bg-blue-600 md:text-white md:hover:bg-blue-700">
                Book My Assessment
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            {/* Risk assessment section with white text */}
            <div className="hero-risk-assessment">
              <h4 className="font-semibold">No-Risk Assessment</h4>
              <p>
                We'll audit your HubSpot setup and show you exactly what's wrong - completely free. 
                No obligation, no sales pitch, just honest feedback about your ROI potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTextContent;
