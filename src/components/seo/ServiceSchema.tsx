
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: string;
  areaServed?: string;
  price?: string;
  priceCurrency?: string;
  serviceOutput?: string;
}

const ServiceSchema = ({ 
  name, 
  description, 
  url, 
  image = "https://dataopsgroup.com/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png", 
  provider = "DataOps Group",
  areaServed = "Worldwide",
  price = "",
  priceCurrency = "USD",
  serviceOutput = "Improved HubSpot implementation and data quality"
}: ServiceSchemaProps) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${fullUrl}#service`,
    "name": name,
    "description": description,
    "url": fullUrl,
    "provider": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": provider,
      "url": baseUrl
    },
    "serviceType": "HubSpot Consulting",
    "areaServed": {
      "@type": "GeoShape",
      "name": areaServed
    },
    "image": {
      "@type": "ImageObject",
      "url": fullImageUrl,
      "width": "1200",
      "height": "630"
    },
    "serviceOutput": serviceOutput,
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `${baseUrl}/contact`,
      "servicePhone": "+14798442052"
    },
    "termsOfService": `${baseUrl}/terms`,
    "offers": {
      "@type": "Offer",
      "price": price || "Contact for pricing",
      "priceCurrency": priceCurrency,
      "availability": "https://schema.org/InStock",
      "url": `${baseUrl}/contact`
    },
    "mainEntityOfPage": {
      "@id": fullUrl
    },
    "isPartOf": {
      "@id": `${baseUrl}/#website`
    }
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
