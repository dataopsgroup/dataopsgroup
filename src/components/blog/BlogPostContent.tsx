
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Lightbulb, Target, TrendingUp } from 'lucide-react';
import { sanitizeHTML } from '@/utils/sanitization';

interface BlogPostContentProps {
  content: string;
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  // Sanitize the content before rendering
  const sanitizedContent = sanitizeHTML(content, 'default');
  
  // Process content to add visual enhancements while preserving SEO structure
  const processContent = (htmlContent: string) => {
    // Add key insight boxes for important paragraphs (visual enhancement only)
    let processedContent = htmlContent;
    
    // Wrap specific patterns in enhanced styling (preserve original content)
    processedContent = processedContent.replace(
      /<p><strong>Key Insight[^<]*<\/strong>[^<]*<\/p>/gi,
      (match) => `<div class="key-insight-box">${match}</div>`
    );
    
    return processedContent;
  };

  return (
    <>
      <div className="blog-content-enhanced max-w-none">
        <div 
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: processContent(sanitizedContent) }} 
        />
      </div>
      
      {/* PE Focus Callout - Visual Enhancement */}
      <div className="pe-focus-callout my-12">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-brand-saffron rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-dataops-950 mb-3">
              PE Portfolio Application
            </h4>
            <p className="text-gray-700 leading-relaxed">
              This strategy applies directly to portfolio companies looking to optimize their HubSpot investment 
              and accelerate revenue growth through better data management and operational efficiency.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostContent;
