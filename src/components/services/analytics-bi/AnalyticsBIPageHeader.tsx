
import React from 'react';
import { Link } from 'react-router-dom';

const AnalyticsBIPageHeader = () => {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Analytics & Business Intelligence Services
      </h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Transform your data into actionable insights with custom analytics solutions that drive business growth and informed decision-making. 
        Start with our{' '}
        <Link to="/data-operations-assessment" className="text-dataops-600 hover:text-dataops-800 font-medium">
          free data assessment
        </Link>
        {' '}to discover optimization opportunities.
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
        <p className="text-gray-700">
          <strong>Data Quality First:</strong> Our analytics implementations start with comprehensive{' '}
          <Link to="/insights/crm-cleanup-plan" className="text-dataops-600 hover:text-dataops-800 font-medium">
            data cleanup
          </Link>
          {' '}to ensure reliable insights. See how we helped companies achieve{' '}
          <Link to="/case-studies" className="text-dataops-600 hover:text-dataops-800 font-medium">
            measurable results
          </Link>
          {' '}through data-driven decision making.
        </p>
      </div>
    </header>
  );
};

export default AnalyticsBIPageHeader;
