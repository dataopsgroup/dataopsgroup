
import React from 'react';
import { Link } from 'react-router-dom';

const DataOpsImplementationApproach = () => {
  return (
    <section className="mb-16">
      <div className="bg-white rounded-lg shadow-lg p-8 mx-[10%]">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 font-rubik">Our Proven DataOps Implementation Methodology</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex-shrink-0 w-8 h-8 bg-dataops-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rubik">Portfolio Assessment & Strategy</h3>
            <p className="text-gray-700 font-roboto leading-relaxed text-sm">
              We begin with a comprehensive assessment of your current portfolio operations, identifying gaps, opportunities, and 
              strategic priorities. This forms the foundation for a custom DataOps roadmap tailored to your investment thesis.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex-shrink-0 w-8 h-8 bg-dataops-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rubik">System Architecture Design</h3>
            <p className="text-gray-700 font-roboto leading-relaxed text-sm">
              Our team designs scalable system architectures that support your portfolio growth plans. We create technical 
              blueprints that ensure consistent performance across all portfolio companies while maintaining flexibility for unique business needs.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex-shrink-0 w-8 h-8 bg-dataops-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rubik">Phased Implementation & Integration</h3>
            <p className="text-gray-700 font-roboto leading-relaxed text-sm">
              We implement DataOps solutions in carefully planned phases to minimize disruption while maximizing impact. 
              This includes system integrations, workflow automation, and process standardization across your portfolio.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex-shrink-0 w-8 h-8 bg-dataops-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
              4
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rubik">Training & Change Management</h3>
            <p className="text-gray-700 font-roboto leading-relaxed text-sm">
              We ensure successful adoption through comprehensive training programs and change management support. 
              This includes best practices documentation, ongoing support, and performance optimization guidance.
            </p>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Results You Can Expect</h3>
          <ul className="text-green-700 space-y-1">
            <li>• 50% reduction in manual operations tasks</li>
            <li>• 75% improvement in data accuracy across portfolio</li>
            <li>• 60% faster time-to-insights for decision making</li>
            <li>• 40% increase in operational efficiency</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DataOpsImplementationApproach;
