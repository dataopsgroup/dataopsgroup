
import React from 'react';
import ServiceSchema from '../seo/ServiceSchema';

interface ServiceSchemaMarkupProps {
  isHubSpotTraining: boolean;
  serviceTitle: string;
  serviceDescription: string;
  serviceId: string;
}

const ServiceSchemaMarkup = ({ 
  isHubSpotTraining,
  serviceTitle,
  serviceDescription,
  serviceId
}: ServiceSchemaMarkupProps) => {
  const hubspotDescription = "Expert HubSpot training and implementation services to help your team maximize the platform's capabilities and drive measurable business results.";
  
  return (
    <ServiceSchema 
      name={isHubSpotTraining ? "HubSpot Training & Implementation" : serviceTitle}
      description={isHubSpotTraining ? hubspotDescription : serviceDescription}
      url={`/services/${serviceId}`}
      serviceOutput={isHubSpotTraining 
        ? "Improved team proficiency with HubSpot, maximized platform ROI, and streamlined operations" 
        : "Optimized data operations, improved business insights, and enhanced marketing and sales performance"}
    />
  );
};

export default ServiceSchemaMarkup;
