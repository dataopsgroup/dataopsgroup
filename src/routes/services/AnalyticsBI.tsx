
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';
import BreadcrumbNavigation from '@/components/seo/BreadcrumbNavigation';
import AnalyticsBIHero from '@/components/services/AnalyticsBIHero';
import AnalyticsBIOverview from '@/components/services/analytics-bi/AnalyticsBIOverview';
import AnalyticsBIDashboardGrid from '@/components/services/analytics-bi/AnalyticsBIDashboardGrid';
import AnalyticsBIApproach from '@/components/services/analytics-bi/AnalyticsBIApproach';
import AnalyticsBIChallenges from '@/components/services/analytics-bi/AnalyticsBIChallenges';
import AnalyticsBICTA from '@/components/services/analytics-bi/AnalyticsBICTA';
import ServiceSchemaMarkup from '@/components/services/ServiceSchemaMarkup';
import AnalyticsBIFAQSchema from '@/components/services/analytics-bi/AnalyticsBIFAQSchema';
import RelatedServices from '@/components/services/RelatedServices';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const AnalyticsBI = () => {
  const serviceTitle = "Analytics & BI Services - Transform Data into Business Insights | DataOps Group";
  const serviceDescription = "Expert analytics and business intelligence services to transform your data into actionable insights. Custom dashboards, reporting automation, and data-driven decision making.";

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Analytics & BI', url: '/services/analytics-bi', current: true }
  ];

  return (
    <SemanticLayout>
      <MetaHead
        title={serviceTitle}
        description={serviceDescription}
        keywords="analytics services, business intelligence, data visualization, custom dashboards, reporting solutions, data analytics consulting, HubSpot analytics, data-driven decisions"
        canonicalPath="/services/analytics-bi"
        ogTitle={serviceTitle}
        ogDescription={serviceDescription}
      />
      
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <ServiceSchemaMarkup
        serviceTitle="Analytics & Business Intelligence Services"
        serviceDescription={serviceDescription}
        serviceId="analytics-bi"
        isHubSpotTraining={false}
      />
      
      <AnalyticsBIFAQSchema />

      <AnalyticsBIHero />

      <div className="pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BreadcrumbNavigation items={breadcrumbItems} className="mb-6" />
            
            <AnalyticsBIOverview />
            <AnalyticsBIDashboardGrid />
            <AnalyticsBIApproach />
            <AnalyticsBIChallenges />
            <AnalyticsBICTA />
            
            <RelatedServices 
              currentService="analytics-bi"
              title="Explore Our Other Services"
              description="Discover how our comprehensive service offerings can support your business transformation"
            />
          </div>
        </div>
      </div>
    </SemanticLayout>
  );
};

export default AnalyticsBI;
