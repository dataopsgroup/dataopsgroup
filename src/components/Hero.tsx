
import React, { startTransition, useCallback, useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { trackEvent } from '@/utils/analytics';

// Memoized background image component to prevent re-renders
const HeroBackgroundImage = React.memo(() => {
  // Simple image error handler
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    console.warn('Hero background image failed to load');
    // Hide the image container on error
    const imgElement = e.target as HTMLImageElement;
    if (imgElement.parentElement) {
      imgElement.parentElement.style.display = 'none';
    }
  }, []);

  // Simple image load handler
  const handleImageLoad = useCallback(() => {
    console.log('Hero background image loaded successfully');
  }, []);

  return (
    <div className="hero-bg">
      <img 
        src="/lovable-uploads/df195f9f-0886-488a-bdb0-c0db162335a7.png" 
        alt="Hero background consultant" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'right center'
        }}
        loading="eager"
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  );
});

HeroBackgroundImage.displayName = 'HeroBackgroundImage';

// Memoized trusted companies section
const TrustedCompaniesSection = React.memo(() => (
  <div className="pb-16 mt-12 trusted-companies-section bg-green-200">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 leading-normal md:leading-relaxed">
        Trusted by 50+ Companies to Rescue Their HubSpot Investments
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-3xl font-bold text-dataops-600 mb-2">47%</div>
          <p className="text-gray-700 font-medium mb-1">Increased qualified leads</p>
          <p className="text-sm text-gray-500">in 90 days</p>
          <p className="text-xs text-gray-400 mt-2">Audio Visual Equipment Wholesaler</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-3xl font-bold text-dataops-600 mb-2">28%</div>
          <p className="text-gray-700 font-medium mb-1">Reduced sales cycle</p>
          <p className="text-sm text-gray-500">time to close</p>
          <p className="text-xs text-gray-400 mt-2">Multi-National Insurance</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-3xl font-bold text-dataops-600 mb-2">35%</div>
          <p className="text-gray-700 font-medium mb-1">Improvement in close rates</p>
          <p className="text-sm text-gray-500">deal conversion</p>
          <p className="text-xs text-gray-400 mt-2">SaaS Healthcare</p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700 mb-6">
          Ready to transform your operations? Explore our comprehensive{' '}
          <Link to="/services" className="text-dataops-600 hover:text-dataops-700 underline font-medium">
            service offerings
          </Link>{' '}
          or read more{' '}
          <Link to="/about" className="text-dataops-600 hover:text-dataops-700 underline font-medium">
            about our team
          </Link>.
        </p>
      </div>
    </div>
  </div>
));

TrustedCompaniesSection.displayName = 'TrustedCompaniesSection';

const Hero = React.memo(() => {
  const { isMobile, isInitialized } = useIsMobile();

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

  // Don't render until mobile detection is complete to prevent hydration issues
  if (!isInitialized) {
    return (
      <div className="hero-section bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="hero-section bg-gray-50 pb-0">
        {/* Background Image - desktop only with simplified loading */}
        {!isMobile && <HeroBackgroundImage />}
        
        {/* Layout Container */}
        <div className="hero-container">
          <div className="hero-grid">
            {/* Hero Content */}
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
            
            {/* Right side - Empty space for background image visibility (desktop only) */}
            {!isMobile && <div className="hidden lg:block"></div>}
          </div>
        </div>
      </div>

      <TrustedCompaniesSection />
    </>
  );
});

Hero.displayName = 'Hero';

export default Hero;
