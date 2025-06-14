
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
              {' '}for our clients. Start with our{' '}
              <Link to="/data-operations-assessment" className="text-dataops-600 hover:text-dataops-800 font-medium">
                free data assessment
              </Link>
              {' '}to identify integration opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Inaccurate Reporting</h3>
            <p className="text-gray-600 mb-2">
              Poor data quality leads to unreliable reports. We implement{' '}
              <Link to="/insights/data-truth-gap" className="text-dataops-600 hover:text-dataops-800 font-medium">
                data validation processes
              </Link>
              {' '}that ensure your analytics are based on accurate, trustworthy data. Learn more about our{' '}
              <Link to="/services/dataops-implementation" className="text-dataops-600 hover:text-dataops-800 font-medium">
                DataOps implementation services
              </Link>
              {' '}for comprehensive data quality solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Limited Visibility into Customer Behavior</h3>
            <p className="text-gray-600 mb-2">
              Understanding customer patterns is crucial for growth. Our analytics solutions help you identify{' '}
              <Link to="/insights/customer-churn-blindspot" className="text-dataops-600 hover:text-dataops-800 font-medium">
                churn risks
              </Link>
              {' '}and optimize customer lifecycle management. See how we helped companies achieve{' '}
              <Link to="/case-studies/saas-healthcare-achieves-remarkable-insights" className="text-dataops-600 hover:text-dataops-800 font-medium">
                remarkable insights through analytics
              </Link>.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Manual Reporting Processes</h3>
            <p className="text-gray-600 mb-2">
              Stop wasting time on manual data compilation. We automate your reporting workflows and create real-time dashboards 
              that keep your team informed and focused on strategic decisions. Our{' '}
              <Link to="/services/marketing-operations-revops" className="text-dataops-600 hover:text-dataops-800 font-medium">
                marketing operations expertise
              </Link>
              {' '}ensures seamless integration with your existing processes.
            </p>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="text-lg font-semibold text-blue-900 mb-3">Ready to Transform Your Analytics?</h4>
          <p className="text-blue-800 mb-4">
            Don't let data challenges hold back your business growth. Our proven analytics solutions have helped 
            companies across industries unlock the full potential of their data.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              to="/data-operations-assessment" 
              className="inline-flex items-center justify-center bg-dataops-600 hover:bg-dataops-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Your Free Assessment
            </Link>
            <Link 
              to="/case-studies" 
              className="inline-flex items-center justify-center border border-dataops-600 text-dataops-600 hover:bg-dataops-50 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsBIChallenges;
