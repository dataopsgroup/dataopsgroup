
import React from 'react';

const MarketingOperationsRevOpsContent = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">How We Can Help</h2>
        <p className="text-gray-700 mb-4">
          Our Marketing Operations & RevOps services help businesses optimize their marketing technology 
          stack, streamline processes, and enable data-driven decision making. We specialize in HubSpot 
          implementation and optimization, as well as integrating your marketing platforms with sales 
          and customer success systems for a unified approach to revenue generation.
        </p>
        <p className="text-gray-700 mb-4">
          By leveraging our expertise in marketing technology, workflow automation, and data integration, 
          we help you break down silos between departments, improve collaboration, and create a seamless 
          customer journey from awareness to advocacy.
        </p>
      </div>
      
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Approach</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-dataops-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">1. Diagnose</h3>
            <p className="text-gray-700">We audit your current marketing and sales operations, 
            technology stack, and processes to identify opportunities for improvement.</p>
          </div>
          <div className="bg-dataops-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">2. Strategize</h3>
            <p className="text-gray-700">We develop a customized RevOps roadmap aligned with your 
            business goals, focusing on people, process, and technology improvements.</p>
          </div>
          <div className="bg-dataops-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">3. Implement</h3>
            <p className="text-gray-700">Our team configures systems, integrates tools, and 
            optimizes workflows to create a cohesive revenue operations framework.</p>
          </div>
          <div className="bg-dataops-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">4. Measure & Refine</h3>
            <p className="text-gray-700">We establish KPIs and reporting dashboards to monitor 
            performance and continuously improve your RevOps ecosystem.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketingOperationsRevOpsContent;
