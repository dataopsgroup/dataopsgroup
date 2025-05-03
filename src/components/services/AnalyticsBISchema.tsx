
import React from 'react';
import ServiceSchemaMarkup from './ServiceSchemaMarkup';

const AnalyticsBISchema = () => {
  const serviceDescription = "Transform your raw data into actionable insights with our advanced analytics and visualization services that empower you to make data-driven business decisions.";
  
  return (
    <ServiceSchemaMarkup 
      isHubSpotTraining={false}
      serviceTitle="Analytics & Business Intelligence"
      serviceDescription={serviceDescription}
      serviceId="analytics-bi"
    />
  );
};

export default AnalyticsBISchema;
