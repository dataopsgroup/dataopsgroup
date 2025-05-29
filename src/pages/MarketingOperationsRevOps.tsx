
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import CTABanner from '@/components/CTABanner';
import MarketingOperationsRevOpsSchema from '@/components/services/MarketingOperationsRevOpsSchema';
import MarketingOperationsRevOpsHero from '@/components/services/MarketingOperationsRevOpsHero';
import MarketingOperationsRevOpsContent from '@/components/services/MarketingOperationsRevOpsContent';
import MarketingOperationsRevOpsBenefits from '@/components/services/MarketingOperationsRevOpsBenefits';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const MarketingOperationsRevOps = () => {
  return (
    <>
      <Helmet>
        <title>Marketing Operations & RevOps | DataOps Group</title>
        <meta name="description" content="Streamline your marketing operations and revenue operations with expert HubSpot consulting services for improved ROI and team alignment." />
      </Helmet>
      
      <MarketingOperationsRevOpsSchema />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Marketing Operations & RevOps", url: "/services/marketing-operations-revops" }
        ]} 
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
