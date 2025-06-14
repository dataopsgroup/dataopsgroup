
import React from 'react';

const AnalyticsBIPageHeader = () => {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-rubik">
        Analytics & Business Intelligence Services
      </h1>
      <p className="text-xl text-gray-600 mb-8 font-roboto leading-relaxed">
        Transform your HubSpot data into actionable insights with custom analytics solutions that drive business growth and informed decision-making across your entire organization.
      </p>
      <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500">
        <span className="bg-gray-100 px-3 py-1 rounded-full">Custom Dashboards</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full">Data Visualization</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full">Performance Tracking</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full">Business Intelligence</span>
      </div>
    </header>
  );
};

export default AnalyticsBIPageHeader;
