
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { preloadCriticalImage } from '@/utils/image-utils';
import { useIsMobile } from '@/hooks/use-mobile';
import OptimizedImage from '@/components/ui/optimized-image';

const Hero = () => {
  const { isMobile } = useIsMobile();

  // Only preload the hero background image for desktop
  React.useEffect(() => {
    if (!isMobile && typeof window !== 'undefined') {
      preloadCriticalImage('/lovable-uploads/df195f9f-0886-488a-bdb0-c0db162335a7.png');
    }
  }, [isMobile]);

  // Track CTA click in Google Analytics and HubSpot
  const trackContactCTAClick = () => {
    // Track CTA click in Google Analytics
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        'event_category': 'Engagement',
        'event_label': 'Hero Contact CTA'
      });
    }
    // Track in HubSpot
    if (window._hsq) {
      window._hsq.push(['trackEvent', {
        id: 'hero_contact_cta_click'
      }]);
    }
  };

  return (
    <>
      <div className={`relative pt-24 pb-16 md:py-32 px-4 min-h-[500px] ${
        isMobile 
          ? 'bg-gradient-to-br from-dataops-600 via-dataops-500 to-dataops-400' 
          : 'bg-gradient-to-br from-white to-dataops-50'
      }`}>
        {/* Desktop Background Image - Only show on non-mobile devices */}
        {!isMobile && (
          <div className="absolute inset-0">
            <OptimizedImage
              src="/lovable-uploads/df195f9f-0886-488a-bdb0-c0db162335a7.png"
              alt="Hero background"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority={true}
              isLCP={true}
              loading="eager"
              quality={85}
              enableModernFormats={true}
              sizes="100vw"
              responsiveBreakpoints={[768, 1024, 1280, 1536, 1920]}
              objectFit="cover"
            />
          </div>
        )}
        
        {/* CSS Grid Layout Container */}
        <div className="container mx-auto relative z-10 h-full">
          <div className={`grid gap-4 h-full items-start ${
            isMobile 
              ? 'grid-cols-1' 
              : 'grid-cols-1 lg:grid-cols-12'
          }`}>
            {/* Hero Content */}
            <div className={`space-y-8 ${
              isMobile 
                ? 'mx-4 max-w-full' 
                : 'lg:col-span-6 xl:col-span-5 ml-4 sm:ml-6 md:ml-8 lg:ml-10 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl'
            }`}>
              {/* Content background - adjusted for mobile gradient */}
              <div className={`rounded-lg p-8 space-y-8 ${
                isMobile 
                  ? 'bg-white/90 backdrop-blur-sm' 
                  : 'bg-white/75'
              }`}>
                <div>
                  {/* Mark as LCP element for monitoring */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#403E43]" id="hero-heading" data-lcp="true">
                    PE Portfolio Company Digital Operations <span className="text-red-500">Falling Behind</span>?<br />
                    We Implement the HubSpot Systems Your Investors Expect
                  </h1>
                  <div className="mt-6 text-lg md:text-xl text-gray-700 max-w-lg">
                    <p className="mb-4">
                      64% of PE Portfolio Companies Fail at HubSpot Implementation<br />
                      Don't Join the Statistics. Get the PE-Specific Expertise That Delivers:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                      <li>19% Higher Valuation Multiples</li>
                      <li>73% Faster EBITDA Growth</li>
                      <li>$18-$22 ROI Per Dollar Invested</li>
                    </ul>
                    <p className="font-medium text-gray-800">
                      The data proves it: Expert implementation makes all the difference.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col">
                    <Link to="/contact" onClick={trackContactCTAClick}>
                      <Button className="bg-dataops-600 hover:bg-dataops-700 px-6 py-6 text-base whitespace-normal">
                        Get In Touch
                        <ChevronRight className="ml-2 h-4 w-4 flex-shrink-0" />
                      </Button>
                    </Link>
                    <div className="mt-3 text-sm text-gray-600 max-w-sm">
                      <p className="font-medium text-gray-700 mb-1">PE-Approved Assessment - No Risk</p>
                      <p>We'll evaluate your operations against PE portfolio standards and show you exactly what's holding back your growth metrics. Completely free. No obligation, just honest feedback about your investor readiness.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Empty space for background image visibility (desktop only) */}
            {!isMobile && (
              <div className="hidden lg:block lg:col-span-6 xl:col-span-7"></div>
            )}
          </div>
        </div>
      </div>

      {/* Trusted Companies Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">Trusted by 50+ Companies to Rescue Their HubSpot Investments</h2>
          
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
        </div>
      </div>
    </>
  );
};

export default Hero;
