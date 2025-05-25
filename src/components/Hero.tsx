
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
      {/* Critical LCP optimization - preload hero images with high priority */}
      <link rel="preload" href="/lovable-uploads/98b80390-1e73-4256-a9fe-fc237c118c8b.png" as="image" fetchPriority="high" />
      <link rel="preload" href="/lovable-uploads/61e82165-c0b9-4fde-98f6-f68f483b1017.png" as="image" fetchPriority="high" />
      
      {/* Inline critical CSS for above-the-fold content */}
      <style>{`
        .hero-section { 
          background: linear-gradient(135deg, #fff 0%, #f9fafb 100%);
          min-height: 80vh;
          display: flex;
          align-items: center;
          padding: 2rem 5%;
        }
        .hero-container { 
          display: grid;
          grid-template-columns: 1fr 0.55fr;
          gap: 3rem;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          align-items: center;
        }
        .hero-text-column { 
          display: flex;
          flex-direction: column;
          gap: 2rem;
          z-index: 10;
        }
        .hero-headline { 
          font-size: 3.5rem;
          line-height: 1.1;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }
        .hero-emphasis { 
          color: #dc2626;
          font-weight: 800;
        }
        .hero-description { 
          font-size: 1.25rem;
          line-height: 1.6;
          color: #475569;
          margin: 0;
          max-width: 500px;
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          background: #dc2626;
          color: white;
          padding: 0.875rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 1.125rem;
          text-decoration: none;
          transition: background-color 0.2s;
          border: none;
          cursor: pointer;
        }
        .hero-cta:hover {
          background: #b91c1c;
        }
        .hero-dashboard-column {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          min-height: 500px;
          padding-top: 80px;
        }
        .dashboard-container {
          position: relative;
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .dashboard-container.dashboard-primary {
          z-index: 2;
          transform: perspective(800px) rotateY(-1deg);
        }
        .dashboard-container.dashboard-secondary {
          position: absolute;
          top: 32%;
          right: -5%;
          z-index: 1;
          width: 95%;
          transform: perspective(800px) rotateY(-2deg);
        }
        .dashboard-image {
          width: 100%;
          height: auto;
          display: block;
          max-width: none;
        }
        @media (max-width: 991px) {
          .hero-container { 
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hero-headline { 
            font-size: 2.5rem;
          }
          .hero-dashboard-column {
            min-height: 400px;
          }
          .dashboard-container {
            transform: none;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }
          .dashboard-container.dashboard-secondary {
            position: relative;
            top: -10%;
            right: 0;
            width: 90%;
            margin: 0 auto;
          }
        }
      `}</style>
      
      <div className="hero-section">
        <div className="hero-container">
          {/* Text Column */}
          <div className="hero-text-column">
            <div>
              {/* Premium Tagline */}
              <div className="mb-4">
                <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                  EXPERT HUBSPOT TRANSFORMATION SPECIALISTS
                </span>
              </div>
              
              {/* LCP optimized heading */}
              <h1 className="hero-headline">
                HubSpot Not Delivering ROI?<br />
                <span className="hero-emphasis">We Fix That.</span>
              </h1>
              <p className="hero-description">
                Stop losing money on broken workflows, messy data, and disconnected teams. 
                We rescue HubSpot implementations and turn them into revenue-generating machines.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">
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
                
                <div className="text-sm text-gray-600 italic">
                  <strong>No-Risk Assessment</strong><br />
                  We'll audit your HubSpot setup and show you exactly what's wrong - completely free. 
                  No obligation, no sales pitch, just honest feedback about your ROI potential.
                </div>
              </div>
            </div>
          </div>

          {/* Optimized Dashboard Images Column */}
          <div className="hero-dashboard-column">
            {/* Primary Dashboard - Critical LCP Image */}
            <div className="dashboard-container dashboard-primary">
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
                quality={75}
              />
            </div>
            
            {/* Secondary Dashboard */}
            <div className="dashboard-container dashboard-secondary">
              <OptimizedImage 
                src="/lovable-uploads/61e82165-c0b9-4fde-98f6-f68f483b1017.png" 
                alt="Field Sales Metrics Dashboard showing growth, revenue, pipeline, and performance indicators" 
                className="dashboard-image" 
                width={551} 
                height={368} 
                priority={false} 
                isLCP={false} 
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 47vw, 551px"
                quality={75}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Authority Section - Load after hero */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Companies Trust DataOps Group to Transform Their HubSpot and Operations
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <p className="text-lg font-semibold text-blue-600 mb-2">
                "Increased qualified leads by 47% in 90 days"
              </p>
              <p className="text-gray-600">
                - Audio Visual Equipment Wholesaler
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <p className="text-lg font-semibold text-blue-600 mb-2">
                "Reduced sales cycle by 28%"
              </p>
              <p className="text-gray-600">
                - Multi-National Insurance
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <p className="text-lg font-semibold text-blue-600 mb-2">
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
