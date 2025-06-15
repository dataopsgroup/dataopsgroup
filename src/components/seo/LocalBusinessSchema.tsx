
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { companyInfo } from '@/data/companyInfo';

const LocalBusinessSchema = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : companyInfo.url;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#organization`, // Use same ID to merge with OrganizationSchema
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyInfo.address.street,
      "addressLocality": companyInfo.address.city,
      "addressRegion": companyInfo.address.state,
      "postalCode": companyInfo.address.zip,
      "addressCountry": companyInfo.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": companyInfo.geo.latitude,
      "longitude": companyInfo.geo.longitude
    },
    "telephone": companyInfo.contact.phone,
    "priceRange": "$$$",
    "openingHours": "Mo,Tu,We,Th 09:00-17:00",
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
