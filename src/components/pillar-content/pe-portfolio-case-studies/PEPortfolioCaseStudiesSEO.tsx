import React from 'react';
import { Helmet } from 'react-helmet-async';

const PEPortfolioCaseStudiesSEO = () => {
  return (
    <Helmet>
      <title>Portfolio Value Creation Case Studies - HubSpot PE Implementation | DataOps Group</title>
      <meta 
        name="description" 
        content="Real examples of how sophisticated PE firms use HubSpot to drive measurable value creation across diverse portfolio companies. Manufacturing, healthcare, SaaS, and professional services case studies with detailed ROI analysis." 
      />
      <meta 
        name="keywords" 
        content="private equity case studies, hubspot pe implementation, portfolio value creation, pe operational improvement, hubspot roi case studies" 
      />
      <link rel="canonical" href="https://www.dataopsgroup.com/guides/pe-portfolio-value-creation-case-studies" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content="Portfolio Value Creation Case Studies - HubSpot PE Implementation" />
      <meta property="og:description" content="Real examples of how sophisticated PE firms use HubSpot to drive measurable value creation across diverse portfolio companies." />
      <meta property="og:url" content="https://www.dataopsgroup.com/guides/pe-portfolio-value-creation-case-studies" />
      <meta property="og:type" content="article" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Portfolio Value Creation Case Studies - HubSpot PE Implementation" />
      <meta name="twitter:description" content="Real examples of how sophisticated PE firms use HubSpot to drive measurable value creation across diverse portfolio companies." />
      
      {/* Schema markup for case studies */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Portfolio Value Creation Case Studies - HubSpot PE Implementation",
          "description": "Real examples of how sophisticated PE firms use HubSpot to drive measurable value creation across diverse portfolio companies",
          "author": {
            "@type": "Organization",
            "name": "DataOps Group"
          },
          "publisher": {
            "@type": "Organization",
            "name": "DataOps Group",
            "url": "https://www.dataopsgroup.com"
          }
        })}
      </script>
    </Helmet>
  );
};

export default PEPortfolioCaseStudiesSEO;