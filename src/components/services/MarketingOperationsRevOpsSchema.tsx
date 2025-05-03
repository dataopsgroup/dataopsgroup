
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MarketingOperationsRevOpsSchema = () => {
  return (
    <Helmet>
      <title>Marketing Operations & RevOps - DataOps Group</title>
      <meta name="description" content="Transform your marketing and revenue operations with our strategic RevOps services. Optimize your tech stack, streamline processes, and drive growth." />
      <meta name="keywords" content="marketing operations, revenue operations, revops, marketing technology, martech, HubSpot, data integration, workflow automation" />
      <link rel="canonical" href="/services/marketing-operations-revops" />
      
      {/* Schema markup for the service */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Marketing Operations & RevOps",
            "provider": {
              "@type": "Organization",
              "name": "DataOps Group"
            },
            "description": "Strategic marketing operations and revenue operations (RevOps) services to align marketing, sales and customer success for improved performance and ROI.",
            "serviceType": "Marketing Operations & RevOps",
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

export default MarketingOperationsRevOpsSchema;
