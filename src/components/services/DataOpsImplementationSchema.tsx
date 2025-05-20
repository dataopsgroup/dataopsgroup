
import React from 'react';
import ServiceSchema from '../seo/ServiceSchema';

const DataOpsImplementationSchema = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  const serviceDescription = "Custom HubSpot integration and implementation services to connect your business systems, optimize data flows, and create seamless operations.";
  
  return (
    <ServiceSchema 
      name="DataOps Implementation for HubSpot"
      description={serviceDescription}
      url="/services/dataops-implementation"
      image="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
      serviceOutput="Optimized data workflows, seamless system integrations, and improved business efficiency"
    />
  );
};

export default DataOpsImplementationSchema;
