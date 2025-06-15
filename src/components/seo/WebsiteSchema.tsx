
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { companyInfo } from '@/data/companyInfo';

const WebsiteSchema = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : companyInfo.url;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "name": companyInfo.name,
    "description": companyInfo.description,
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "inLanguage": "en-US",
    "copyrightHolder": {
      "@id": `${baseUrl}/#organization`
    },
    "copyrightYear": "2025",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default WebsiteSchema;
