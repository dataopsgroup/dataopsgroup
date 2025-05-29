
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
  return (
    <>
      <Helmet>
        <title>DataOps Implementation for HubSpot | DataOps Group</title>
        <meta name="description" content="Professional DataOps implementation services for HubSpot. Clean data, optimized workflows, and maximum value from your CRM investment." />
      </Helmet>
      
      <DataOpsImplementationSchema />
      <ServiceSchema 
        name="DataOps Implementation for HubSpot" 
        description="Comprehensive DataOps implementation services for HubSpot users, ensuring clean data, optimized workflows, and maximum value from your HubSpot investment."
        url={`${window.location.origin}/services/dataops-implementation`}
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

        {/* Content Section */}
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
