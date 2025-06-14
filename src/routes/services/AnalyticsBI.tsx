
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';
import AnalyticsBIPageHeader from '@/components/services/analytics-bi/AnalyticsBIPageHeader';
import AnalyticsBIOverview from '@/components/services/analytics-bi/AnalyticsBIOverview';
import AnalyticsBIDashboardGrid from '@/components/services/analytics-bi/AnalyticsBIDashboardGrid';
import AnalyticsBIApproach from '@/components/services/analytics-bi/AnalyticsBIApproach';
import AnalyticsBIChallenges from '@/components/services/analytics-bi/AnalyticsBIChallenges';
import AnalyticsBICTA from '@/components/services/analytics-bi/AnalyticsBICTA';
import ServiceSchemaMarkup from '@/components/services/ServiceSchemaMarkup';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

/*
 * DESIGN PRESERVATION NOTICE:
 * This Analytics & BI page design uses the following exact structure and should NOT be changed without explicit instruction:
 * 1. AnalyticsBIPageHeader - Main title and description
 * 2. AnalyticsBIOverview - Service overview content
 * 3. AnalyticsBIDashboardGrid - Benefits grid with images (9 cards in 3-column layout)
 * 4. AnalyticsBIApproach - Methodology section
 * 5. AnalyticsBIChallenges - Common challenges section
 * 6. AnalyticsBICTA - Call-to-action section
 * 
 * This design was specifically requested and confirmed by the user. Do not modify the component
 * order, layout, or replace components without explicit user instruction.
 */

const AnalyticsBI = () => {
  const serviceTitle = "Analytics & BI Services - HubSpot Data Intelligence | DataOps Group";
  const serviceDescription = "Transform your HubSpot data into actionable business intelligence with custom analytics solutions. Expert dashboard creation, data visualization, and performance insights for data-driven decisions.";

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Analytics & BI", url: "/services/analytics-bi" }
  ];

  return (
    <SemanticLayout>
      <MetaHead
        title={serviceTitle}
        description={serviceDescription}
        keywords="HubSpot analytics, business intelligence, data visualization, custom dashboards, reporting solutions, data analytics consulting, HubSpot reporting, marketing analytics, sales dashboards"
        canonicalPath="/services/analytics-bi"
        ogTitle={serviceTitle}
        ogDescription={serviceDescription}
        ogType="website"
      />
      
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <ServiceSchemaMarkup
        serviceTitle="HubSpot Analytics & Business Intelligence Services"
        serviceDescription={serviceDescription}
        serviceId="analytics-bi"
        isHubSpotTraining={false}
      />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnalyticsBIPageHeader />
            <AnalyticsBIOverview />
          </div>
        </div>
        
        {/* Benefits grid section - full width for proper 3-column layout */}
        <AnalyticsBIDashboardGrid />
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnalyticsBIApproach />
            <AnalyticsBIChallenges />
            <AnalyticsBICTA />
          </div>
        </div>
      </div>
    </SemanticLayout>
  );
};

export default AnalyticsBI;
