
import React from 'react';
import ServiceSchema from '../seo/ServiceSchema';

const AnalyticsBISchema = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  const serviceDescription = "Transform your raw HubSpot data into actionable insights with our advanced analytics and visualization services that empower you to make data-driven business decisions.";
  
  return (
    <ServiceSchema 
      name="HubSpot Analytics & Business Intelligence"
      description={serviceDescription}
      url="/services/analytics-bi"
      image="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
      serviceOutput="Actionable insights from your HubSpot data, customized dashboards, and data-driven business decisions"
    />
  );
};

export default AnalyticsBISchema;
