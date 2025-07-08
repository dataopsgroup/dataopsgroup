
/**
 * ⚠️ HERO CONTENT COMPONENT - LOCKED FOR EDITING ⚠️
 * 
 * This component contains the main hero headline and CTA buttons.
 * Currently working correctly - DO NOT MODIFY without user approval.
 * 
 * Features locked:
 * - Headline text with yellow "100 Days" highlight
 * - Two CTA buttons (Assessment and Calculator)
 * - Semi-transparent text background
 * - Proper responsive styling
 * - Hero-buttons: justify-center
 * EDITING BLOCKED - User permission required!
 */

import React from 'react';

const HeroContent = React.memo(() => {
  return (
    <div className="hero-content">
      <div className="hero-headline-box">
        {/* Semi-transparent background rectangle */}
        <div className="hero-text-background"></div>
        
        <h1 className="hero-headline" id="hero-heading">
          Turn Portco CRM Ops Into Profit Drivers in{' '}
          <span className="text-yellow-300 text-4xl lg:text-6xl font-bold">100 Days</span>
        </h1>
        <div className="hero-buttons mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
