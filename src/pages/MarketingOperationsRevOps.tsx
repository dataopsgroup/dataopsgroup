
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import CTABanner from '@/components/CTABanner';
import MarketingOperationsRevOpsSchema from '@/components/services/MarketingOperationsRevOpsSchema';
import MarketingOperationsRevOpsHero from '@/components/services/MarketingOperationsRevOpsHero';
import MarketingOperationsRevOpsContent from '@/components/services/MarketingOperationsRevOpsContent';
import MarketingOperationsRevOpsBenefits from '@/components/services/MarketingOperationsRevOpsBenefits';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

const MarketingOperationsRevOps = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Marketing Operations & RevOps", url: "/services/marketing-operations-revops" }
  ];

  return (
    <>
      <Helmet>
        <title>Marketing Operations & RevOps | Portfolio Revenue Optimization | HubSpot RevOps | DataOps Group</title>
        <meta name="description" content="Optimize portfolio company revenue operations with systematic marketing processes. HubSpot RevOps consulting that drives predictable growth and maximizes investment returns across your portfolio." />
        <meta name="keywords" content="marketing operations, revenue operations, RevOps, HubSpot RevOps, portfolio optimization, marketing ROI, sales marketing alignment, revenue growth, operations consulting, marketing automation" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="DataOps Group" />
        <link rel="canonical" href={`${baseUrl}/services/marketing-operations-revops`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Marketing Operations & RevOps for Portfolio Companies" />
        <meta property="og:description" content="Systematic revenue operations that drive predictable growth across portfolio companies. Expert HubSpot RevOps consulting for private equity firms." />
        <meta property="og:url" content={`${baseUrl}/services/marketing-operations-revops`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/ce79f316-f12e-41f6-8d89-81ef607e1ff5.png`} />
        <meta property="og:image:alt" content="Marketing Operations and Revenue Operations Services" />
        <meta property="og:site_name" content="DataOps Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marketing Operations & RevOps Consulting" />
        <meta name="twitter:description" content="Optimize portfolio revenue with systematic marketing operations and HubSpot RevOps strategies that drive predictable growth." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/ce79f316-f12e-41f6-8d89-81ef607e1ff5.png`} />
        <meta name="twitter:site" content="@dataops_group" />
        
        {/* Additional SEO tags */}
        <meta name="article:section" content="Operations Services" />
        <meta name="article:tag" content="Marketing Operations" />
        <meta name="article:tag" content="Revenue Operations" />
        <meta name="article:tag" content="Portfolio Optimization" />
      </Helmet>
      
      <MarketingOperationsRevOpsSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema 
        name="Marketing Operations & Revenue Operations"
        description="Systematic marketing operations and revenue optimization services that drive predictable growth and maximize investment returns across portfolio companies."
        provider="DataOps Group"
        url={`${baseUrl}/services/marketing-operations-revops`}
        image={`${baseUrl}/lovable-uploads/ce79f316-f12e-41f6-8d89-81ef607e1ff5.png`}
      />
      
      <SemanticLayout>
        <MarketingOperationsRevOpsHero />

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-8">
                <MarketingOperationsRevOpsContent />
              </div>
              
              <div>
                <MarketingOperationsRevOpsBenefits />
              </div>
            </div>
          </div>
        </section>
        
        <CTABanner />
      </SemanticLayout>
    </>
  );
};

export default MarketingOperationsRevOps;
