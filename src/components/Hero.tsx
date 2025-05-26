
import React from 'react';
import HeroTextContent from './hero/HeroTextContent';

const Hero = () => {
  // Track CTA click in analytics
  const trackContactCTAClick = () => {
    // Defer analytics tracking to not block UI
    setTimeout(() => {
      if (window.gtag) {
        window.gtag('event', 'cta_click', {
          'event_category': 'Engagement',
          'event_label': 'Hero Assessment CTA'
        });
      }
      if (window._hsq) {
        window._hsq.push(['trackEvent', {
          id: 'hero_assessment_cta_click'
        }]);
      }
    }, 0);
  };

  return (
    <div className="hero-section">
      <div className="hero-container">
        <HeroTextContent onCTAClick={trackContactCTAClick} />
      </div>
    </div>
  );
};

export default Hero;
