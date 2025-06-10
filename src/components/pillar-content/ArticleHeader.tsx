
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ShareButtons from '@/components/ui/ShareButtons';

interface ArticleHeaderProps {
  title: string;
  subtitle?: string;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  title,
  subtitle
}) => {
  return (
    <div className="article-header">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Hire a HubSpot Expert: Step-by-Step Process",
            "description": "Complete step-by-step guide to finding, evaluating, and hiring the right HubSpot expert for your business",
            "image": "https://www.dataopsgroup.com/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png",
            "totalTime": "PT15M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "3500-75000"
            },
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Business requirements documentation"
              },
              {
                "@type": "HowToSupply", 
                "name": "Budget allocation"
              },
              {
                "@type": "HowToSupply",
                "name": "Timeline expectations"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Define Your HubSpot Needs",
                "text": "Identify what type of HubSpot expertise you need based on your business goals, current challenges, and integration requirements."
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Evaluate Expert Qualifications",
                "text": "Review HubSpot certifications, integration experience, industry expertise, and portfolio of successful implementations."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Assess Pricing and ROI",
                "text": "Compare hourly rates, project-based pricing, and calculate expected ROI based on your business objectives."
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Conduct Expert Interviews",
                "text": "Ask essential questions about their approach, experience with similar projects, and integration capabilities."
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Check References and Case Studies",
                "text": "Verify past client success stories, implementation results, and long-term partnership outcomes."
              },
              {
                "@type": "HowToStep",
                "position": 6,
                "name": "Make Your Final Decision",
                "text": "Select the expert who best matches your needs, budget, and timeline while demonstrating proven expertise."
              }
            ],
            "author": {
              "@type": "Person",
              "name": "Geoff Tucker",
              "url": "https://www.dataopsgroup.com/about"
            }
          })}
        </script>
      </Helmet>

      <div className="article-meta">
        <div className="flex items-center">
          <ShareButtons title={title} className="flex-row space-x-2 space-y-0 mr-3" variant="white" />
          <span className="content-type">👨‍🏫 Expert Guide</span>
        </div>
        
        <span className="read-time" style={{
          color: '#8CC7E3'
        }}>
          ⏱️ 15 min read
        </span>
        <span className="last-updated">Updated January 2025</span>
      </div>
      
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight relative z-10 mb-4">
        {title}
      </h1>
      
      <div className="article-summary">
        <p className="lead">
          The definitive guide to finding, evaluating, and hiring HubSpot experts that deliver measurable ROI for your business. 
          Learn from 12+ years of implementation experience.
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
