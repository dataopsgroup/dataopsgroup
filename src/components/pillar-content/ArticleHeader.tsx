
import React from 'react';

interface ArticleHeaderProps {
  title: string;
  subtitle?: string;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="article-header">
      <div className="article-meta">
        <span className="content-type">Expert Guide</span>
        <span className="read-time">15 min read</span>
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
