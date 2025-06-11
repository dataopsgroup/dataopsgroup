
import React from 'react';
import { Link } from 'react-router-dom';

const AnalyticsBIOverview = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Analytics & BI Matter</h2>
      <p className="text-gray-600 mb-6">
        Without proper analytics and business intelligence, companies operate blindly, missing critical insights that could drive growth. 
        Our analytics solutions help you understand your data, identify opportunities, and make data-driven decisions with confidence.
      </p>
      <p className="text-gray-600 mb-6">
        Many organizations struggle with data quality issues that undermine their analytics efforts. That's why we start with 
        <Link to="/insights/crm-cleanup-plan" className="text-dataops-600 hover:text-dataops-800 font-medium">
          comprehensive data cleanup
        </Link>
        and implement 
        <Link to="/insights/data-enrichment-strategy" className="text-dataops-600 hover:text-dataops-800 font-medium">
          proven data enrichment strategies
        </Link>
        before building your analytics infrastructure.
      </p>
      <div className="bg-dataops-50 p-6 rounded-lg">
        <p className="text-dataops-800">
          <strong>Real Results:</strong> Our analytics implementations have helped companies like the 
          <Link to="/insights/audio-visual-equipment-wholesaler" className="text-dataops-600 hover:text-dataops-800 underline">
            audio visual equipment wholesaler
          </Link>
          achieve 10% pipeline growth in 6 months through data-driven insights and reporting.
        </p>
      </div>
    </div>
  );
};

export default AnalyticsBIOverview;
