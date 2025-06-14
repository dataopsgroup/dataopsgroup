
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';
import AnalyticsBIHero from '@/components/services/AnalyticsBIHero';
import AnalyticsBIContent from '@/components/services/AnalyticsBIContent';
import AnalyticsBIBenefits from '@/components/services/AnalyticsBIBenefits';
import RelatedServices from '@/components/services/RelatedServices';
import CTABanner from '@/components/CTABanner';
import AnalyticsBISchema from '@/components/services/AnalyticsBISchema';

const AnalyticsBI = () => {
  return (
    <SemanticLayout>
      <MetaHead
        title="HubSpot Analytics & Business Intelligence | DataOps Group"
        description="Transform HubSpot data into actionable insights with advanced analytics and customized dashboards for data-driven decisions."
        keywords="HubSpot analytics, business intelligence, data visualization, portfolio tracking, predictive modeling, advanced analytics, performance tracking"
        canonicalPath="/services/analytics-bi"
        ogType="website"
        ogTitle="HubSpot Analytics & Business Intelligence | DataOps Group"
        ogDescription="Transform HubSpot data into actionable insights with advanced analytics and customized dashboards for data-driven decisions."
      />
      
      <AnalyticsBISchema />
      
      <AnalyticsBIHero />
      <AnalyticsBIContent />
      <AnalyticsBIBenefits />
      
      <RelatedServices 
        currentService="analytics-bi"
        title="Explore Our Other Services"
        description="Discover how our comprehensive service offerings can support your business transformation"
      />
      
      <CTABanner />
    </SemanticLayout>
  );
};

export default AnalyticsBI;
