
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
      imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      imageAlt="Data analytics dashboard with charts and graphs showing business intelligence metrics"
    />
  );
};

export default AnalyticsBIHero;
