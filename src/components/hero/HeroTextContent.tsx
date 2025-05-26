
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
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase md:bg-blue-50 md:text-blue-700 backdrop-blur-sm font-body">
            EXPERT HUBSPOT TRANSFORMATION SPECIALISTS
          </span>
        </div>
        
        {/* Split headline with Tailwind font classes */}
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span className="block text-black mb-2">HubSpot Not Delivering ROI?</span>
          <span className="block text-saffron">We Fix That.</span>
        </h1>
        
        {/* Description with font-body */}
        <p className="font-body text-lg md:text-xl leading-relaxed mb-8 max-w-xl text-gray-700">
          Stop losing money on broken workflows, messy data, and disconnected teams. 
          We rescue HubSpot implementations and turn them into revenue-generating machines.
        </p>
        
        <div className="space-y-6">
          <div className="space-y-2">
            {/* Subheading with font-headline */}
            <h2 className="font-headline text-xl md:text-2xl font-semibold text-black">
              Discover What's Costing You Deals
            </h2>
            {/* Supporting text with font-body */}
            <p className="font-body text-base text-white md:text-gray-600">
              Free 30-minute HubSpot assessment reveals hidden revenue leaks
            </p>
          </div>
          
          <div className="space-y-3">
            <div>
              <Link to="/get-started" onClick={onCTAClick} className="inline-flex items-center bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors md:bg-blue-600 md:text-white md:hover:bg-blue-700 font-body">
                Book My Assessment
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            {/* Risk assessment section with font classes */}
            <div className="space-y-2">
              <h4 className="font-headline font-semibold text-white">No-Risk Assessment</h4>
              <p className="font-body text-white/90 text-sm leading-relaxed">
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
