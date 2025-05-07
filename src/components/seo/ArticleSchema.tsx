
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  authorName?: string;
  publishDate: string;
  modifiedDate?: string;
  categories?: string[];
}

const ArticleSchema = ({
  title,
  description,
  url,
  image = "https://dataopsgroup.com/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png",
  authorName = "Geoff Tucker",
  publishDate,
  modifiedDate,
  categories = ["HubSpot", "Marketing Operations", "Data Quality"]
}: ArticleSchemaProps) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "headline": title,
    "description": description,
    "image": image,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "DataOps Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dataopsgroup.com/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png",
        "width": 512,
        "height": 512
      }
    },
    "datePublished": publishDate,
    "dateModified": modifiedDate || publishDate,
    "keywords": categories.join(", ")
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default ArticleSchema;
