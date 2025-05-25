
import React from 'react';
import OptimizedImage from '@/components/ui/optimized-image';

const HeroDashboards = () => {
  return (
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
      
      {/* Secondary Dashboard - Overlapping with external CSS styling */}
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
  );
};

export default HeroDashboards;
