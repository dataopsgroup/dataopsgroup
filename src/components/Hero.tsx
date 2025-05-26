
import React from 'react';
import HeroSection from './hero/HeroSection';
import HeroAuthority from './hero/HeroAuthority';

const Hero = () => {
  // Track CTA click in Google Analytics and HubSpot
  const trackContactCTAClick = () => {
    // Track CTA click in Google Analytics
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        'event_category': 'Engagement',
        'event_label': 'Hero Assessment CTA'
      });
    }
    // Track in HubSpot
    if (window._hsq) {
      window._hsq.push(['trackEvent', {
        id: 'hero_assessment_cta_click'
      }]);
    }
  };

  return (
    <>
      <HeroSection onCTAClick={trackContactCTAClick} />
      <HeroAuthority />
    </>
  );
};

export default Hero;
