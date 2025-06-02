
import React from 'react';
import ShareButtons from '@/components/ui/ShareButtons';

interface ArticleHeaderProps {
  title: string;
  subtitle?: string;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="article-header">
      <div className="article-meta">
        <span className="content-type">Expert Guide</span>
        
        {/* Social sharing icons positioned immediately after Expert Guide pill */}
        <div className="flex items-center">
          <ShareButtons 
            title={title}
            className="flex-row space-x-2 space-y-0"
            variant="white"
          />
        </div>
        
        <span className="read-time" style={{ color: '#8CC7E3' }}>
          ⏱️ 15 min read
        </span>
        <span className="last-updated">Updated March 2025</span>
      </div>
      
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight relative z-10 mb-4">
        {title}
      </h1>
      
      <div className="article-summary">
        <p className="lead">
          The definitive guide to finding, evaluating, and hiring HubSpot experts that deliver measurable ROI for your business.
        </p>
      </div>
      
      <div className="expertise-badge">
        <span className="text-xl">🏆</span>
        <span>Written by HubSpot Expert Since 2012</span>
      </div>
    </div>
  );
};

export default ArticleHeader;
