import React from 'react';
import { Calculator, BookOpen, Route, Scale, TrendingUp } from 'lucide-react';

const PEImplementationRoadmapSidebar = () => {
  return (
    <div className="lg:col-span-1">
      {/* Further Resources Section */}
      <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Further Resources</h2>
        <div className="space-y-4">
          <div>
            <a href="/guides/complete-hubspot-guide-for-private-equity" className="block group">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-dataops-600 transition-colors flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-dataops-600" />
                Complete HubSpot Guide for Private Equity
              </h3>
              <p className="text-sm text-gray-600">Comprehensive guide to transforming HubSpot into a portfolio orchestration platform</p>
            </a>
          </div>
          
          <div>
            <a href="/hubspot-roi-calculator" className="block group">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-dataops-600 transition-colors flex items-center gap-2">
                <Calculator className="h-5 w-5 text-dataops-600" />
                HubSpot ROI Calculator for Private Equity
              </h3>
              <p className="text-sm text-gray-600">Calculate the financial impact of HubSpot implementation across your portfolio</p>
            </a>
          </div>
          
          <div>
            <a href="/guides/pe-hubspot-implementation-roadmap" className="block group">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-dataops-600 transition-colors flex items-center gap-2">
                <Route className="h-5 w-5 text-dataops-600" />
                PE-Optimized HubSpot Implementation Roadmap
              </h3>
              <p className="text-sm text-gray-600">Step-by-step implementation guide tailored for private equity requirements</p>
            </a>
          </div>
          
          <div>
            <a href="/guides/pe-decision-framework" className="block group">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-dataops-600 transition-colors flex items-center gap-2">
                <Scale className="h-5 w-5 text-dataops-600" />
                HubSpot vs Competitors: The PE Decision Framework
              </h3>
              <p className="text-sm text-gray-600">Comprehensive comparison framework for PE firms evaluating CRM platforms</p>
            </a>
          </div>
          
          <div>
            <a href="/guides/pe-portfolio-value-creation-case-studies" className="block group">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-dataops-600 transition-colors flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-dataops-600" />
                Portfolio Value Creation Case Studies
              </h3>
              <p className="text-sm text-gray-600">Real examples of PE firms achieving measurable ROI through strategic HubSpot deployment</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PEImplementationRoadmapSidebar;