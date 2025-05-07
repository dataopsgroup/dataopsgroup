
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: string;
  areaServed?: string;
}

const ServiceSchema = ({ 
  name, 
  description, 
  url, 
  image = "https://dataopsgroup.com/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png", 
  provider = "DataOps Group",
  areaServed = "Worldwide" 
}: ServiceSchemaProps) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@type": "ProfessionalService",
      "name": provider,
      "url": "https://dataopsgroup.com"
    },
    "serviceType": "HubSpot Consulting",
    "areaServed": areaServed,
    "image": image
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
