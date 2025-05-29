
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
      imageSrc="/lovable-uploads/0f49143a-7600-4926-8433-8f23c88cefa4.png"
      imageAlt="Marketing operations dashboard showing revenue optimization metrics and analytics"
    />
  );
};

export default MarketingOperationsRevOpsHero;
