
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const {
    isMobile
  } = useIsMobile();

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

  // Enhanced image error handler with performance tracking
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (typeof console !== 'undefined') {
      console.warn('Hero background image failed to load');
    }
    e.currentTarget.style.display = 'none';
    
    // Track image load errors for monitoring
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'image_load_error', {
        'event_category': 'Performance',
        'event_label': 'Hero Background Image',
        'value': 1
      });
    }
  };

  // Track LCP image load for performance monitoring
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (typeof window !== 'undefined' && window.performance && 'mark' in window.performance) {
      window.performance.mark('hero-image-loaded');
    }
  };

  return <>
    <div className={`hero-container ${isMobile ? 'bg-dataops-600' : 'bg-gradient-to-br from-white to-dataops-50'}`}>
      {/* Optimized Background Image - desktop only with performance attributes */}
      {!isMobile && <div className="hero-bg">
          <img 
            src="/lovable-uploads/df195f9f-0886-488a-bdb0-c0db162335a7.png" 
            alt="Hero background" 
            className="w-full h-full object-cover" 
            loading="eager" 
            fetchPriority="high" 
            width="1920" 
            height="1080" 
            onError={handleImageError}
            onLoad={handleImageLoad}
            decoding="sync"
          />
        </div>}
      
      {/* Optimized Layout Container */}
      <div className="hero-content">
        {/* Hero Content with enhanced layout stability */}
        <div className={`hero-text ${isMobile ? 'px-4 max-w-full' : ''}`}>
          {/* Content wrapper with stable styling */}
          <div className={`space-y-8 ${isMobile ? '' : 'hero-content-box'}`}>
            <div>
              {/* Main headline with optimized responsive typography */}
              <h1 className="hero-heading" id="hero-heading">
                Turn PE Portfolio Operations Into Profit Drivers in <span className="text-yellow-300">100 Days</span>
              </h1>
              <div className={`mt-6 max-w-lg text-lg text-white leading-relaxed ${isMobile ? '' : 'md:text-xl'}`}>
                <p className="mb-4">We are PE-specialized HubSpot experts who transform fragmented systems into unified platforms that drive EBITDA growth, improve operational efficiency, and create the data infrastructure your investors expect.</p>
                <p className="font-medium mb-4"></p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>19% higher valuation multiples</li>
                  <li>73% faster EBITDA growth</li>
                  <li>$18-22 ROI per $1 invested</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col">
                <Link to="/contact" onClick={trackContactCTAClick}>
                  <Button className="bg-brand-navy hover:bg-dataops-800 text-white px-6 py-6 text-base whitespace-normal transition-all duration-300 hover:scale-105">
                    Get In Touch
                    <ChevronRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </Button>
                </Link>
                <div className={`mt-3 text-sm max-w-sm text-white/90 leading-relaxed`}>
                  <p className={`font-medium mb-1 text-white`}>Confidential | No Risk</p>
                  <p>We'll evaluate your operations against PE portfolio standards and show you exactly what's holding back your growth metrics. Completely free. No obligation, just honest feedback about your investor readiness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Empty space for background image visibility (desktop only) */}
        {!isMobile && <div className="hidden lg:block lg:col-span-6 xl:col-span-7"></div>}
      </div>
    </div>

    {/* Trusted Companies Section with reserved layout space */}
    <div className="trusted-companies">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 leading-normal md:leading-relaxed">Trusted by 50+ Companies to Rescue Their HubSpot Investments</h2>
        
        <div className="trusted-companies-grid">
          <div className="trusted-card">
            <div className="text-3xl font-bold text-dataops-600 mb-2">47%</div>
            <p className="text-gray-700 font-medium mb-1">Increased qualified leads</p>
            <p className="text-sm text-gray-500">in 90 days</p>
            <p className="text-xs text-gray-400 mt-2">Audio Visual Equipment Wholesaler</p>
          </div>
          
          <div className="trusted-card">
            <div className="text-3xl font-bold text-dataops-600 mb-2">28%</div>
            <p className="text-gray-700 font-medium mb-1">Reduced sales cycle</p>
            <p className="text-sm text-gray-500">time to close</p>
            <p className="text-xs text-gray-400 mt-2">Multi-National Insurance</p>
          </div>
          
          <div className="trusted-card">
            <div className="text-3xl font-bold text-dataops-600 mb-2">35%</div>
            <p className="text-gray-700 font-medium mb-1">Improvement in close rates</p>
            <p className="text-sm text-gray-500">deal conversion</p>
            <p className="text-xs text-gray-400 mt-2">SaaS Healthcare</p>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default Hero;
