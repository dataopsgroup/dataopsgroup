
import React from 'react';
import ServiceHero from './ServiceHero';
import { Settings } from 'lucide-react';

const DataOpsImplementationHero = () => {
  return (
    <ServiceHero
      title="Scale Marketing Operations Across Your Portfolio"
      tagline="Streamlined DataOps for Portfolio Growth"
      description="Implement scalable data operations and automated workflows that standardize marketing processes across portfolio companies, driving efficiency and consistent performance."
      ctaText="Get Your DataOps Assessment"
      isHubSpotTraining={false}
      serviceIcon={<Settings size={64} />}
      backgroundImage="/lovable-uploads/0fa57601-c63b-40e0-8e0f-78fc9104bd6c.png"
    />
  );
};

export default DataOpsImplementationHero;
