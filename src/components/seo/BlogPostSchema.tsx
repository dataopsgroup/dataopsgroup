
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
  
  // Extract image dimensions for schema
  const imageWidth = 1200;
  const imageHeight = 630;
  
  // Handle the keywords - use tags if available or fallback to defaults
  const keywords = post.tags && post.tags.length > 0 
    ? post.tags.join(', ') 
    : 'hubspot, dataops, marketing operations';
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${baseUrl}/insights/${post.id}"
            },
            "headline": "${post.title}",
            "description": "${post.excerpt}",
            "image": {
              "@type": "ImageObject",
              "url": "${baseUrl}${post.coverImage}",
              "width": "${imageWidth}",
              "height": "${imageHeight}"
            },
            "author": {
              "@type": "Person",
              "name": "${post.author}",
              "url": "${baseUrl}/about"
            },
            "publisher": {
              "@id": "${baseUrl}/#organization"
            },
            "datePublished": "${isoDate}",
            "dateModified": "${isoDate}",
            "keywords": "${keywords}",
            "articleSection": "${post.category || 'HubSpot'}",
            "inLanguage": "en-US"
          }
        `}
      </script>
    </Helmet>
  );
};

export default BlogPostSchema;
