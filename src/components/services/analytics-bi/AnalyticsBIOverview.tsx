
import React from 'react';
import { Link } from 'react-router-dom';

const AnalyticsBIOverview = () => {
  return (
    <section className="mb-16">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-rubik">Turn Your Data Into Your Competitive Advantage</h2>
        
        <div className="prose prose-lg max-w-none font-roboto">
          <p className="text-gray-700 leading-relaxed mb-6">
            Your HubSpot contains a goldmine of customer insights, but without proper analytics and business intelligence, 
            you're flying blind. Our <Link to="/services" className="text-dataops-600 hover:text-dataops-800 font-medium">analytics services</Link> transform 
            raw data into strategic intelligence that drives measurable business growth.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-rubik">What We Deliver</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Executive-level dashboards for strategic decision making</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Real-time performance tracking and alerts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Predictive analytics for forecasting and planning</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Custom reporting solutions tailored to your business</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-rubik">Our Expertise</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">HubSpot Analytics Mastery</h4>
                  <p className="text-gray-600 text-sm">Deep expertise in HubSpot's native reporting capabilities and custom dashboard creation.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Data Integration</h4>
                  <p className="text-gray-600 text-sm">Seamlessly connect HubSpot with your other business systems for unified insights.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Business Intelligence</h4>
                  <p className="text-gray-600 text-sm">Transform complex data into clear, actionable business intelligence for all stakeholders.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 font-medium">
              Ready to unlock the power of your data? Our <Link to="/data-operation-assessment" className="text-dataops-600 hover:text-dataops-800 underline">free assessment</Link> identifies 
              immediate opportunities to improve your analytics and reporting capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsBIOverview;
