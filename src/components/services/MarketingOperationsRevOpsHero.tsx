
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
      imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
      imageAlt="Business analytics dashboard showing revenue operations and marketing performance metrics"
    />
  );
};

export default MarketingOperationsRevOpsHero;
