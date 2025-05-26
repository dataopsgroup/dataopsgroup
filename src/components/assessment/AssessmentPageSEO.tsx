
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const AssessmentPageSEO = () => {
  return (
    <>
      <Helmet>
        <title>Free HubSpot Assessment | DataOps Group</title>
        <meta 
          name="description" 
          content="Get a free comprehensive assessment of your HubSpot setup. Identify gaps, optimization opportunities, and get expert recommendations to maximize your ROI." 
        />
        <meta name="keywords" content="hubspot assessment, free hubspot audit, crm evaluation, marketing automation review" />
        <link rel="canonical" href="https://dataopsgroup.com/hubspot-assessment" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Free HubSpot Assessment | DataOps Group" />
        <meta property="og:description" content="Get a free comprehensive assessment of your HubSpot setup. Identify gaps, optimization opportunities, and get expert recommendations to maximize your ROI." />
        <meta property="og:url" content="https://dataopsgroup.com/hubspot-assessment" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Free HubSpot Assessment | DataOps Group" />
        <meta name="twitter:description" content="Get a free comprehensive assessment of your HubSpot setup. Identify gaps, optimization opportunities, and get expert recommendations to maximize your ROI." />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "HubSpot Assessment",
              "description": "Get a free comprehensive assessment of your HubSpot setup. Identify gaps, optimization opportunities, and get expert recommendations to maximize your ROI.",
              "url": "${window.location.origin}/hubspot-assessment",
              "publisher": {
                "@type": "Organization",
                "name": "DataOps Group",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${window.location.origin}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
                }
              }
            }
          `}
        </script>
      </Helmet>
      
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "HubSpot Assessment", url: "/hubspot-assessment" }
        ]} 
      />
    </>
  );
};

export default AssessmentPageSEO;
