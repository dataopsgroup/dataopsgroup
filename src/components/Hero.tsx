

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
        'event_label': 'Hero Assessment CTA'
      });
    }
    // Track in HubSpot
    if (window._hsq) {
      window._hsq.push(['trackEvent', {
        id: 'hero_assessment_cta_click'
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

  return (
    <>
      <div className="pt-24 pb-16 md:py-32 px-4 bg-gradient-to-br from-white to-dataops-50">
        <div className="container mx-auto">
          <div className="hero-content">
            <div>
              {/* Use resource hints for higher priority assets on page */}
              <link rel="preload" href="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png" as="image" fetchPriority="high" />
              
              {/* Mark as LCP element for monitoring */}
              <h1 className="hero-headline" id="hero-heading" data-lcp="true">
                HubSpot Not<br />Delivering ROI?<br />
                <span className="hero-emphasis">We Fix That.</span>
              </h1>
              <p className="hero-description">
                Stop losing money on broken workflows, messy data, and disconnected teams. 
                We rescue HubSpot implementations and turn them into revenue-generating machines.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-[#403E43]">
                  Discover What's Costing You Deals
                </h2>
                <p className="text-gray-600">
                  Free 30-minute HubSpot assessment reveals hidden revenue leaks
                </p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <Link to="/contact" onClick={trackContactCTAClick}>
                    <Button className="bg-dataops-600 hover:bg-dataops-700 px-6 py-6 text-base">
                      Book My Assessment
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                
                <div className="text-sm text-gray-600 italic max-w-md">
                  <strong>No-Risk Assessment</strong><br />
                  We'll audit your HubSpot setup and show you exactly what's wrong - completely free. 
                  No obligation, no sales pitch, just honest feedback about your ROI potential.
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block absolute right-0 top-0 w-2/5">
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

      {/* Authority Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#403E43] mb-12">
            Trusted by 50+ Companies to Rescue Their HubSpot Investments
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <p className="text-lg font-semibold text-dataops-600 mb-2">
                "Increased qualified leads by 47% in 90 days"
              </p>
              <p className="text-gray-600">
                - Audio Visual Equipment Wholesaler
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <p className="text-lg font-semibold text-dataops-600 mb-2">
                "Reduced sales cycle by 28%"
              </p>
              <p className="text-gray-600">
                - Multi-National Insurance
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <p className="text-lg font-semibold text-dataops-600 mb-2">
                "Achieved 35% improvement in close rates"
              </p>
              <p className="text-gray-600">
                - SaaS Healthcare
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
