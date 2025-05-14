
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
  wordCount?: number;
}

const ArticleSchema = ({
  title,
  description,
  url,
  image,
  authorName = "Geoff Tucker",
  publishDate,
  modifiedDate,
  categories = ["HubSpot", "Marketing Operations", "Data Quality"],
  wordCount = 1200
}: ArticleSchemaProps) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
  const fullImageUrl = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : 
    `${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`;
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${fullUrl}#article`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "headline": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": fullImageUrl,
      "width": "1200",
      "height": "630"
    },
    "author": {
      "@type": "Person",
      "@id": `${baseUrl}/#person-${authorName.toLowerCase().replace(/\s+/g, '-')}`,
      "name": authorName,
      "url": `${baseUrl}/about`
    },
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "datePublished": publishDate,
    "dateModified": modifiedDate || publishDate,
    "keywords": categories.join(", "),
    "articleSection": categories[0] || "HubSpot",
    "wordCount": wordCount.toString(),
    "inLanguage": "en-US"
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
