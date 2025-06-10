
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import CTABanner from '@/components/CTABanner';
import DataOpsImplementationHero from '@/components/services/DataOpsImplementationHero';
import DataOpsImplementationContent from '@/components/services/DataOpsImplementationContent';
import DataOpsImplementationBenefits from '@/components/services/DataOpsImplementationBenefits';
import DataOpsImplementationSchema from '@/components/services/DataOpsImplementationSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const DataOpsImplementation = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  return (
    <>
      <Helmet>
        <title>HubSpot DataOps Implementation & Integration | Scalable Marketing Operations | DataOps Group</title>
        <meta name="description" content="Implement scalable HubSpot DataOps across your portfolio companies. Custom integrations, automated workflows, and standardized data operations that drive efficiency and growth." />
        <meta name="keywords" content="HubSpot integration, DataOps implementation, marketing automation, HubSpot customization, API integration, workflow automation, data migration, portfolio operations, marketing ops" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="DataOps Group" />
        <link rel="canonical" href={`${baseUrl}/services/dataops-implementation`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HubSpot DataOps Implementation for Portfolio Companies" />
        <meta property="og:description" content="Scale marketing operations across your portfolio with standardized HubSpot implementations, custom integrations, and automated data workflows." />
        <meta property="og:url" content={`${baseUrl}/services/dataops-implementation`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/2fc3d3e7-168d-4f40-b0c2-cc1e9605353e.png`} />
        <meta property="og:image:alt" content="DataOps Implementation and Integration Services" />
        <meta property="og:site_name" content="DataOps Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HubSpot DataOps Implementation & Integration" />
        <meta name="twitter:description" content="Scalable HubSpot implementations with custom integrations and automated workflows for portfolio companies." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/2fc3d3e7-168d-4f40-b0c2-cc1e9605353e.png`} />
        <meta name="twitter:site" content="@dataops_group" />
        
        {/* Additional SEO tags */}
        <meta name="article:section" content="Implementation Services" />
        <meta name="article:tag" content="HubSpot Implementation" />
        <meta name="article:tag" content="DataOps" />
        <meta name="article:tag" content="Marketing Automation" />
      </Helmet>
      
      <DataOpsImplementationSchema />
      <ServiceSchema 
        name="DataOps Implementation for HubSpot" 
        description="Comprehensive HubSpot DataOps implementation services that create scalable, standardized marketing operations across portfolio companies with custom integrations and automated workflows."
        url={`${baseUrl}/services/dataops-implementation`}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "DataOps Implementation", url: "/services/dataops-implementation" }
        ]} 
      />
      
      <SemanticLayout>
        <DataOpsImplementationHero />

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-8">
                <DataOpsImplementationContent />
              </div>
              
              <div>
                <DataOpsImplementationBenefits />
              </div>
            </div>
          </div>
        </section>
        
        <CTABanner />
      </SemanticLayout>
    </>
  );
};

export default DataOpsImplementation;
