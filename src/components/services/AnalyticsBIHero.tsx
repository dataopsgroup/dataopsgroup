
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
      imageSrc="/lovable-uploads/1e7d023c-3afe-475d-9c49-0d57ecb025d9.png"
      imageAlt="Advanced data analytics dashboard showing investment intelligence and performance metrics"
    />
  );
};

export default AnalyticsBIHero;
