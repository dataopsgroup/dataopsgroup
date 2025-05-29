
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import CTABanner from '@/components/CTABanner';
import AnalyticsBIHero from '@/components/services/AnalyticsBIHero';
import AnalyticsBIContent from '@/components/services/AnalyticsBIContent';
import AnalyticsBIBenefits from '@/components/services/AnalyticsBIBenefits';
import AnalyticsBISchema from '@/components/services/AnalyticsBISchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const AnalyticsBI = () => {
  return (
    <>
      <Helmet>
        <title>Analytics & Business Intelligence | DataOps Group</title>
        <meta name="description" content="Transform your data into actionable insights with expert analytics and business intelligence consulting for HubSpot users." />
      </Helmet>
      
      <AnalyticsBISchema />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Analytics & BI", url: "/services/analytics-bi" }
        ]} 
      />
      
      <SemanticLayout>
        <AnalyticsBIHero />

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-8">
                <AnalyticsBIContent />
              </div>
              
              <div>
                <AnalyticsBIBenefits />
              </div>
            </div>
          </div>
        </section>
        
        <CTABanner />
      </SemanticLayout>
    </>
  );
};

export default AnalyticsBI;
