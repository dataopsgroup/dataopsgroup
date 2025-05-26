import React from 'react';
import { ChevronRight, BarChart2, Database, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/ui/optimized-image';
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

  // Track secondary CTA click
  const trackServicesCTAClick = () => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        'event_category': 'Engagement',
        'event_label': 'Hero Services CTA'
      });
    }
  };
  return <>
      <div className="pt-24 pb-16 md:py-32 px-4 bg-gradient-to-br from-white to-dataops-50">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              {/* Use resource hints for higher priority assets on page */}
              <link rel="preload" href="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png" as="image" fetchPriority="high" />
              
              {/* Mark as LCP element for monitoring */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#403E43]" id="hero-heading" data-lcp="true">
                <span className="text-[#403E43]">HubSpot</span> Not Delivering <span className="text-red-500">ROI</span>? <br />
                We Fix That.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-lg">
                Stop losing money on broken workflows, messy data, and disconnected teams. 
                We rescue HubSpot implementations and turn them into revenue-generating machines.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" onClick={trackContactCTAClick}>
                <Button className="bg-dataops-600 hover:bg-dataops-700 px-6 py-6 text-base">
                  Schedule a Consultation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" className="border-dataops-600 text-dataops-600 hover:bg-dataops-50 px-6 py-6 text-base" asChild onClick={trackServicesCTAClick}>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-dataops-100 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-dataops-200 rounded-full filter blur-3xl opacity-50"></div>
            
            <div className="relative bg-white rounded-2xl shadow-xl p-8 z-10">
              {/* Use height and width to prevent CLS */}
              <div className="grid grid-cols-2 gap-6" style={{
              minHeight: "320px"
            }}>
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg text-white">
                  <Database className="h-10 w-10 mb-4" aria-hidden="true" />
                  <h3 className="text-base font-medium">HubSpot Cleansing</h3>
                </div>
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg text-white">
                  <BarChart2 className="h-10 w-10 mb-4" aria-hidden="true" />
                  <h3 className="text-base font-medium">Revenue Conversion</h3>
                </div>
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg text-white">
                  <Share2 className="h-10 w-10 mb-4" aria-hidden="true" />
                  <h3 className="text-base font-medium">Systems Integration</h3>
                </div>
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg text-white">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mb-4" aria-hidden="true">
                    <span className="font-bold">+</span>
                  </div>
                  <h3 className="text-base font-medium">HubSpot Guidance</h3>
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