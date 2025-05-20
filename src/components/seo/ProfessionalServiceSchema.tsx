
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ProfessionalServiceSchema = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "DataOps Group",
            "description": "HubSpot consultancy specializing in data operations solutions and integration services",
            "url": "${baseUrl}",
            "logo": "${baseUrl}/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png",
            "founder": {
              "@type": "Person",
              "name": "Geoff Tucker"
            },
            "knowsAbout": ["HubSpot", "CRM integration", "Marketing Automation", "Data Management"],
            "makesOffer": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "HubSpot Integration Services",
                  "description": "Connect HubSpot with other business systems for seamless data flow"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom HubSpot Solutions",
                  "description": "Tailored HubSpot implementations for unique business needs"
                }
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "230 S College Ave",
              "addressLocality": "Fayetteville",
              "addressRegion": "AR",
              "postalCode": "72701",
              "addressCountry": "US"
            },
            "telephone": "+14798442052",
            "sameAs": [
              "https://www.linkedin.com/company/dataops-group/",
              "https://twitter.com/dataops_group"
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default ProfessionalServiceSchema;
