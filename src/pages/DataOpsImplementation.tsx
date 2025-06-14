
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';
import DataOpsImplementationHero from '@/components/services/DataOpsImplementationHero';
import DataOpsImplementationContent from '@/components/services/DataOpsImplementationContent';
import DataOpsImplementationBenefits from '@/components/services/DataOpsImplementationBenefits';
import RelatedServices from '@/components/services/RelatedServices';
import CTABanner from '@/components/CTABanner';
import DataOpsImplementationSchema from '@/components/services/DataOpsImplementationSchema';

const DataOpsImplementation = () => {
  return (
    <SemanticLayout>
      <MetaHead
        title="DataOps Implementation for HubSpot | DataOps Group"
        description="Custom HubSpot integration and implementation services to connect systems, optimize data flows, and create seamless operations."
        keywords="HubSpot integration, DataOps implementation, custom integrations, data workflows, system connections, business efficiency, HubSpot consulting"
        canonicalPath="/services/dataops-implementation"
        ogType="website"
        ogTitle="DataOps Implementation for HubSpot | DataOps Group"
        ogDescription="Custom HubSpot integration and implementation services to connect systems, optimize data flows, and create seamless operations."
      />
      
      <DataOpsImplementationSchema />
      
      <DataOpsImplementationHero />
      <DataOpsImplementationContent />
      <DataOpsImplementationBenefits />
      
      <RelatedServices 
        currentService="dataops-implementation"
        title="Explore Our Other Services"
        description="Discover how our comprehensive service offerings can support your business transformation"
      />
      
      <CTABanner />
    </SemanticLayout>
  );
};

export default DataOpsImplementation;
