
import React, { useCallback } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '@/utils/analytics';

const HeroContentSection = React.memo(() => {
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Left Column - Company Description */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg text-gray-700 leading-relaxed font-normal">
                We are PE-specialized{' '}
                <Link to="/services" className="text-dataops-600 hover:text-dataops-700 underline text-lg">
                  HubSpot experts
                </Link>{' '}
                who transform fragmented systems into unified platforms that drive EBITDA growth, 
                improve operational efficiency, and create the data infrastructure your investors expect.
              </h2>
              
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li>19% higher valuation multiples</li>
                <li>73% faster EBITDA growth</li>
                <li>$18-22 ROI per $1 invested</li>
              </ul>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Learn more about our{' '}
                <Link to="/approach" className="text-dataops-600 hover:text-dataops-700 underline">
                  proven methodology
                </Link>{' '}
                and explore our{' '}
                <Link to="/case-studies" className="text-dataops-600 hover:text-dataops-700 underline">
                  client success stories
                </Link>.
              </p>
            </div>
          </div>
          
          {/* Right Column - CTA and Disclosure */}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col">
              <Link 
                to="/contact"
                onClick={trackContactCTAClick}
                className="bg-dataops-600 hover:bg-dataops-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-lg"
              >
                Get In Touch
                <ChevronRight className="ml-2 h-5 w-5 flex-shrink-0" />
              </Link>
              
              <div className="mt-4 text-sm text-gray-600 leading-relaxed">
                <p className="font-semibold mb-2 text-gray-900">Confidential | No Risk</p>
                <p>
                  We'll evaluate your operations against PE portfolio standards and show you exactly 
                  what's holding back your growth metrics. Completely free. No obligation, just honest 
                  feedback about your investor readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroContentSection.displayName = 'HeroContentSection';

export default HeroContentSection;
