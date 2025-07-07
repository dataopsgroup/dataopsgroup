import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

const PEImplementationRoadmapSEO = () => {
  // Enhanced structured data for this implementation guide
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${baseUrl}/guides/pe-hubspot-implementation-roadmap#article`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${baseUrl}/guides/pe-hubspot-implementation-roadmap`
        },
        "headline": "The PE-Optimized HubSpot Implementation Roadmap",
        "description": "A battle-tested framework for implementing HubSpot across private equity portfolios that maximizes value creation while minimizing adoption risk",
        "image": {
          "@type": "ImageObject",
          "url": `${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`,
          "width": 1200,
          "height": 630
        },
        "author": {
          "@type": "Person",
          "@id": `${baseUrl}/#person-geoff-tucker`,
          "name": "Geoff Tucker",
          "url": `${baseUrl}/about`,
          "jobTitle": "Founder & CEO",
          "worksFor": {
            "@id": `${baseUrl}/#organization`
          },
          "knowsAbout": [
            "HubSpot Implementation",
            "Private Equity Operations",
            "Portfolio Management",
            "Marketing Operations",
            "Revenue Operations"
          ]
        },
        "publisher": {
          "@id": `${baseUrl}/#organization`
        },
        "datePublished": "2025-01-08T00:00:00+00:00",
        "dateModified": "2025-01-08T00:00:00+00:00",
        "articleSection": "HubSpot Implementation Guides",
        "keywords": [
          "hubspot implementation roadmap",
          "pe hubspot implementation",
          "private equity crm implementation",
          "hubspot 90 day sprint",
          "portfolio company hubspot",
          "pe technology implementation"
        ],
        "wordCount": 3500,
        "inLanguage": "en-US"
      },
      {
        "@type": "HowTo",
        "@id": `${baseUrl}/guides/pe-hubspot-implementation-roadmap#howto`,
        "name": "How to Implement HubSpot in 90 Days for PE Portfolio Companies",
        "description": "Step-by-step 90-day implementation framework for private equity portfolio companies",
        "image": `${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`,
        "totalTime": "P90D",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "150000"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Pre-Implementation Foundation Phase",
            "text": "Conduct stakeholder alignment workshop and data architecture assessment"
          },
          {
            "@type": "HowToStep", 
            "name": "Days 1-30: Foundation Sprint",
            "text": "Configure core system, map sales processes, integrate marketing, build reporting infrastructure"
          },
          {
            "@type": "HowToStep",
            "name": "Days 31-60: Optimization Sprint",
            "text": "Implement advanced workflows, cross-portfolio integration, and AI capabilities"
          },
          {
            "@type": "HowToStep",
            "name": "Days 61-90: Scale and Systematize",
            "text": "Validate performance, transfer knowledge, and prepare for exit processes"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>PE-Optimized HubSpot Implementation Roadmap | 90-Day Value Creation Sprint | DataOps Group</title>
        <meta name="description" content="Battle-tested 90-day framework for implementing HubSpot across PE portfolios. Maximize value creation while minimizing adoption risk with proven strategies." />
        <meta name="keywords" content="hubspot implementation roadmap, pe hubspot implementation, private equity crm, hubspot 90 day sprint, portfolio company hubspot" />
        <link rel="canonical" href={`${baseUrl}/guides/pe-hubspot-implementation-roadmap`} />
        
        {/* Enhanced Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="PE-Optimized HubSpot Implementation Roadmap | 90-Day Value Creation Sprint" />
        <meta property="og:description" content="Battle-tested 90-day framework for implementing HubSpot across PE portfolios. Maximize value creation while minimizing adoption risk." />
        <meta property="og:url" content={`${baseUrl}/guides/pe-hubspot-implementation-roadmap`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="DataOps Group" />
        <meta property="article:published_time" content="2025-01-08T00:00:00+00:00" />
        <meta property="article:modified_time" content="2025-01-08T00:00:00+00:00" />
        <meta property="article:author" content="Geoff Tucker" />
        <meta property="article:section" content="HubSpot Implementation Guides" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PE-Optimized HubSpot Implementation Roadmap | 90-Day Value Creation Sprint" />
        <meta name="twitter:description" content="Battle-tested 90-day framework for implementing HubSpot across PE portfolios. Maximize value creation while minimizing adoption risk." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta name="twitter:site" content="@dataops_group" />
        <meta name="twitter:creator" content="@dataops_group" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Geoff Tucker" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Guides", url: "/guides" },
        { name: "PE-Optimized HubSpot Implementation Roadmap", url: "/guides/pe-hubspot-implementation-roadmap" }
      ]} />
    </>
  );
};

export default PEImplementationRoadmapSEO;