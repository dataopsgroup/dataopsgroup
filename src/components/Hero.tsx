
import React, { lazy, Suspense } from 'react';

// Lazy load desktop hero for better mobile performance
const DesktopHeroSection = lazy(() => import('./hero/HeroSection'));
const MobileOptimizedHeroSection = lazy(() => import('./hero/MobileOptimizedHeroSection'));
const HeroAuthority = lazy(() => import('./hero/HeroAuthority'));

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

  // Determine if mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <>
      <Suspense fallback={<div className="hero-section"><div className="hero-container"><div className="hero-text-column">Loading...</div></div></div>}>
        {isMobile ? (
          <MobileOptimizedHeroSection onCTAClick={trackContactCTAClick} />
        ) : (
          <DesktopHeroSection onCTAClick={trackContactCTAClick} />
        )}
      </Suspense>
      
      <Suspense fallback={<div style={{minHeight: '200px'}}></div>}>
        <HeroAuthority />
      </Suspense>
    </>
  );
};

export default Hero;
