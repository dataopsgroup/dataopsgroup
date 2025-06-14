
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
        description="Optimize portfolio revenue operations with systematic marketing processes, advanced analytics, and automation."
        keywords="marketing operations, revenue operations, portfolio growth, systematic marketing processes, advanced analytics, portfolio consulting"
        canonicalPath="/services/marketing-operations-revops"
        ogType="website"
        ogTitle="Marketing Operations & RevOps | DataOps Group"
        ogDescription="Optimize portfolio revenue operations with systematic marketing processes, advanced analytics, and automation."
      />
      
      <MarketingOperationsRevOpsSchema />
      
      <MarketingOperationsRevOpsHero />
      <MarketingOperationsRevOpsContent />
      <MarketingOperationsRevOpsBenefits />
      
      <RelatedServices 
        currentService="marketing-operations-revops"
        title="Explore Our Other Services"
        description="Discover how our comprehensive service offerings can support your business transformation"
      />
      
      <CTABanner />
    </SemanticLayout>
  );
};

export default MarketingOperationsRevOps;
