
import React from 'react';
import { Link } from 'react-router-dom';

const AnalyticsBIChallenges = () => {
  return (
    <section className="mb-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Analytics Challenges We Solve</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fragmented Data Sources</h3>
            <p className="text-gray-600 mb-2">
              Many companies struggle with data scattered across multiple systems. We integrate your data sources to create a 
              unified view, similar to how we helped solve{' '}
              <Link to="/insights/customer-segmentation-mistake" className="text-dataops-600 hover:text-dataops-800 font-medium">
                customer segmentation challenges
              </Link>
              {' '}for our clients.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Inaccurate Reporting</h3>
            <p className="text-gray-600 mb-2">
              Poor data quality leads to unreliable reports. We implement{' '}
              <Link to="/insights/data-truth-gap" className="text-dataops-600 hover:text-dataops-800 font-medium">
                data validation processes
              </Link>
              {' '}that ensure your analytics are based on accurate, trustworthy data.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Limited Visibility into Customer Behavior</h3>
            <p className="text-gray-600 mb-2">
              Understanding customer patterns is crucial for growth. Our analytics solutions help you identify{' '}
              <Link to="/insights/customer-churn-blindspot" className="text-dataops-600 hover:text-dataops-800 font-medium">
                churn risks
              </Link>
              {' '}and optimize customer lifecycle management.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Manual Reporting Processes</h3>
            <p className="text-gray-600 mb-2">
              Stop wasting time on manual data compilation. We automate your reporting workflows and create real-time dashboards 
              that keep your team informed and focused on strategic decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsBIChallenges;
