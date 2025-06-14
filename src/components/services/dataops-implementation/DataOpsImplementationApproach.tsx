
import React from 'react';
import { Link } from 'react-router-dom';

const DataOpsImplementationApproach = () => {
  return (
    <section className="mt-16 px-6">
      <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 border border-gray-200 rounded-2xl p-10 max-w-full mx-auto shadow-xl backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 font-rubik">Our Proven DataOps Implementation Methodology</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-dataops-500 to-dataops-600 text-white rounded-full flex items-center justify-center font-bold mb-4 shadow-lg">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rubik">Portfolio Assessment & Strategy</h3>
            <p className="text-gray-700 font-roboto leading-relaxed text-sm">
              We begin with a comprehensive assessment of your current portfolio operations, identifying gaps, opportunities, and 
              strategic priorities. This forms the foundation for a custom DataOps roadmap tailored to your investment thesis.
            </p>
          </div>
          
          <div className="bg-white/80 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-dataops-500 to-dataops-600 text-white rounded-full flex items-center justify-center font-bold mb-4 shadow-lg">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rubik">System Architecture Design</h3>
            <p className="text-gray-700 font-roboto leading-relaxed text-sm">
              Our team designs scalable system architectures that support your portfolio growth plans. We create technical 
              blueprints that ensure consistent performance across all portfolio companies while maintaining flexibility for unique business needs.
            </p>
          </div>
          
          <div className="bg-white/80 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-dataops-500 to-dataops-600 text-white rounded-full flex items-center justify-center font-bold mb-4 shadow-lg">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rubik">Phased Implementation & Integration</h3>
            <p className="text-gray-700 font-roboto leading-relaxed text-sm">
              We implement DataOps solutions in carefully planned phases to minimize disruption while maximizing impact. 
              This includes system integrations, workflow automation, and process standardization across your portfolio.
            </p>
          </div>
          
          <div className="bg-white/80 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-dataops-500 to-dataops-600 text-white rounded-full flex items-center justify-center font-bold mb-4 shadow-lg">
              4
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rubik">Training & Change Management</h3>
            <p className="text-gray-700 font-roboto leading-relaxed text-sm">
              We ensure successful adoption through comprehensive training programs and change management support. 
              This includes best practices documentation, ongoing support, and performance optimization guidance.
            </p>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 shadow-inner">
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
