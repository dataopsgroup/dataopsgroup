
import React from 'react';
import ServiceHero from './ServiceHero';
import { LineChart } from 'lucide-react';

const AnalyticsBIHero = () => {
  return (
    <ServiceHero
      title="Analytics & Business Intelligence"
      description="Transform your raw data into actionable insights with our advanced analytics and visualization services that drive smarter business decisions."
      isHubSpotTraining={false}
      serviceIcon={<LineChart size={64} />}
      imageSrc="/lovable-uploads/5128a660-4319-43f7-8be9-8dae9c2576e1.png"
      imageAlt="Code visualization showing data analytics programming"
    />
  );
};

export default AnalyticsBIHero;
