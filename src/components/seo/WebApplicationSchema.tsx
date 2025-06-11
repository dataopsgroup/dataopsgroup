
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface WebApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
}

const WebApplicationSchema = ({ 
  name, 
  description, 
  url,
  applicationCategory = "BusinessApplication",
  offers
}: WebApplicationSchemaProps) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${fullUrl}#webapplication`,
    "name": name,
    "description": description,
    "url": fullUrl,
    "applicationCategory": applicationCategory,
    "operatingSystem": "Web",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "provider": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": "DataOps Group",
      "url": baseUrl
    },
    "creator": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`
    },
    "isAccessibleForFree": true,
    "inLanguage": "en-US"
  };

  // Add offers if provided (for premium features)
  if (offers) {
    schemaData["offers"] = {
      "@type": "Offer",
      "price": offers.price,
      "priceCurrency": offers.priceCurrency,
      "availability": "https://schema.org/InStock"
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default WebApplicationSchema;
