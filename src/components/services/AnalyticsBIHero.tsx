
import React from 'react';
import ServiceHero from './ServiceHero';
import { LineChart } from 'lucide-react';

const AnalyticsBIHero = () => {
  return (
    <ServiceHero
      title="Turn Raw Data Into Investment Intelligence"
      tagline="Advanced Analytics That Drive Portfolio Performance"
      description="Transform your HubSpot data into actionable insights with our advanced analytics and visualization services that empower PE firms to make data-driven investment decisions across their portfolio."
      ctaText="Get Your Custom Analytics Strategy"
      isHubSpotTraining={false}
      serviceIcon={<LineChart size={64} />}
      backgroundImage="/lovable-uploads/cca1a356-0ee9-47e2-84fb-b2e81102f6c0.png"
    />
  );
};

export default AnalyticsBIHero;
