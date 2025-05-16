
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogPost } from '@/types/blog';

interface BlogPostSchemaProps {
  post: BlogPost;
}

const BlogPostSchema = ({ post }: BlogPostSchemaProps) => {
  // Format date to ISO format for schema
  const isoDate = new Date(post.date).toISOString();
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  
  // Calculate approximate word count
  const wordCount = post.content.split(/\s+/).length;
  
  // Handle the keywords - use tags if available or fallback to defaults
  const keywords = post.tags && post.tags.length > 0 
    ? post.tags.join(', ') 
    : 'hubspot, dataops, marketing operations';
  
  // Check if this post contains a calculator (for the ROI calculator post)
  const hasCalculator = post.id === 'hidden-cost-of-failed-hubspot-implementations';
  
  // Enhanced schema data for posts with calculators
  const calculatorExtension = hasCalculator ? {
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
        "url": `${baseUrl}/insights/${post.id}#calculator`,
        "applicationCategory": "BusinessApplication"
      }
    ]
  } : {};
  
  // Get the best image to use (featuredImage or fallback to coverImage)
  const imageUrl = post.featuredImage || post.coverImage;
  
  // Create the schema data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${baseUrl}/insights/${post.id}#blogposting`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/insights/${post.id}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": {
      "@type": "ImageObject",
      "url": `${baseUrl}${imageUrl}`,
      "width": "1200",
      "height": "630"
    },
    "author": {
      "@type": "Person",
      "@id": `${baseUrl}/#person-${post.author.toLowerCase().replace(/\s+/g, '-')}`,
      "name": post.author,
      "url": `${baseUrl}/about`
    },
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "datePublished": isoDate,
    "dateModified": isoDate,
    "keywords": keywords,
    "articleSection": post.category || 'HubSpot',
    "wordCount": wordCount.toString(),
    "inLanguage": "en-US",
    ...calculatorExtension
  };
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default BlogPostSchema;
