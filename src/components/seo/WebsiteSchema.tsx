
import React from 'react';
import { Helmet } from 'react-helmet-async';

const WebsiteSchema = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "${window.location.origin}#website",
            "url": "${window.location.origin}",
            "name": "DataOps Group",
            "description": "HubSpot consultancy that helps businesses optimize their HubSpot implementation and maximize their ROI.",
            "publisher": {
              "@id": "${window.location.origin}#organization"
            },
            "potentialAction": [
              {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "${window.location.origin}/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              {
                "@type": "ReadAction",
                "target": [
                  "${window.location.origin}/services",
                  "${window.location.origin}/insights",
                  "${window.location.origin}/about"
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
