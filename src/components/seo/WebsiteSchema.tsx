
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
            "description": "HubSpot consultancy helping businesses optimize their HubSpot implementation and maximize their ROI through data-driven strategies and expert implementation.",
            "publisher": {
              "@id": "${baseUrl}/#organization"
            },
            "inLanguage": "en-US",
            "copyrightHolder": {
              "@id": "${baseUrl}/#organization"
            },
            "copyrightYear": "2025",
            "isPartOf": {
              "@id": "${baseUrl}/#organization"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default WebsiteSchema;
