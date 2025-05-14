
import React from 'react';
import ServiceSchema from '../seo/ServiceSchema';

const MarketingOperationsRevOpsSchema = () => {
  const serviceDescription = "Comprehensive HubSpot marketing operations and revenue operations services to help businesses integrate, analyze, and visualize marketing data for improved campaign performance and ROI.";
  
  return (
    <ServiceSchema 
      name="Marketing Operations & Revenue Operations"
      description={serviceDescription}
      url="/services/marketing-operations-revops"
      image="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
      serviceOutput="Optimized marketing and sales processes, improved data quality, and enhanced revenue performance"
    />
  );
};

export default MarketingOperationsRevOpsSchema;
