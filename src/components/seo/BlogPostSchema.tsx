
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
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": "${baseUrl}/insights/${post.id}#blogposting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${baseUrl}/insights/${post.id}"
            },
            "headline": "${post.title}",
            "description": "${post.excerpt}",
            "image": {
              "@type": "ImageObject",
              "url": "${baseUrl}${post.coverImage}",
              "width": "1200",
              "height": "630"
            },
            "author": {
              "@type": "Person",
              "@id": "${baseUrl}/#person-${post.author.toLowerCase().replace(/\s+/g, '-')}",
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
            "wordCount": "${wordCount}",
            "inLanguage": "en-US"
          }
        `}
      </script>
    </Helmet>
  );
};

export default BlogPostSchema;
