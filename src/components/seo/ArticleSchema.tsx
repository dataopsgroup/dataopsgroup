
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
  hasCalculator?: boolean;
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
  wordCount = 1200,
  hasCalculator = false
}: ArticleSchemaProps) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  const schemaData = generateArticleSchema(
    baseUrl, title, description, url, image, authorName, 
    publishDate, modifiedDate, categories, wordCount, hasCalculator
  );
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

// Fixed function signature to ensure required parameters come before optional ones
function generateArticleSchema(
  baseUrl: string,
  title: string,
  description: string,
  url: string,
  image: string | undefined,
  authorName: string,
  publishDate: string,
  modifiedDate: string | undefined,
  categories: string[],
  wordCount: number,
  hasCalculator: boolean
) {
  const fullUrl = getFullUrl(url, baseUrl);
  const fullImageUrl = getFullImageUrl(image, baseUrl);
  const authorId = authorName.toLowerCase().replace(/\s+/g, '-');
  
  // Create core schema
  const coreSchema = {
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
      "@id": `${baseUrl}/#person-${authorId}`,
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
    "inLanguage": "en-US",
    "isPartOf": {
      "@id": `${baseUrl}/#website`
    }
  };
  
  // Add calculator extension if needed
  if (hasCalculator) {
    return {
      ...coreSchema,
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/InteractAction",
        "userInteractionCount": "1"
      },
      "hasPart": [
        {
          "@type": "WebApplication",
          "name": "HubSpot ROI Calculator",
          "description": "Calculate the hidden costs of a failed HubSpot implementation and the potential ROI of fixing it",
          "url": `${fullUrl}#calculator`,
          "applicationCategory": "BusinessApplication"
        }
      ]
    };
  }
  
  return coreSchema;
}

function getFullUrl(url: string, baseUrl: string): string {
  return url.startsWith('http') ? url : `${baseUrl}${url}`;
}

function getFullImageUrl(image: string | undefined, baseUrl: string): string {
  if (!image) {
    return `${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`;
  }
  
  return image.startsWith('http') ? image : `${baseUrl}${image}`;
}

export default ArticleSchema;
