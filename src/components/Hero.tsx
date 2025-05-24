
import React, { useEffect, useRef } from 'react';
import { ChevronRight, BarChart2, Database, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/ui/optimized-image';

const Hero = () => {
  const ctaButtonRef = useRef<HTMLAnchorElement>(null);

  // Add pulse animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      if (ctaButtonRef.current) {
        ctaButtonRef.current.classList.add('animate-pulse-cta');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
      <div className="hero-section bg-gradient-to-br from-white to-gray-50">
        {/* Premium Tagline */}
        <div className="hero-tagline">
          <span className="tagline-decorator"></span>
          <span className="tagline-text">HUBSPOT OPTIMIZATION SPECIALISTS</span>
          <span className="tagline-decorator"></span>
        </div>

        <div className="hero-container">
          {/* Text Column */}
          <div className="hero-text-column">
            <div>
              {/* Use resource hints for higher priority assets on page */}
              <link rel="preload" href="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png" as="image" fetchPriority="high" />
              <link rel="preload" href="/lovable-uploads/98b80390-1e73-4256-a9fe-fc237c118c8b.png" as="image" fetchPriority="high" />
              
              {/* Mark as LCP element for monitoring */}
              <h1 className="hero-headline" id="hero-heading" data-lcp="true">
                HubSpot Not Delivering ROI?<br />
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
                  <Link 
                    to="/contact" 
                    onClick={trackContactCTAClick}
                    ref={ctaButtonRef}
                    className="hero-cta"
                  >
                    Book My Assessment
                    <ChevronRight className="ml-2 h-4 w-4" />
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

          {/* Dashboard Column */}
          <div className="hero-dashboard-column">
            <div className="dashboard-container">
              <OptimizedImage
                src="/lovable-uploads/98b80390-1e73-4256-a9fe-fc237c118c8b.png"
                alt="HubSpot Performance Dashboard showing KPIs, metrics, growth data, and ROI analytics"
                className="dashboard-image"
                width={600}
                height={400}
                priority={true}
                isLCP={false}
                loading="eager"
              />
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
