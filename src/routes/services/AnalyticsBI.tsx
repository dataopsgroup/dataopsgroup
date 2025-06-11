
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';
import AnalyticsBIPageHeader from '@/components/services/analytics-bi/AnalyticsBIPageHeader';
import AnalyticsBIOverview from '@/components/services/analytics-bi/AnalyticsBIOverview';
import AnalyticsBIBenefitsGrid from '@/components/services/analytics-bi/AnalyticsBIBenefitsGrid';
import AnalyticsBIApproach from '@/components/services/analytics-bi/AnalyticsBIApproach';
import AnalyticsBIChallenges from '@/components/services/analytics-bi/AnalyticsBIChallenges';
import AnalyticsBICTA from '@/components/services/analytics-bi/AnalyticsBICTA';

const AnalyticsBI = () => {
  return (
    <SemanticLayout>
      <MetaHead
        title="Analytics & BI Services - Data-Driven Business Intelligence Solutions | DataOps Group"
        description="Transform your data into actionable insights with our analytics and business intelligence services. Custom dashboards, reporting, and data visualization solutions."
        keywords="analytics services, business intelligence, data visualization, custom dashboards, reporting solutions, data analytics consulting"
        canonicalPath="/services/analytics-bi"
        ogTitle="Analytics & BI Services - Business Intelligence Solutions"
        ogDescription="Expert analytics and BI services to transform your data into actionable insights. Custom dashboards, reporting, and data visualization."
      />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnalyticsBIPageHeader />
            <AnalyticsBIOverview />
            <AnalyticsBIBenefitsGrid />
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
