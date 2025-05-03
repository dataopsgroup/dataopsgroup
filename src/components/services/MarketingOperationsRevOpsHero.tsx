
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
      imageSrc="/lovable-uploads/269cf082-a0cd-445e-8738-c2aee0f60336.png"
      imageAlt="Marketing analytics dashboard showing traffic metrics, conversions and engagement statistics"
    />
  );
};

export default MarketingOperationsRevOpsHero;
