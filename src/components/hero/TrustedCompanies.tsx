
import React from 'react';
import { Link } from 'react-router-dom';

// Memoized trusted companies section
const TrustedCompanies = React.memo(() => (
  <div className="pb-16 mt-12 trusted-companies-section bg-green-200">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 leading-normal md:leading-relaxed">
        Trusted by 50+ Companies to Rescue Their HubSpot Investments
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-3xl font-bold text-dataops-600 mb-2">47%</div>
          <p className="text-gray-700 font-medium mb-1">Increased qualified leads</p>
          <p className="text-sm text-gray-500">in 90 days</p>
          <p className="text-xs text-gray-400 mt-2">Audio Visual Equipment Wholesaler</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-3xl font-bold text-dataops-600 mb-2">28%</div>
          <p className="text-gray-700 font-medium mb-1">Reduced sales cycle</p>
          <p className="text-sm text-gray-500">time to close</p>
          <p className="text-xs text-gray-400 mt-2">Multi-National Insurance</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-3xl font-bold text-dataops-600 mb-2">35%</div>
          <p className="text-gray-700 font-medium mb-1">Improvement in close rates</p>
          <p className="text-sm text-gray-500">deal conversion</p>
          <p className="text-xs text-gray-400 mt-2">SaaS Healthcare</p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700 mb-6">
          Ready to transform your operations? Explore our comprehensive{' '}
          <Link to="/services" className="text-dataops-600 hover:text-dataops-700 underline font-medium">
            service offerings
          </Link>{' '}
          or read more{' '}
          <Link to="/about" className="text-dataops-600 hover:text-dataops-700 underline font-medium">
            about our team
          </Link>.
        </p>
      </div>
    </div>
  </div>
));

TrustedCompanies.displayName = 'TrustedCompanies';

export default TrustedCompanies;
