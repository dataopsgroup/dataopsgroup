
import React from 'react';

interface SitemapSchemaProps {
  baseUrl: string;
}

const SitemapSchema: React.FC<SitemapSchemaProps> = ({ baseUrl }) => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${baseUrl}/sitemap/#webpage`,
        "url": `${baseUrl}/sitemap`,
        "name": "Sitemap - DataOps Group | Website Navigation Guide",
        "description": "Navigate the DataOps Group website with ease using our comprehensive sitemap. Find all pages, resources, and services for HubSpot consulting and implementation.",
        "breadcrumb": {
          "@id": `${baseUrl}/sitemap/#breadcrumb`
        },
        "isPartOf": {
          "@id": `${baseUrl}/#website`
        },
        "about": {
          "@id": `${baseUrl}/#organization`
        },
        "datePublished": "2025-05-14T08:00:00+00:00",
        "dateModified": "2025-05-14T08:00:00+00:00",
        "inLanguage": "en-US"
      })}
    </script>
  );
};

export default SitemapSchema;
