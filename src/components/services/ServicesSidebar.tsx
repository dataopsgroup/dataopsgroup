
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSidebar = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 sticky top-28">
      <h3 className="text-xl font-bold mb-6">Why Choose Us</h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <span className="text-dataops-600 mr-3 mt-0.5">•</span>
          <span>Expertise in HubSpot implementation and optimization</span>
        </li>
        <li className="flex items-start">
          <span className="text-dataops-600 mr-3 mt-0.5">•</span>
          <span>Proven track record across diverse industries</span>
        </li>
        <li className="flex items-start">
          <span className="text-dataops-600 mr-3 mt-0.5">•</span>
          <span>Customized solutions for your specific business needs</span>
        </li>
        <li className="flex items-start">
          <span className="text-dataops-600 mr-3 mt-0.5">•</span>
          <span>Data-driven approach with measurable results</span>
        </li>
        <li className="flex items-start">
          <span className="text-dataops-600 mr-3 mt-0.5">•</span>
          <span>Ongoing support and continuous optimization</span>
        </li>
        <li className="flex items-start">
          <span className="text-dataops-600 mr-3 mt-0.5">•</span>
          <span>Seamless integration with existing systems</span>
        </li>
      </ul>
      
      <div className="mt-8 pt-8 border-t border-gray-100">
        <h3 className="text-xl font-bold mb-4">Ready to transform your data operations?</h3>
        <p className="text-gray-700 mb-6">
          Contact us today to schedule a consultation and learn how our services can help your organization.
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

export default ServicesSidebar;
