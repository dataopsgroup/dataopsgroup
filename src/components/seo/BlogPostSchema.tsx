
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogPost } from '@/types/blog';

interface BlogPostSchemaProps {
  post: BlogPost;
}

const BlogPostSchema = ({ post }: BlogPostSchemaProps) => {
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
            "image": "${window.location.origin}${post.coverImage}",
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
            "datePublished": "${post.date}",
            "dateModified": "${post.date}"
          }
        `}
      </script>
    </Helmet>
  );
};

export default BlogPostSchema;
