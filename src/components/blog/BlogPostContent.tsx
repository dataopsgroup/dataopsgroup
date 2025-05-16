
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface BlogPostContentProps {
  content: string;
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  return (
    <>
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: content }} 
      />
      
      <style>
        {`
        .blog-image-container {
          margin: 2rem 0;
          width: 100%;
        }
        .blog-post-image {
          width: 100%;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        figcaption {
          text-align: center;
          color: #666;
          font-size: 0.9rem;
          margin-top: 0.5rem;
          font-style: italic;
        }
        `}
      </style>
      
      <div className="mt-12 pt-8 border-t border-gray-100">
        <h3 className="text-xl font-semibold mb-4">Ready to Fix Your HubSpot Ordeal?</h3>
        <p className="mb-6">
          Stop throwing money at new leads when your existing contacts could be paying customers. 
          Schedule a consultation to see how we can convert your HubSpot portal into a revenue engine.
        </p>
        <Button asChild className="bg-dataops-600 hover:bg-dataops-700">
          <Link 
            to="/contact"
            onClick={() => {
              // Track CTA click
              if (window.gtag) {
                window.gtag('event', 'cta_click', {
                  'event_category': 'Engagement',
                  'event_label': 'Blog Post Bottom CTA',
                });
              }
            }}
          >
            Schedule a Consultation
          </Link>
        </Button>
      </div>
    </>
  );
};

export default BlogPostContent;
