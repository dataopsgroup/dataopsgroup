import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';
import DataOpsImplementationPageHeader from '@/components/services/dataops-implementation/DataOpsImplementationPageHeader';
import DataOpsImplementationOverview from '@/components/services/dataops-implementation/DataOpsImplementationOverview';
import DataOpsImplementationDashboardGrid from '@/components/services/dataops-implementation/DataOpsImplementationDashboardGrid';
import DataOpsImplementationApproach from '@/components/services/dataops-implementation/DataOpsImplementationApproach';
import DataOpsImplementationChallenges from '@/components/services/dataops-implementation/DataOpsImplementationChallenges';
import DataOpsImplementationCTA from '@/components/services/dataops-implementation/DataOpsImplementationCTA';
import ServiceSchemaMarkup from '@/components/services/ServiceSchemaMarkup';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

/*
 * DESIGN PRESERVATION NOTICE:
 * This DataOps Implementation page design uses the following exact structure and should NOT be changed without explicit instruction:
 * 1. DataOpsImplementationPageHeader - Main title and description
 * 2. DataOpsImplementationOverview - Service overview content
 * 3. DataOpsImplementationDashboardGrid - Benefits grid with images (9 cards in 3-column layout)
 * 4. DataOpsImplementationApproach - Methodology section
 * 5. DataOpsImplementationChallenges - Common challenges section
 * 6. DataOpsImplementationCTA - Call-to-action section
 * 
 * This design was specifically created to match the Analytics & BI page structure and confirmed by the user.
 * Do not modify the component order, layout, or replace components without explicit user instruction.
 */

const DataOpsImplementation = () => {
  const serviceTitle = "DataOps Implementation Services - Portfolio Operations Scaling | DataOps Group";
  const serviceDescription = "Scale marketing operations across your portfolio with streamlined DataOps implementation. Standardize processes, automate workflows, and drive consistent performance across all portfolio companies.";
  const breadcrumbItems = [{
    name: "Home",
    url: "/"
  }, {
    name: "Services",
    url: "/services"
  }, {
    name: "DataOps Implementation",
    url: "/services/dataops-implementation"
  }];
  return <SemanticLayout>
      <MetaHead title={serviceTitle} description={serviceDescription} keywords="DataOps implementation, portfolio operations, marketing operations scaling, process standardization, workflow automation, portfolio company optimization, system integration, HubSpot implementation" canonicalPath="/services/dataops-implementation" ogTitle={serviceTitle} ogDescription={serviceDescription} ogType="website" />
      
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <ServiceSchemaMarkup serviceTitle="DataOps Implementation Services" serviceDescription={serviceDescription} serviceId="dataops-implementation" isHubSpotTraining={false} />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <DataOpsImplementationPageHeader />
            <DataOpsImplementationOverview />
          </div>
        </div>
        
        {/* Benefits grid section - full width for proper 3-column layout */}
        <DataOpsImplementationDashboardGrid />
        
        <div className="container mx-auto px-0">
          <div className="max-w-4xl mx-auto">
            <DataOpsImplementationApproach />
            <DataOpsImplementationChallenges />
            <DataOpsImplementationCTA />
          </div>
        </div>
      </div>
    </SemanticLayout>;
};
export default DataOpsImplementation;