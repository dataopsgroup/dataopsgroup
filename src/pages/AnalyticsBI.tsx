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
          {/* Page Header - light text on dark background */}
          <div className="mb-12 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Analytics & BI Services
            </h1>
            
            <p className="text-lg text-gray-300 max-w-3xl">
              Transform your raw data into actionable insights with our advanced analytics 
              and visualization services that drive smarter business decisions.
            </p>
          </div>
          
          {/* Data Visualization Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Data Visualization & Dashboarding
            </h2>
            
            <p className="text-gray-600 mb-6">
              Transform complex data into intuitive, interactive visualizations 
              that make insights accessible to all stakeholders.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span className="text-gray-700">Custom dashboard development tailored to your specific KPIs and metrics</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span className="text-gray-700">Interactive data visualizations that allow for exploration and deeper analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span className="text-gray-700">Executive dashboards for high-level business performance monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span className="text-gray-700">Operational dashboards for day-to-day decision making</span>
              </li>
            </ul>
          </div>
          
          {/* Advanced Analytics Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Advanced Analytics & Modeling
            </h2>
            
            <p className="text-gray-600 mb-6">
              Leverage sophisticated analytical techniques to uncover hidden patterns, 
              predict future outcomes, and optimize business processes.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span className="text-gray-700">Predictive analytics to forecast trends and anticipate market changes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span className="text-gray-700">Segmentation analysis to better understand your customers and their behaviors</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span className="text-gray-700">Statistical modeling for hypothesis testing and experimentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span className="text-gray-700">Optimization algorithms to maximize efficiency and resource allocation</span>
              </li>
            </ul>
          </div>
          
          {/* Business Intelligence Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Business Intelligence Strategy
            </h2>
            
            <p className="text-gray-600 mb-6">
              Develop a comprehensive BI strategy that aligns with your business objectives 
              and provides a roadmap for data-driven decision making.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span className="text-gray-700">BI maturity assessment and roadmap development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span className="text-gray-700">KPI and metrics definition aligned with business goals</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span className="text-gray-700">Data literacy and adoption programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span className="text-gray-700">Self-service BI enablement for business users</span>
              </li>
            </ul>
          </div>
          
          {/* HubSpot Analytics Integration Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              HubSpot Analytics Integration
            </h2>
            
            <p className="text-gray-600 mb-6">
              Maximize the value of your HubSpot data with specialized analytics 
              that connect marketing activities to business outcomes.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span className="text-gray-700">HubSpot data extraction and transformation for advanced analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span className="text-gray-700">Custom HubSpot reporting and dashboard development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span className="text-gray-700">Marketing attribution modeling and analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span className="text-gray-700">Integration of HubSpot data with other business systems</span>
              </li>
            </ul>
          </div>
          
          {/* Call to Action Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Ready to Transform Your Data Operations?
            </h2>
            
            <p className="mb-6">
              Contact us today to schedule a consultation and learn how our analytics & business 
              intelligence services can help you achieve your business goals.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/contact" 
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              
              <a 
                href="/book-assessment" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Book Free Assessment
              </a>
            </div>
          </div>
        </div>
      </SemanticLayout>
    </>
  );
};

export default AnalyticsBIPage;
