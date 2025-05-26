import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import ServicesPageWrapper from '@/components/services/ServicesPageWrapper';
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
        {/* Basic content with clear visibility styling */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Analytics & BI Services
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mb-8">
            Transform your raw data into actionable insights with our advanced analytics 
            and visualization services that drive smarter business decisions.
          </p>
          
          {/* Data Visualization Section */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Data Visualization & Dashboarding
            </h2>
            
            <p className="text-gray-600 mb-6">
              Transform complex data into intuitive, interactive visualizations 
              that make insights accessible to all stakeholders.
            </p>
            
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
          </div>
          
          {/* We can add more sections here later */}
        </div>
      </SemanticLayout>
    </>
  );
};

export default AnalyticsBIPage;
