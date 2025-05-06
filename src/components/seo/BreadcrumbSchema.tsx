
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbSchemaProps {
  items: {
    name: string;
    url: string;
  }[];
}

const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              ${items
                .map(
                  (item, index) => `{
                "@type": "ListItem",
                "position": ${index + 1},
                "name": "${item.name}",
                "item": "${window.location.origin}${item.url}"
              }`
                )
                .join(',')}
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default BreadcrumbSchema;
