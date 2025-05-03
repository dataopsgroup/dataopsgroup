
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MarketingOperationsRevOpsSchema = () => {
  return (
    <Helmet>
      <title>Marketing Data Management & Analytics - DataOps Group</title>
      <meta name="description" content="Transform your marketing data into actionable insights. Our marketing data management and analytics services help you improve ROI, optimize campaigns, and drive growth." />
      <meta name="keywords" content="marketing data management, marketing analytics, data integration, marketing dashboards, campaign analytics, marketing ROI, data visualization" />
      <link rel="canonical" href="/services/marketing-operations-revops" />
      
      {/* Schema markup for the service */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Marketing Data Management & Analytics",
            "provider": {
              "@type": "Organization",
              "name": "DataOps Group"
            },
            "description": "Comprehensive marketing data management and analytics services to help businesses integrate, analyze, and visualize marketing data for improved campaign performance and ROI.",
            "serviceType": "Marketing Data Management & Analytics",
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
