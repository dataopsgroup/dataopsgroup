
import React from 'react';

const CompleteHubSpotGuideSidebar = () => {
  return (
    <div className="lg:col-span-1">
      {/* Further Resources Section */}
      <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Further Resources</h2>
        <div className="space-y-4">
          <div>
            <a href="/hubspot-roi-calculator" className="block group">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-dataops-600 transition-colors">HubSpot ROI Calculator for Private Equity</h3>
              <p className="text-sm text-gray-600">Calculate the financial impact of HubSpot implementation across your portfolio</p>
            </a>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">PE-Optimized HubSpot Implementation Roadmap</h3>
            <p className="text-sm text-gray-600">Step-by-step implementation guide tailored for private equity requirements</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">HubSpot vs Competitors: The PE Decision Framework</h3>
            <p className="text-sm text-gray-600">Comprehensive comparison framework for PE firms evaluating CRM platforms</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Portfolio Value Creation Case Studies</h3>
            <p className="text-sm text-gray-600">Real examples of PE firms achieving measurable ROI through strategic HubSpot deployment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteHubSpotGuideSidebar;
