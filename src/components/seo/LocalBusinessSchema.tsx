
import React from 'react';
import { Helmet } from 'react-helmet-async';

const LocalBusinessSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://dataopsgroup.com",
    "name": "DataOps Group",
    "description": "DataOps Group helps businesses maximize the value of their HubSpot implementation through innovative data operations solutions and expert consulting services.",
    "url": "https://dataopsgroup.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://dataopsgroup.com/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png",
      "width": 512,
      "height": 512
    },
    "image": "https://dataopsgroup.com/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png",
    "telephone": "+14798442052",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fayetteville",
      "addressRegion": "AR",
      "postalCode": "72701",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.0822,
      "longitude": -94.1719
    },
    "openingHours": "Mo,Tu,We,Th 09:00-17:00",
    "sameAs": [
      "https://www.linkedin.com/company/dataops-group",
      "https://twitter.com/dataops_group"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HubSpot Consulting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "HubSpot Analytics & BI",
          "description": "Advanced HubSpot analytics and business intelligence consulting for improved decision making.",
          "url": "https://dataopsgroup.com/services/analytics-bi"
        },
        {
          "@type": "Offer",
          "name": "DataOps Implementation",
          "description": "Full-service HubSpot implementation with data operations focus.",
          "url": "https://dataopsgroup.com/services/dataops-implementation"
        },
        {
          "@type": "Offer",
          "name": "Marketing Operations & RevOps",
          "description": "Optimize your marketing and revenue operations with HubSpot.",
          "url": "https://dataopsgroup.com/services/marketing-operations-revops"
        },
        {
          "@type": "Offer",
          "name": "Team Training",
          "description": "Comprehensive HubSpot training for your marketing and sales teams.",
          "url": "https://dataopsgroup.com/services/team-training"
        }
      ]
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

export default LocalBusinessSchema;
