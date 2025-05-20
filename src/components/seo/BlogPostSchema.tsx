
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
  
  // Get the best image to use
  const imageUrl = getPostImageUrl(post);
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`;
  
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": fullImageUrl,
    "datePublished": isoDate,
    "dateModified": modifiedDate,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "DataOps Group",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/insights/${post.id}`
    },
    "keywords": post.tags ? post.tags.join(', ') : '',
    "articleSection": post.category || 'Blog',
    "wordCount": post.wordCount ? post.wordCount.toString() : calculateWordCount(post.content).toString()
  };
}

// Format date to ISO
function formatDateToISO(dateString: string): string {
  return new Date(dateString).toISOString();
}

// Get post image URL
function getPostImageUrl(post: BlogPost): string {
  return post.featuredImage || post.coverImage;
}

// Calculate word count if not provided
function calculateWordCount(content: string): number {
  // Remove HTML tags and count words
  const text = content.replace(/<[^>]*>/g, '');
  return text.split(/\s+/).length;
}

export default BlogPostSchema;
