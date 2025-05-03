
import React from 'react';
import { Helmet } from 'react-helmet-async';

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
    <Helmet>
      <title>{isHubSpotTraining ? "HubSpot Training & Implementation" : serviceTitle} - DataOps Group</title>
      <meta 
        name="description" 
        content={`Learn about our ${isHubSpotTraining ? "HubSpot Training and Implementation" : serviceTitle} service and how it can help your business optimize data operations and drive growth.`} 
      />
      <meta 
        name="keywords" 
        content={`${isHubSpotTraining ? "hubspot training, hubspot implementation, hubspot consulting, hubspot expertise" : serviceTitle.toLowerCase()}, data operations, ${serviceId}, data consulting`} 
      />
      <link rel="canonical" href={`/services/${serviceId}`} />
      
      {/* Schema markup for the service */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "${isHubSpotTraining ? "HubSpot Training & Implementation" : serviceTitle}",
            "provider": {
              "@type": "Organization",
              "name": "DataOps Group"
            },
            "description": "${isHubSpotTraining ? hubspotDescription : serviceDescription}",
            "serviceType": "${isHubSpotTraining ? "HubSpot Training & Implementation" : serviceTitle}",
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "author": {
              "@type": "Person",
              "name": "Geoff Tucker"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default ServiceSchemaMarkup;
