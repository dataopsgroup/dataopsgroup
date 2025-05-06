
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogPost } from '@/types/blog';

interface BlogPostSchemaProps {
  post: BlogPost;
}

const BlogPostSchema = ({ post }: BlogPostSchemaProps) => {
  // Format date to ISO format for schema
  const isoDate = new Date(post.date).toISOString();
  
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
              "@id": "${window.location.origin}/insights/${post.id}"
            },
            "headline": "${post.title}",
            "description": "${post.excerpt}",
            "image": {
              "@type": "ImageObject",
              "url": "${window.location.origin}${post.coverImage}",
              "width": "${imageWidth}",
              "height": "${imageHeight}"
            },
            "author": {
              "@type": "Person",
              "name": "${post.author}"
            },
            "publisher": {
              "@type": "Organization",
              "name": "DataOps Group",
              "logo": {
                "@type": "ImageObject",
                "url": "${window.location.origin}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png",
                "width": "112",
                "height": "112"
              }
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
