
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
            "description": "HubSpot consultancy that helps businesses optimize their HubSpot implementation and maximize their ROI through data-driven strategies and expert implementation.",
            "publisher": {
              "@id": "${baseUrl}/#organization"
            },
            "potentialAction": [
              {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "${baseUrl}/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              {
                "@type": "ReadAction",
                "target": [
                  "${baseUrl}/services",
                  "${baseUrl}/insights",
                  "${baseUrl}/about"
                ]
              }
            ],
            "sameAs": [
              "https://www.linkedin.com/company/dataops-group/"
            ],
            "copyrightHolder": {
              "@id": "${baseUrl}/#organization"
            },
            "copyrightYear": "2025",
            "inLanguage": "en-US"
          }
        `}
      </script>
    </Helmet>
  );
};

export default WebsiteSchema;
