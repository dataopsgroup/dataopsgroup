
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import CompleteHubSpotGuideHero from '@/components/pillar-content/complete-hubspot-guide/CompleteHubSpotGuideHero';
import CompleteHubSpotGuideContent from '@/components/pillar-content/complete-hubspot-guide/CompleteHubSpotGuideContent';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ArticleSchema from '@/components/seo/ArticleSchema';

const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

const CompleteHubSpotGuidePage = () => {
  // Enhanced structured data for this comprehensive guide
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${baseUrl}/guides/complete-hubspot-guide-for-private-equity#article`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${baseUrl}/guides/complete-hubspot-guide-for-private-equity`
        },
        "headline": "The Complete HubSpot Guide for Private Equity: Beyond CRM to Portfolio Orchestration",
        "description": "How smart PE firms use HubSpot not just as a customer database, but as the central nervous system that drives portfolio value creation and IRR optimization",
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
        "articleSection": "HubSpot Guides",
        "keywords": [
          "hubspot private equity",
          "portfolio orchestration",
          "pe value creation",
          "crm private equity",
          "portfolio intelligence",
          "hubspot pe guide",
          "private equity technology",
          "portfolio management software"
        ],
        "wordCount": 4500,
        "inLanguage": "en-US",
        "about": [
          {
            "@type": "Thing",
            "name": "HubSpot",
            "description": "Customer relationship management platform"
          },
          {
            "@type": "Thing", 
            "name": "Private Equity",
            "description": "Investment strategy involving direct investment in private companies"
          },
          {
            "@type": "Thing",
            "name": "Portfolio Management",
            "description": "Management of investment portfolios and portfolio companies"
          }
        ],
        "mentions": [
          {
            "@type": "SoftwareApplication",
            "name": "HubSpot CRM",
            "applicationCategory": "Customer Relationship Management"
          },
          {
            "@type": "Organization",
            "name": "DataOps Group",
            "@id": `${baseUrl}/#organization`
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": `${baseUrl}/guides/complete-hubspot-guide-for-private-equity#howto`,
        "name": "How to Implement HubSpot for Private Equity Portfolio Management",
        "description": "Step-by-step guide for PE firms to transform HubSpot into a portfolio orchestration platform",
        "image": `${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`,
        "totalTime": "P90D",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "50000"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Assess Current Portfolio Technology Stack",
            "text": "Evaluate existing CRM systems and data infrastructure across portfolio companies"
          },
          {
            "@type": "HowToStep", 
            "name": "Design Portfolio-Level Architecture",
            "text": "Create hub-and-spoke model connecting PE firm instance to portfolio company instances"
          },
          {
            "@type": "HowToStep",
            "name": "Implement Standardized Data Models",
            "text": "Establish consistent data structures and reporting hierarchies across all entities"
          },
          {
            "@type": "HowToStep",
            "name": "Configure Cross-Portfolio Intelligence",
            "text": "Set up automated reporting and pattern recognition across portfolio companies"
          },
          {
            "@type": "HowToStep",
            "name": "Drive Adoption Through Peer Networks",
            "text": "Use viral adoption strategies leveraging peer-to-peer knowledge transfer"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/guides/complete-hubspot-guide-for-private-equity#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much value can PE firms create with HubSpot?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Portfolio companies with optimized HubSpot implementations achieve exit multiples that are 0.3-0.7x higher than comparable companies with fragmented technology stacks, representing $30-70 million in additional value for a typical $100 million exit."
            }
          },
          {
            "@type": "Question",
            "name": "What makes HubSpot different from other CRMs for PE firms?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "HubSpot becomes a portfolio orchestration platform enabling cross-portfolio intelligence, standardized operations, and measurable value creation at scale, rather than just individual company CRM functionality."
            }
          },
          {
            "@type": "Question",
            "name": "How long does PE-optimized HubSpot implementation take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically 90-120 days for full portfolio rollout, with individual portfolio companies achieving operational status within 30-45 days using proven PE-specific configurations."
            }
          }
        ]
      }
    ]
  };

  return (
    <SemanticLayout>
      <Helmet>
        <title>Complete HubSpot Guide for Private Equity | Portfolio Orchestration Platform | DataOps Group</title>
        <meta name="description" content="Transform HubSpot from CRM to portfolio orchestration platform. How PE firms use HubSpot for value creation, portfolio intelligence, and IRR optimization." />
        <meta name="keywords" content="hubspot private equity, portfolio orchestration, pe value creation, crm private equity, portfolio intelligence, hubspot pe guide" />
        <link rel="canonical" href={`${baseUrl}/guides/complete-hubspot-guide-for-private-equity`} />
        
        {/* Enhanced Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Complete HubSpot Guide for Private Equity | Portfolio Orchestration Platform" />
        <meta property="og:description" content="Transform HubSpot from CRM to portfolio orchestration platform. How PE firms use HubSpot for value creation and IRR optimization." />
        <meta property="og:url" content={`${baseUrl}/guides/complete-hubspot-guide-for-private-equity`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="DataOps Group" />
        <meta property="article:published_time" content="2025-01-08T00:00:00+00:00" />
        <meta property="article:modified_time" content="2025-01-08T00:00:00+00:00" />
        <meta property="article:author" content="Geoff Tucker" />
        <meta property="article:section" content="HubSpot Guides" />
        <meta property="article:tag" content="HubSpot" />
        <meta property="article:tag" content="Private Equity" />
        <meta property="article:tag" content="Portfolio Management" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Complete HubSpot Guide for Private Equity | Portfolio Orchestration Platform" />
        <meta name="twitter:description" content="Transform HubSpot from CRM to portfolio orchestration platform. How PE firms use HubSpot for value creation and IRR optimization." />
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
        { name: "Complete HubSpot Guide for Private Equity", url: "/guides/complete-hubspot-guide-for-private-equity" }
      ]} />

      <main className="bg-white">
        <CompleteHubSpotGuideHero />
        
        {/* Main Content Layout */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Sidebar - 1/3 column */}
                <div className="lg:col-span-1">
                  {/* Further Resources Section */}
                  <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Further Resources</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">HubSpot ROI Calculator for Private Equity</h3>
                        <p className="text-sm text-gray-600">Calculate the financial impact of HubSpot implementation across your portfolio</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">PE-Optimized HubSpot Implementation Roadmap</h3>
                        <p className="text-sm text-gray-600">Step-by-step implementation guide tailored for private equity requirements</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">HubSpot vs Competitors: The PE Decision Framework</h3>
                        <p className="text-sm text-gray-600">Comprehensive comparison framework for PE firms evaluating CRM platforms</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Portfolio Value Creation Case Studies</h3>
                        <p className="text-sm text-gray-600">Real examples of PE firms achieving measurable ROI through strategic HubSpot deployment</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Main Content - 2/3 column */}
                <div className="lg:col-span-2">
                  <CompleteHubSpotGuideContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SemanticLayout>
  );
};

export default CompleteHubSpotGuidePage;
