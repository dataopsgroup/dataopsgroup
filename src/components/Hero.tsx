import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
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

  return <>
      <div className="relative pt-24 pb-16 md:py-32 px-4 bg-gradient-to-br from-white to-dataops-50 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/lovable-uploads/da11f004-8dcc-4a9b-80f2-b3d7893140e8.png')`,
            backgroundPosition: 'right center',
            backgroundSize: 'cover'
          }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="space-y-8">
              <div>
                {/* Use resource hints for higher priority assets on page */}
                <link rel="preload" href="/lovable-uploads/da11f004-8dcc-4a9b-80f2-b3d7893140e8.png" as="image" fetchPriority="high" />
                
                {/* Mark as LCP element for monitoring */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#403E43]" id="hero-heading" data-lcp="true">
                  PE Portfolio Company Digital Operations <span className="text-red-500">Falling Behind</span>?<br />
                  We Implement the HubSpot Systems Your Investors Expect
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-lg">
                  PE Operational Excellence Without the Operational Headache. We implement scalable HubSpot systems across PE portfolios - so Operating Partners can focus on strategy and portfolio companies can focus on growth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col">
                  <Link to="/contact" onClick={trackContactCTAClick}>
                    <Button className="bg-dataops-600 hover:bg-dataops-700 px-6 py-6 text-base">
                      Get Your PE-Approved Digital Operations Assessment
                      <ChevronRight className="ml-2 h-4 w-4" />
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
    </>;
};

export default Hero;
