
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
      imageSrc="/lovable-uploads/5128a660-4319-43f7-8be9-8dae9c2576e1.png"
      imageAlt="DataOps implementation dashboard showing automated workflows"
    />
  );
};

export default DataOpsImplementationHero;
