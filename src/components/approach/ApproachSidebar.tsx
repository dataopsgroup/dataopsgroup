
import React from 'react';
import { Link } from 'react-router-dom';

const ApproachSidebar = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 sticky top-28">
      <h3 className="text-xl font-bold mb-6">Benefits of Our Approach</h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <span className="text-dataops-600 mr-3 mt-0.5">•</span>
          <span>Faster time to value from data investments</span>
        </li>
        <li className="flex items-start">
          <span className="text-dataops-600 mr-3 mt-0.5">•</span>
          <span>Reduced implementation risk and complexity</span>
        </li>
        <li className="flex items-start">
          <span className="text-dataops-600 mr-3 mt-0.5">•</span>
          <span>Higher user adoption across the organization</span>
        </li>
        <li className="flex items-start">
          <span className="text-dataops-600 mr-3 mt-0.5">•</span>
          <span>Improved data quality and reliability</span>
        </li>
        <li className="flex items-start">
          <span className="text-dataops-600 mr-3 mt-0.5">•</span>
          <span>Better alignment between data strategy and business objectives</span>
        </li>
        <li className="flex items-start">
          <span className="text-dataops-600 mr-3 mt-0.5">•</span>
          <span>Sustainable data operations that grow with your business</span>
        </li>
      </ul>
      
      <div className="mt-8 pt-8 border-t border-gray-100">
        <h3 className="text-xl font-bold mb-4">Ready to transform your data operations?</h3>
        <p className="text-gray-700 mb-6">
          Contact us today to schedule a consultation and learn how our approach can help your organization.
        </p>
        <Link 
          to="/contact"
          className="block w-full py-2 px-4 bg-dataops-600 hover:bg-dataops-700 text-white text-center rounded-md transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ApproachSidebar;
