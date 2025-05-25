
import React from 'react';
import HeroTextContent from './HeroTextContent';
import HeroDashboards from './HeroDashboards';

interface HeroSectionProps {
  onCTAClick: () => void;
}

const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <>
      {/* Critical LCP optimization - preload hero images with high priority */}
      <link rel="preload" href="/lovable-uploads/98b80390-1e73-4256-a9fe-fc237c118c8b.png" as="image" fetchPriority="high" />
      <link rel="preload" href="/lovable-uploads/61e82165-c0b9-4fde-98f6-f68f483b1017.png" as="image" fetchPriority="high" />
      
      {/* Inline critical CSS for above-the-fold content - dashboard styles moved to external CSS */}
      <style>{`
        .hero-section { 
          background: linear-gradient(135deg, #fff 0%, #f9fafb 100%);
          min-height: 80vh;
          display: flex;
          align-items: center;
          padding: 2rem 5%;
          position: relative;
          z-index: 1;
        }
        .hero-container { 
          display: grid;
          grid-template-columns: 1fr 0.55fr;
          gap: 3rem;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          align-items: flex-start;
        }
        .hero-text-column { 
          display: flex;
          flex-direction: column;
          gap: 2rem;
          z-index: 10;
          padding-top: 2rem;
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
        @media (max-width: 991px) {
          .hero-container { 
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hero-headline { 
            font-size: 2.5rem;
          }
        }
      `}</style>
      
      <div className="hero-section">
        <div className="hero-container">
          <HeroTextContent onCTAClick={onCTAClick} />
          <HeroDashboards />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
