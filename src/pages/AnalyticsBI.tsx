
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
        title="Analytics & BI Services | DataOps Group"
        description="Transform data into actionable insights with advanced analytics and business intelligence solutions."
        keywords="HubSpot analytics, business intelligence, data visualization, portfolio tracking, predictive modeling, advanced analytics, performance tracking"
        canonicalPath="/services/analytics-bi"
        ogType="website"
        ogTitle="Analytics & BI Services | DataOps Group"
        ogDescription="Transform data into actionable insights with advanced analytics and business intelligence solutions."
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
