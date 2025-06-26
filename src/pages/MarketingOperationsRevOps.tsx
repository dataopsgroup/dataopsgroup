
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';
import MarketingOperationsRevOpsHero from '@/components/services/MarketingOperationsRevOpsHero';
import MarketingOperationsRevOpsContent from '@/components/services/MarketingOperationsRevOpsContent';
import MarketingOperationsRevOpsBenefits from '@/components/services/MarketingOperationsRevOpsBenefits';
import RelatedServices from '@/components/services/RelatedServices';
import CTABanner from '@/components/CTABanner';
import MarketingOperationsRevOpsSchema from '@/components/services/MarketingOperationsRevOpsSchema';

const MarketingOperationsRevOps = () => {
  return (
    <SemanticLayout>
      <MetaHead
        title="Marketing Operations & RevOps | DataOps Group"
        description="Transform your revenue operations with expert marketing automation, data integration, and performance optimization. Maximize ROI through streamlined processes and analytics."
        keywords="marketing operations, revenue operations, portfolio growth, systematic marketing processes, advanced analytics, portfolio consulting"
        canonicalPath="/services/marketing-operations-revops"
        ogType="website"
        ogTitle="Marketing Operations & RevOps | DataOps Group"
        ogDescription="Transform your revenue operations with expert marketing automation, data integration, and performance optimization. Maximize ROI through streamlined processes and analytics."
      />
      
      <MarketingOperationsRevOpsSchema />
      
      <MarketingOperationsRevOpsHero />

      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="py-16 lg:py-24 no-image-hover-effect">
            <MarketingOperationsRevOpsContent />
          </div>
        </div>
      </div>
      
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="py-16 lg:py-24">
            <MarketingOperationsRevOpsBenefits />
          </div>
        </div>
      </div>
      
      <div className="bg-white">
        <RelatedServices 
          currentService="marketing-operations-revops"
          title="Explore Our Other Services"
          description="Discover how our comprehensive service offerings can support your business transformation"
        />
      </div>
      
      <CTABanner />
    </SemanticLayout>
  );
};

export default MarketingOperationsRevOps;
