
import React from 'react';
import ServiceHero from './ServiceHero';
import { TrendingUp } from 'lucide-react';

const MarketingOperationsRevOpsHero = () => {
  return (
    <ServiceHero
      title="Optimize Marketing ROI Across Portfolio Companies"
      tagline="Revenue Operations That Scale"
      description="Transform your portfolio companies' marketing and revenue operations with systematic processes that drive predictable growth and maximize investment returns."
      ctaText="Schedule Your RevOps Optimization"
      isHubSpotTraining={false}
      serviceIcon={<TrendingUp size={64} />}
      backgroundImage="/lovable-uploads/ce79f316-f12e-41f6-8d89-81ef607e1ff5.png"
    />
  );
};

export default MarketingOperationsRevOpsHero;
