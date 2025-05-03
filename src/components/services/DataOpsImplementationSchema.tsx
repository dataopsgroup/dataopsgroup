
import React from 'react';
import { Helmet } from 'react-helmet-async';

const DataOpsImplementationSchema = () => {
  return (
    <Helmet>
      <title>DataOps Implementation - HubSpot Integration Services - DataOps Group</title>
      <meta name="description" content="Unlock the full potential of HubSpot with our custom integration and implementation services. Connect your business systems and optimize your data flows." />
      <meta name="keywords" content="hubspot integration, hubspot customization, hubspot implementation, hubspot api, hubspot data migration, crm integration" />
      <link rel="canonical" href="/services/dataops-implementation" />
      
      {/* Schema markup for the service */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "DataOps Implementation - HubSpot Integration Services",
            "provider": {
              "@type": "Organization",
              "name": "DataOps Group"
            },
            "description": "Custom HubSpot integration and implementation services to connect your business systems, optimize data flows, and create seamless operations.",
            "serviceType": "HubSpot Integration & Implementation",
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

export default DataOpsImplementationSchema;
