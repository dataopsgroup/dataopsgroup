
import React from 'react';
import ServiceSchemaMarkup from './ServiceSchemaMarkup';

const MarketingOperationsRevOpsSchema = () => {
  const serviceDescription = "Comprehensive marketing data management and analytics services to help businesses integrate, analyze, and visualize marketing data for improved campaign performance and ROI.";
  
  return (
    <ServiceSchemaMarkup 
      isHubSpotTraining={false}
      serviceTitle="Marketing Data Management & Analytics"
      serviceDescription={serviceDescription}
      serviceId="marketing-operations-revops"
    />
  );
};

export default MarketingOperationsRevOpsSchema;
