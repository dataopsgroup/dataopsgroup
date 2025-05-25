
import React from 'react';
import { ChevronRight } from 'lucide-react';
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

  return <>
      {/* Critical resource hints for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preload" href="/lovable-uploads/98b80390-1e73-4256-a9fe-fc237c118c8b.png" as="image" fetchPriority="high" />
      <link rel="preload" href="/lovable-uploads/61e82165-c0b9-4fde-98f6-f68f483b1017.png" as="image" fetchPriority="high" />
      
      <div className="hero-section bg-gradient-to-br from-white to-gray-50">
        <div className="hero-container">
          {/* Text Column */}
          <div className="hero-text-column">
            <div>
              {/* Premium Tagline */}
              <div className="hero-tagline">
                <span className="tagline-text">EXPERT HUBSPOT TRANSFORMATION SPECIALISTS</span>
              </div>
              
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
            
            <div className="assessment-container">
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
                  <Link to="/contact" onClick={trackContactCTAClick} className="hero-cta">
                    Book My Assessment
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                
                <div className="no-risk-assessment text-sm text-gray-600 italic">
                  <strong>No-Risk Assessment</strong><br />
                  We'll audit your HubSpot setup and show you exactly what's wrong - completely free. 
                  No obligation, no sales pitch, just honest feedback about your ROI potential.
                </div>
              </div>
            </div>
          </div>

          {/* Dual Dashboard Column - Optimized Static Images */}
          <div className="hero-dashboard-column">
            {/* First Dashboard (KPI Metrics - Top) - Critical LCP Image */}
            <div className="dashboard-container dashboard-primary">
              <picture>
                <source 
                  srcSet="/lovable-uploads/98b80390-1e73-4256-a9fe-fc237c118c8b.png" 
                  type="image/png"
                />
                <OptimizedImage 
                  src="/lovable-uploads/98b80390-1e73-4256-a9fe-fc237c118c8b.png" 
                  alt="HubSpot Performance Dashboard showing KPIs, metrics, growth data, and ROI analytics" 
                  className="dashboard-image" 
                  width={580} 
                  height={387} 
                  priority={true} 
                  isLCP={true} 
                  loading="eager"
                  decoding="sync"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 580px"
                  quality={85}
                />
              </picture>
            </div>
            
            {/* Second Dashboard (Field Sales Metrics - Bottom) */}
            <div className="dashboard-container dashboard-secondary">
              <picture>
                <source 
                  srcSet="/lovable-uploads/61e82165-c0b9-4fde-98f6-f68f483b1017.png" 
                  type="image/png"
                />
                <OptimizedImage 
                  src="/lovable-uploads/61e82165-c0b9-4fde-98f6-f68f483b1017.png" 
                  alt="Field Sales Metrics Dashboard showing growth, revenue, pipeline, and performance indicators" 
                  className="dashboard-image" 
                  width={551} 
                  height={368} 
                  priority={true} 
                  isLCP={false} 
                  loading="eager"
                  decoding="async"
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 47vw, 551px"
                  quality={85}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>

      {/* Authority Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#403E43] mb-12">
            Companies Trust DataOps Group to Transform Their HubSpot and Operations
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
    </>;
};

export default Hero;
