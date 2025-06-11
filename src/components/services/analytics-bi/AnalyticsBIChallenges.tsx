
import React from 'react';
import { Link } from 'react-router-dom';

const AnalyticsBIChallenges = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Analytics Challenges We Solve</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Fragmented Data Sources</h3>
          <p className="text-gray-600">
            Many companies struggle with data scattered across multiple systems. We integrate your data sources to create a 
            unified view, similar to how we helped solve 
            <Link to="/insights/customer-segmentation-mistake" className="text-dataops-600 hover:text-dataops-800 font-medium">
              customer segmentation challenges
            </Link>
            for our clients.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Inaccurate Reporting</h3>
          <p className="text-gray-600">
            Poor data quality leads to unreliable reports. We implement 
            <Link to="/insights/data-truth-gap" className="text-dataops-600 hover:text-dataops-800 font-medium">
              data validation processes
            </Link>
            that ensure your analytics are based on accurate, trustworthy data.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Limited Visibility into Customer Behavior</h3>
          <p className="text-gray-600">
            Understanding customer patterns is crucial for growth. Our analytics solutions help you identify 
            <Link to="/insights/customer-churn-blindspot" className="text-dataops-600 hover:text-dataops-800 font-medium">
              churn risks
            </Link>
            and optimize customer lifecycle management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsBIChallenges;
