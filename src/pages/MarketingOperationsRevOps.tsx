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

  // Define breadcrumbs for schema
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Marketing Operations & RevOps", url: "/services/marketing-operations-revops" }
  ];

  return (
    <>
      <Helmet>
        <title>Marketing Operations & RevOps | DataOps Group</title>
        <meta name="description" content="Streamline your marketing operations and revenue operations with expert HubSpot consulting services for improved ROI and team alignment." />
        <meta name="keywords" content="marketing operations, revops, revenue operations, HubSpot consulting, marketing ROI, sales marketing alignment, HubSpot optimization" />
        <link rel="canonical" href={`${baseUrl}/services/marketing-operations-revops`} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Marketing Operations & RevOps | DataOps Group" />
        <meta property="og:description" content="Streamline your marketing operations and revenue operations with expert HubSpot consulting services for improved ROI and team alignment." />
        <meta property="og:url" content={`${baseUrl}/services/marketing-operations-revops`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} /> {/* Using a default image */}
        <meta property="og:site_name" content="DataOps Group" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marketing Operations & RevOps | DataOps Group" />
        <meta name="twitter:description" content="Streamline your marketing operations and revenue operations with expert HubSpot consulting services for improved ROI and team alignment." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} /> {/* Using a default image */}
        <meta name="twitter:site" content="@dataops_group" />
      </Helmet>
      
      <MarketingOperationsRevOpsSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema 
        name="Marketing Operations & RevOps"
        description="Streamline your marketing operations and revenue operations with expert HubSpot consulting services for improved ROI and team alignment."
        provider="DataOps Group"
        url={`${baseUrl}/services/marketing-operations-revops`}
        image={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`}
      />
      
      <SemanticLayout>
        <MarketingOperationsRevOpsHero />

        {/* Content Section */}
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
