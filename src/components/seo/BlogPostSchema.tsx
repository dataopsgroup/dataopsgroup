import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogPost } from '@/types/blog';

interface BlogPostSchemaProps {
  post: BlogPost;
}

const BlogPostSchema = ({ post }: BlogPostSchemaProps) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  const schemaData = generateBlogPostSchema(post, baseUrl);
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

// Helper function to generate the blog post schema data
function generateBlogPostSchema(post: BlogPost, baseUrl: string) {
  // Format date to ISO
  const isoDate = formatDateToISO(post.date);
  const modifiedDate = post.modifiedDate ? formatDateToISO(post.modifiedDate) : isoDate;
  
  // Get word count - use stored value or calculate
  const wordCount = getPostWordCount(post);
  
  // Get keywords from tags or defaults
  const keywords = getPostKeywords(post);
  
  // Get the best image to use
  const imageUrl = getPostImageUrl(post);
  
  // Check if this post contains a calculator
  const hasCalculator = checkIfPostHasCalculator(post.id);
  
  // Create the core schema
  const coreSchema = createCoreSchema(post, baseUrl, imageUrl, isoDate, modifiedDate, wordCount, keywords);
  
  // Add calculator extension if needed
  return hasCalculator 
    ? { ...coreSchema, ...createCalculatorExtension(post.id, baseUrl) }
    : coreSchema;
}

// Format date to ISO
function formatDateToISO(dateString: string): string {
  return new Date(dateString).toISOString();
}

// Get post word count
function getPostWordCount(post: BlogPost): number {
  // Use the stored wordCount if available
  if (post.wordCount !== undefined) {
    return post.wordCount;
  }
  
  // Otherwise calculate approximately
  return post.content.split(/\s+/).length;
}

// Get post keywords
function getPostKeywords(post: BlogPost): string {
  return post.tags && post.tags.length > 0 
    ? post.tags.join(', ') 
    : 'hubspot, dataops, marketing operations';
}

// Get post image URL
function getPostImageUrl(post: BlogPost): string {
  return post.featuredImage || post.coverImage;
}

// Check if post has calculator
function checkIfPostHasCalculator(postId: string): boolean {
  return postId === 'hidden-cost-of-failed-hubspot-implementations';
}

// Create core schema
function createCoreSchema(
  post: BlogPost, 
  baseUrl: string,
  imageUrl: string,
  isoDate: string,
  modifiedDate: string,
  wordCount: number,
  keywords: string
) {
  return {
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
    "author": createAuthorSchema(post.author, baseUrl),
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "datePublished": isoDate,
    "dateModified": modifiedDate,
    "keywords": keywords,
    "articleSection": post.category || 'HubSpot',
    "wordCount": wordCount.toString(),
    "inLanguage": "en-US"
  };
}

// Create author schema
function createAuthorSchema(authorName: string, baseUrl: string) {
  return {
    "@type": "Person",
    "@id": `${baseUrl}/#person-${authorName.toLowerCase().replace(/\s+/g, '-')}`,
    "name": authorName,
    "url": `${baseUrl}/about`
  };
}

// Create calculator extension for ROI calculator
function createCalculatorExtension(postId: string, baseUrl: string) {
  return {
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
        "url": `${baseUrl}/insights/${postId}#calculator`,
        "applicationCategory": "BusinessApplication"
      }
    ]
  };
}

export default BlogPostSchema;
