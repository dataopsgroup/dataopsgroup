
import React from 'react';
import ServiceHero from './ServiceHero';
import { BarChart2 } from 'lucide-react';

const MarketingOperationsRevOpsHero = () => {
  return (
    <ServiceHero
      title="Marketing Data Management & Analytics"
      description="Leverage your marketing data to gain insights, improve campaign performance, and drive revenue growth with our comprehensive marketing data management and analytics services."
      isHubSpotTraining={false}
      serviceIcon={<BarChart2 size={64} />}
    />
  );
};

export default MarketingOperationsRevOpsHero;
