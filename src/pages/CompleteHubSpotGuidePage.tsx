
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import CompleteHubSpotGuideHero from '@/components/pillar-content/complete-hubspot-guide/CompleteHubSpotGuideHero';
import CompleteHubSpotGuideContent from '@/components/pillar-content/complete-hubspot-guide/CompleteHubSpotGuideContent';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ArticleSchema from '@/components/seo/ArticleSchema';

const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

const CompleteHubSpotGuidePage = () => {
  return (
    <SemanticLayout>
      <Helmet>
        <title>Complete HubSpot Guide for Private Equity | Portfolio Orchestration Platform | DataOps Group</title>
        <meta name="description" content="Transform HubSpot from CRM to portfolio orchestration platform. How PE firms use HubSpot for value creation, portfolio intelligence, and IRR optimization." />
        <meta name="keywords" content="hubspot private equity, portfolio orchestration, pe value creation, crm private equity, portfolio intelligence, hubspot pe guide" />
        <link rel="canonical" href={`${baseUrl}/guides/complete-hubspot-guide-for-private-equity`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Complete HubSpot Guide for Private Equity | Portfolio Orchestration Platform" />
        <meta property="og:description" content="Transform HubSpot from CRM to portfolio orchestration platform. How PE firms use HubSpot for value creation and IRR optimization." />
        <meta property="og:url" content={`${baseUrl}/guides/complete-hubspot-guide-for-private-equity`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta property="og:site_name" content="DataOps Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Complete HubSpot Guide for Private Equity | Portfolio Orchestration Platform" />
        <meta name="twitter:description" content="Transform HubSpot from CRM to portfolio orchestration platform. How PE firms use HubSpot for value creation and IRR optimization." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta name="twitter:site" content="@dataops_group" />
      </Helmet>
      
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Guides", url: "/guides" },
        { name: "Complete HubSpot Guide for Private Equity", url: "/guides/complete-hubspot-guide-for-private-equity" }
      ]} />
      
      <ArticleSchema 
        title="The Complete HubSpot Guide for Private Equity: Beyond CRM to Portfolio Orchestration"
        description="How smart PE firms use HubSpot not just as a customer database, but as the central nervous system that drives portfolio value creation and IRR optimization"
        authorName="Geoff Tucker"
        publishDate="2025-01-08"
        url={`${baseUrl}/guides/complete-hubspot-guide-for-private-equity`}
        image={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`}
      />

      <main className="bg-white">
        <CompleteHubSpotGuideHero />
        <CompleteHubSpotGuideContent />
        
        {/* Further Resources Section - Placeholder */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Further Resources</h2>
              <div id="further-resources">
                {/* Content will be added in upcoming prompts */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </SemanticLayout>
  );
};

export default CompleteHubSpotGuidePage;
