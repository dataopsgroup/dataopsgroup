
import React from 'react';
import ServiceSchema from '../seo/ServiceSchema';

interface ServiceSchemaMarkupProps {
  isHubSpotTraining: boolean;
  serviceId: string;
  // removed serviceTitle and serviceDescription to prevent duplicate titles
}

const ServiceSchemaMarkup = ({ 
  isHubSpotTraining,
  serviceId
}: ServiceSchemaMarkupProps) => {
  const hubspotDescription = "Expert HubSpot training and implementation services to help your team maximize the platform's capabilities and drive measurable business results.";
  const genericServiceDescription = "A professional service by DataOps Group to improve business outcomes.";

  return (
    <ServiceSchema 
      name={isHubSpotTraining ? "HubSpot Training & Implementation" : "DataOps Group Professional Service"}
      description={isHubSpotTraining ? hubspotDescription : genericServiceDescription}
      url={`/services/${serviceId}`}
      serviceOutput={isHubSpotTraining 
        ? "Improved team proficiency with HubSpot, maximized platform ROI, and streamlined operations" 
        : "Optimized data operations, improved business insights, and enhanced marketing and sales performance"}
    />
  );
};

export default ServiceSchemaMarkup;
