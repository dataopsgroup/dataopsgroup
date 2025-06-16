
import React, { useCallback } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '@/utils/analytics';

const HeroContent = React.memo(() => {
  // Memoized CTA tracking function
  const trackContactCTAClick = useCallback(() => {
    console.log('🎯 Contact CTA clicked');
    
    try {
      // Use the centralized analytics utility
      trackEvent('cta_click', {
        event_category: 'Engagement',
        event_label: 'Hero Contact CTA'
      });
      
      // HubSpot tracking with safety check
      if (typeof window !== 'undefined' && window._hsq) {
        window._hsq.push(['trackEvent', {
          id: 'hero_contact_cta_click'
        }]);
      }
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
    }
  }, []);

  return (
    <div className="hero-content">
      <div className="hero-content-box">
        <div>
          <h1 className="hero-heading" id="hero-heading">
            Turn PE Portfolio Operations Into Profit Drivers in{' '}
            <span className="text-yellow-300">100 Days</span>
          </h1>
          <div className="space-y-2">
            <p className="hero-text leading-snug">
              We are PE-specialized{' '}
              <Link to="/services" className="text-blue-200 hover:text-white underline">
                HubSpot experts
              </Link>{' '}
              who transform fragmented systems into unified platforms that drive EBITDA growth, 
              improve operational efficiency, and create the data infrastructure your investors expect.
            </p>
            <p className="font-medium mb-2"></p>
            <ul className="list-disc pl-6 space-y-0 mb-2 hero-text leading-snug">
              <li>19% higher valuation multiples</li>
              <li>73% faster EBITDA growth</li>
              <li>$18-22 ROI per $1 invested</li>
            </ul>
            <p className="hero-text leading-snug">
              Learn more about our{' '}
              <Link to="/approach" className="text-blue-200 hover:text-white underline">
                proven methodology
              </Link>{' '}
              and explore our{' '}
              <Link to="/case-studies" className="text-blue-200 hover:text-white underline">
                client success stories
              </Link>.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-3">
          <div className="flex flex-col">
            <Link 
              to="/contact"
              onClick={trackContactCTAClick}
              className="hero-button text-3xl"
            >
              Get In Touch
              <ChevronRight className="ml-2 h-4 w-4 flex-shrink-0" />
            </Link>
            <div className="mt-2 text-sm max-w-sm text-white/90 leading-snug">
              <p className="font-medium mb-0.5 text-white">Confidential | No Risk</p>
              <p className="leading-tight">
                We'll evaluate your operations against PE portfolio standards and show you exactly 
                what's holding back your growth metrics. Completely free. No obligation, just honest 
                feedback about your investor readiness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

HeroContent.displayName = 'HeroContent';

export default HeroContent;
