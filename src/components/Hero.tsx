import React, { startTransition } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const {
    isMobile
  } = useIsMobile();
  const navigate = useNavigate();

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

  // Enhanced navigation handler with startTransition
  const handleContactClick = () => {
    trackContactCTAClick();
    startTransition(() => {
      navigate('/contact');
    });
  };

  // Development logging for font and image debugging
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Hero component mounted - Mobile:', isMobile);
      console.log('Should show background image:', !isMobile);

      // Check font loading after a delay
      setTimeout(() => {
        const heroHeading = document.querySelector('.hero-heading');
        if (heroHeading) {
          const computedStyle = window.getComputedStyle(heroHeading);
          console.log('Hero heading font family:', computedStyle.fontFamily);
        }

        // Check image loading on desktop only
        if (!isMobile) {
          const heroImg = document.querySelector('.hero-bg img') as HTMLImageElement;
          const heroBg = document.querySelector('.hero-bg');
          console.log('Hero background element:', heroBg);
          console.log('Hero image element:', heroImg);
          if (heroImg) {
            console.log('Hero image loaded:', heroImg.complete);
            console.log('Hero image src:', heroImg.src);
          }
        }
      }, 1000);
    }
  }, [isMobile]);
  return <>
      <div className="hero-section bg-gray-50 pb-0">
        {/* Background Image - desktop only with simplified approach */}
        {!isMobile && <div className="hero-bg">
            <img src="/lovable-uploads/df195f9f-0886-488a-bdb0-c0db162335a7.png" alt="Hero background consultant" loading="eager" decoding="sync" fetchPriority="high" onLoad={() => console.log('Hero image loaded successfully')} onError={e => console.error('Hero image failed to load:', e)} />
          </div>}
        
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
                  <div className="space-y-2">
                    <p className="hero-text leading-snug">
                      We are PE-specialized <Link to="/services" className="text-blue-200 hover:text-white underline">HubSpot experts</Link> who transform fragmented systems into unified platforms that drive EBITDA growth, improve operational efficiency, and create the data infrastructure your investors expect.
                    </p>
                    <p className="font-medium mb-2"></p>
                    <ul className="list-disc pl-6 space-y-0 mb-2 hero-text leading-snug">
                      <li>19% higher valuation multiples</li>
                      <li>73% faster EBITDA growth</li>
                      <li>$18-22 ROI per $1 invested</li>
                    </ul>
                    <p className="hero-text leading-snug">
                      Learn more about our <Link to="/approach" className="text-blue-200 hover:text-white underline">proven methodology</Link> and explore our <Link to="/case-studies" className="text-blue-200 hover:text-white underline">client success stories</Link>.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-3">
                  <div className="flex flex-col">
                    <button onClick={handleContactClick} className="hero-button text-3xl">
                      Get In Touch
                      <ChevronRight className="ml-2 h-4 w-4 flex-shrink-0" />
                    </button>
                    <div className="mt-2 text-sm max-w-sm text-white/90 leading-snug">
                      <p className="font-medium mb-0.5 text-white">Confidential | No Risk</p>
                      <p className="leading-tight">We'll evaluate your operations against PE portfolio standards and show you exactly what's holding back your growth metrics. Completely free. No obligation, just honest feedback about your investor readiness.</p>
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

      {/* Trusted Companies Section - SPACING LOCKED: mt-12 class and CSS protection prevent removal */}
      <div className="pb-16 mt-12 trusted-companies-section bg-green-200">
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
              Ready to transform your operations? Explore our comprehensive <Link to="/services" className="text-dataops-600 hover:text-dataops-700 underline font-medium">service offerings</Link> or read more <Link to="/about" className="text-dataops-600 hover:text-dataops-700 underline font-medium">about our team</Link>.
            </p>
          </div>
        </div>
      </div>
    </>;
};

export default Hero;
