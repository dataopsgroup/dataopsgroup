
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import OptimizedImage from '@/components/ui/optimized-image';

const Hero = () => {
  const { isMobile } = useIsMobile();

  // Universal CTA tracking - consistent across all devices
  const trackContactCTAClick = () => {
    // SSR guard for analytics
    if (typeof window === 'undefined') return;
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        'event_category': 'Engagement',
        'event_label': 'Hero Contact CTA'
      });
    }
    if (window._hsq) {
      window._hsq.push(['trackEvent', {
        id: 'hero_contact_cta_click'
      }]);
    }
  };

  // Development logging for font and image debugging
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Hero component mounted - Mobile:', isMobile);
      
      // Check font loading after a delay
      setTimeout(() => {
        const heroHeading = document.querySelector('.hero-heading');
        if (heroHeading) {
          const computedStyle = window.getComputedStyle(heroHeading);
          console.log('Hero heading font family:', computedStyle.fontFamily);
        }
        
        // Check image scaling on desktop only
        if (!isMobile) {
          const heroImg = document.querySelector('.hero-bg img');
          if (heroImg) {
            const computedStyle = window.getComputedStyle(heroImg);
            console.log('Hero image transform:', computedStyle.transform);
            console.log('Hero image object-position:', computedStyle.objectPosition);
          }
        }
      }, 1000);
    }
  }, [isMobile]);

  return (
    <>
      <div className="hero-section">
        {/* Background Image - desktop only */}
        {!isMobile && (
          <div className="hero-bg">
            <OptimizedImage 
              src="/lovable-uploads/df195f9f-0886-488a-bdb0-c0db162335a7.png" 
              alt="Hero background" 
              priority={true}
              isLCP={true}
              componentType="hero"
              autoOptimize={true}
              maxSizeKB={500}
              quality={90}
              width={1920} 
              height={1080}
            />
          </div>
        )}
        
        {/* Layout Container */}
        <div className="hero-container">
          <div className="hero-grid">
            {/* Hero Content */}
            <div className="hero-content">
              <div className="hero-content-box">
                <div>
                  <h1 className="hero-heading" id="hero-heading">
                    Turn PE Portfolio Operations Into Profit Drivers in <span className="text-yellow-300">100 Days</span>
                  </h1>
                  <div className="space-y-4">
                    <p className="hero-text">
                      We are PE-specialized <a href="/services" className="text-blue-200 hover:text-white underline">HubSpot experts</a> who transform fragmented systems into unified platforms that drive EBITDA growth, improve operational efficiency, and create the data infrastructure your investors expect.
                    </p>
                    <p className="font-medium mb-4"></p>
                    <ul className="list-disc pl-6 space-y-1 mb-4 hero-text">
                      <li>19% higher valuation multiples</li>
                      <li>73% faster EBITDA growth</li>
                      <li>$18-22 ROI per $1 invested</li>
                    </ul>
                    <p className="hero-text">
                      Learn more about our <a href="/approach" className="text-blue-200 hover:text-white underline">proven methodology</a> and explore our <a href="/case-studies" className="text-blue-200 hover:text-white underline">client success stories</a>.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <div className="flex flex-col">
                    <Link to="/contact" onClick={trackContactCTAClick}>
                      <Button className="hero-button text-3xl">
                        Get In Touch
                        <ChevronRight className="ml-2 h-4 w-4 flex-shrink-0" />
                      </Button>
                    </Link>
                    <div className="mt-3 text-sm max-w-sm text-white/90 leading-relaxed">
                      <p className="font-medium mb-1 text-white">Confidential | No Risk</p>
                      <p>We'll evaluate your operations against PE portfolio standards and show you exactly what's holding back your growth metrics. Completely free. No obligation, just honest feedback about your investor readiness.</p>
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

      {/* Trusted Companies Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 leading-normal md:leading-relaxed">Trusted by 50+ Companies to Rescue Their HubSpot Investments</h2>
          
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
              Ready to transform your operations? Explore our comprehensive <a href="/services" className="text-dataops-600 hover:text-dataops-700 underline font-medium">service offerings</a> or read more <a href="/about" className="text-dataops-600 hover:text-dataops-700 underline font-medium">about our team</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
