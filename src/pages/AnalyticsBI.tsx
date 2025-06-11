
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import CTABanner from '@/components/CTABanner';
import AnalyticsBIHero from '@/components/services/AnalyticsBIHero';
import AnalyticsBIContent from '@/components/services/AnalyticsBIContent';
import AnalyticsBIBenefits from '@/components/services/AnalyticsBIBenefits';
import AnalyticsBISchema from '@/components/services/AnalyticsBISchema';
import RelatedServices from '@/components/services/RelatedServices';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const AnalyticsBI = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Analytics & BI", url: "/services/analytics-bi" }
  ];

  return (
    <>
      <Helmet>
        <title>HubSpot Analytics & Business Intelligence | Portfolio Performance Dashboards | DataOps Group</title>
        <meta name="description" content="Transform HubSpot data into investment intelligence with advanced analytics dashboards for PE firms. Portfolio performance tracking, predictive modeling, and data-driven investment decisions." />
        <meta name="keywords" content="HubSpot analytics, business intelligence, portfolio analytics, PE dashboards, investment analytics, HubSpot BI, data visualization, portfolio performance, predictive analytics, marketing ROI analysis" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="DataOps Group" />
        <link rel="canonical" href={`${baseUrl}/services/analytics-bi`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HubSpot Analytics & Business Intelligence for Private Equity" />
        <meta property="og:description" content="Advanced analytics and BI services that transform your portfolio companies' HubSpot data into actionable investment intelligence and performance insights." />
        <meta property="og:url" content={`${baseUrl}/services/analytics-bi`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/6ac1df13-c480-411a-8013-fc5fd12bb749.png`} />
        <meta property="og:image:alt" content="HubSpot Analytics and Business Intelligence Dashboard" />
        <meta property="og:site_name" content="DataOps Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HubSpot Analytics & BI for Private Equity Firms" />
        <meta name="twitter:description" content="Transform portfolio company data into investment intelligence with advanced HubSpot analytics and custom BI dashboards." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/6ac1df13-c480-411a-8013-fc5fd12bb749.png`} />
        <meta name="twitter:site" content="@dataops_group" />
        
        {/* Additional SEO tags */}
        <meta name="article:section" content="Analytics Services" />
        <meta name="article:tag" content="HubSpot Analytics" />
        <meta name="article:tag" content="Business Intelligence" />
        <meta name="article:tag" content="Portfolio Analytics" />
      </Helmet>
      
      <AnalyticsBISchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema 
        name="HubSpot Analytics & Business Intelligence"
        description="Transform your portfolio companies' HubSpot data into actionable investment intelligence with advanced analytics and custom BI dashboards designed for private equity firms."
        provider="DataOps Group"
        url={`${baseUrl}/services/analytics-bi`}
        image={`${baseUrl}/lovable-uploads/6ac1df13-c480-411a-8013-fc5fd12bb749.png`}
      />
      
      <SemanticLayout>
        <AnalyticsBIHero />

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
        
        <RelatedServices currentService="analytics-bi" />
        
        <CTABanner />
      </SemanticLayout>
    </>
  );
};

export default AnalyticsBI;
