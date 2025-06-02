import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import CTABanner from '@/components/CTABanner';
import AnalyticsBIHero from '@/components/services/AnalyticsBIHero';
import AnalyticsBIContent from '@/components/services/AnalyticsBIContent';
import AnalyticsBIBenefits from '@/components/services/AnalyticsBIBenefits';
import AnalyticsBISchema from '@/components/services/AnalyticsBISchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const AnalyticsBI = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  // Define breadcrumbs for schema
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Analytics & BI", url: "/services/analytics-bi" }
  ];

  return (
    <>
      <Helmet>
        <title>Analytics & Business Intelligence | DataOps Group</title>
        <meta name="description" content="Transform your data into actionable insights with expert analytics and business intelligence consulting for HubSpot users." />
        <meta name="keywords" content="analytics, business intelligence, BI, data insights, HubSpot reporting, data analysis, marketing analytics" />
        <link rel="canonical" href={`${baseUrl}/services/analytics-bi`} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Analytics & Business Intelligence | DataOps Group" />
        <meta property="og:description" content="Transform your data into actionable insights with expert analytics and business intelligence consulting for HubSpot users." />
        <meta property="og:url" content={`${baseUrl}/services/analytics-bi`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} /> {/* Using a default image */}
        <meta property="og:site_name" content="DataOps Group" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Analytics & Business Intelligence | DataOps Group" />
        <meta name="twitter:description" content="Transform your data into actionable insights with expert analytics and business intelligence consulting for HubSpot users." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} /> {/* Using a default image */}
        <meta name="twitter:site" content="@dataops_group" />
      </Helmet>
      
      <AnalyticsBISchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema 
        name="Analytics & Business Intelligence"
        description="Transform your data into actionable insights with expert analytics and business intelligence consulting for HubSpot users."
        provider="DataOps Group"
        url={`${baseUrl}/services/analytics-bi`}
        image={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`}
      />
      
      <SemanticLayout>
        <AnalyticsBIHero />

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-8">
                <AnalyticsBIContent />
              </div>
              
              <div>
                <AnalyticsBIBenefits />
              </div>
            </div>
          </div>
        </section>
        
        <CTABanner />
      </SemanticLayout>
    </>
  );
};

export default AnalyticsBI;
