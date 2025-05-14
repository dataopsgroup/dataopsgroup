
import React from 'react';
import { Helmet } from 'react-helmet-async';

const WebsiteSchema = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "${baseUrl}/#website",
            "url": "${baseUrl}",
            "name": "DataOps Group",
            "description": "HubSpot consultancy that helps businesses optimize their HubSpot implementation and maximize their ROI.",
            "publisher": {
              "@id": "${baseUrl}/#organization"
            },
            "potentialAction": [
              {
                "@type": "ReadAction",
                "target": [
                  "${baseUrl}/services",
                  "${baseUrl}/insights",
                  "${baseUrl}/about"
                ]
              }
            ],
            "inLanguage": "en-US"
          }
        `}
      </script>
    </Helmet>
  );
};

export default WebsiteSchema;
