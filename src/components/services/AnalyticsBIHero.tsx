
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
    />
  );
};

export default AnalyticsBIHero;
