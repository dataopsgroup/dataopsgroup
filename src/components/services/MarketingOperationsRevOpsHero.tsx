
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
      imageSrc="/lovable-uploads/269cf082-a0cd-445e-8738-c2aee0f60336.png"
      imageAlt="Marketing operations dashboard showing revenue optimization metrics and analytics"
    />
  );
};

export default MarketingOperationsRevOpsHero;
