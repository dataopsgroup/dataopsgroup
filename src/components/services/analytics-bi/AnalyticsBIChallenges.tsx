
import React from 'react';
import { Link } from 'react-router-dom';

const AnalyticsBIChallenges = () => {
  return (
    <section className="mb-16">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 font-rubik">Common Analytics Challenges We Solve</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-red-400 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rubik">Fragmented Data Sources</h3>
            <p className="text-gray-700 font-roboto leading-relaxed mb-3">
              Many companies struggle with data scattered across multiple systems, making it impossible to get a complete 
              picture of business performance. This leads to conflicting reports and missed opportunities.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Our Solution:</strong> We integrate your data sources to create a unified view, similar to how we helped solve 
              <Link to="/insights/customer-segmentation-mistake" className="text-dataops-600 hover:text-dataops-800 font-medium underline">
                customer segmentation challenges
              </Link> for our clients through comprehensive data unification.
            </p>
          </div>
          
          <div className="border-l-4 border-yellow-400 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rubik">Inaccurate Reporting</h3>
            <p className="text-gray-700 font-roboto leading-relaxed mb-3">
              Poor data quality leads to unreliable reports that undermine confidence in analytics. Teams waste time 
              questioning data accuracy instead of making decisions.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Our Solution:</strong> We implement robust 
              <Link to="/insights/data-truth-gap" className="text-dataops-600 hover:text-dataops-800 font-medium underline">
                data validation processes
              </Link> that ensure your analytics are based on accurate, trustworthy data from the ground up.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-400 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rubik">Limited Visibility into Customer Behavior</h3>
            <p className="text-gray-700 font-roboto leading-relaxed mb-3">
              Without proper analytics, businesses miss critical signals about customer satisfaction, engagement patterns, 
              and potential churn risks that could prevent revenue loss.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Our Solution:</strong> Our analytics solutions help you identify 
              <Link to="/insights/customer-churn-blindspot" className="text-dataops-600 hover:text-dataops-800 font-medium underline">
                churn risks early
              </Link> and optimize customer lifecycle management for improved retention and growth.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-400 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rubik">Overwhelming Data Without Insights</h3>
            <p className="text-gray-700 font-roboto leading-relaxed mb-3">
              Having access to data isn't enough – teams need clear, actionable insights that directly connect to 
              business outcomes and strategic objectives.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Our Solution:</strong> We transform raw data into strategic intelligence with custom dashboards 
              and automated insights that guide decision-making at every level of your organization.
            </p>
          </div>
        </div>
        
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready to Solve Your Analytics Challenges?</h3>
          <p className="text-gray-700 mb-4">
            Our <Link to="/data-operation-assessment" className="text-dataops-600 hover:text-dataops-800 font-medium underline">
            free DataOps assessment</Link> identifies the specific analytics gaps holding your business back and provides 
            a clear roadmap for improvement.
          </p>
          <Link 
            to="/data-operation-assessment"
            className="inline-flex items-center px-4 py-2 bg-dataops-600 text-white rounded-lg hover:bg-dataops-700 transition-colors"
          >
            Start Your Free Assessment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsBIChallenges;
