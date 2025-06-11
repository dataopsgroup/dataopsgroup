
import React from 'react';
import { Link } from 'react-router-dom';

const AnalyticsBIApproach = () => {
  return (
    <div className="bg-gradient-to-r from-dataops-50 to-saffron-50 rounded-lg p-8 mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Analytics Approach</h2>
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="bg-dataops-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Data Quality Assessment</h3>
            <p className="text-gray-600">
              We start by evaluating your current data quality using our proven 
              <Link to="/data-operation-assessment" className="text-dataops-600 hover:text-dataops-800 font-medium">
                DataOps maturity assessment
              </Link>
              to identify gaps and improvement opportunities.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-dataops-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Requirements Analysis</h3>
            <p className="text-gray-600">
              We work with your team to understand your specific analytics needs, KPIs, and reporting requirements.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-dataops-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Solution Design & Implementation</h3>
            <p className="text-gray-600">
              Custom analytics solutions built on platforms like HubSpot, integrated with your existing systems.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-dataops-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Training & Support</h3>
            <p className="text-gray-600">
              Comprehensive training to ensure your team can effectively use and maintain the analytics solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsBIApproach;
