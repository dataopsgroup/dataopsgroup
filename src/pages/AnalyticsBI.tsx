import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import ServicesPageWrapper from '@/components/services/ServicesPageWrapper';
// import ServiceSection from '@/components/services/ServiceSection';
import MetaHead from '@/components/seo/MetaHead';

const AnalyticsBIPage = () => {
  return (
    <>
      <MetaHead
        title="Analytics & Business Intelligence Services | DataOps Group"
        description="Transform your data into actionable insights with our advanced analytics and visualization services."
        canonicalPath="/services/analytics-bi"
      />
      
      <SemanticLayout>
        <ServicesPageWrapper
          title="Analytics & BI Services"
          description="Transform your raw data into actionable insights with our advanced analytics and visualization services that drive smarter business decisions."
        >
          {/* Comment out the entire ServiceSection block 
          <ServiceSection
            title="Data Visualization & Dashboarding"
            description="Transform complex data into intuitive, interactive visualizations that make insights accessible to all stakeholders."
          >
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Custom dashboard development tailored to your specific KPIs and metrics</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Interactive data visualizations that allow for exploration and deeper analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Executive dashboards for high-level business performance monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Operational dashboards for day-to-day decision making</span>
              </li>
            </ul>
          </ServiceSection>
          */}
          
          {/* Additional service sections with the same pattern */}
          {/* ... */}
        </ServicesPageWrapper>
      </SemanticLayout>
    </>
  );
};

export default AnalyticsBIPage;
