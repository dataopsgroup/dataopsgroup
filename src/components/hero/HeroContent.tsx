
import React from 'react';

const HeroContent = React.memo(() => {
  return (
    <div className="hero-content">
      <div className="hero-headline-box">
        {/* Semi-transparent background rectangle */}
        <div className="hero-text-background"></div>
        
        <h1 className="hero-headline" id="hero-heading">
          Turn PE Portfolio Operations Into Profit Drivers in{' '}
          <span className="text-yellow-300 text-4xl lg:text-6xl font-bold">100 Days</span>
        </h1>
        <p className="hero-subheading mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          Specialized HubSpot implementation for private equity firms. 
          19% higher valuations, 73% faster EBITDA growth, $18-22 ROI per dollar invested.
        </p>
        <div className="hero-buttons mt-8 flex flex-col sm:flex-row gap-4">
          <a 
            href="/data-operations-assessment"
            className="bg-brand-saffron hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
          >
            Assess PE Readiness
          </a>
          <a 
            href="/revops-roi-calculator"
            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
          >
            Calculate ROI Impact
          </a>
        </div>
      </div>
    </div>
  );
});

HeroContent.displayName = 'HeroContent';

export default HeroContent;
