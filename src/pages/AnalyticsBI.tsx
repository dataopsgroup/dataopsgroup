import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Analytics & BI Services
            </h1>
            
            <p className="text-lg text-gray-600 max-w-3xl">
              Transform your raw data into actionable insights with our advanced analytics 
              and visualization services that drive smarter business decisions.
            </p>
          </div>
          
          {/* Data Visualization Section */}
          <div className="bg-white rounded-lg shadow p-6 mb-10">
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
          
          {/* Advanced Analytics Section */}
          <div className="bg-white rounded-lg shadow p-6 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Advanced Analytics & Modeling
            </h2>
            
            <p className="text-gray-600 mb-6">
              Leverage sophisticated analytical techniques to uncover hidden patterns, 
              predict future outcomes, and optimize business processes.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Predictive analytics to forecast trends and anticipate market changes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Segmentation analysis to better understand your customers and their behaviors</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Statistical modeling for hypothesis testing and experimentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Optimization algorithms to maximize efficiency and resource allocation</span>
              </li>
            </ul>
          </div>
          
          {/* Business Intelligence Section */}
          <div className="bg-white rounded-lg shadow p-6 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Business Intelligence Strategy
            </h2>
            
            <p className="text-gray-600 mb-6">
              Develop a comprehensive BI strategy that aligns with your business objectives 
              and provides a roadmap for data-driven decision making.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>BI maturity assessment and roadmap development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>KPI and metrics definition aligned with business goals</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Data literacy and adoption programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Self-service BI enablement for business users</span>
              </li>
            </ul>
          </div>
        </div>
      </SemanticLayout>
    </>
  );
};

export default AnalyticsBIPage;
