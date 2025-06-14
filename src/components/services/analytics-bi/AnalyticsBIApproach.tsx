
import React from 'react';
import { Link } from 'react-router-dom';

const AnalyticsBIApproach = () => {
  return (
    <section className="mb-16">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 font-rubik">Our Proven Analytics Implementation Approach</h2>
        
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-dataops-600 text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-rubik">Data Audit & Strategy</h3>
              <p className="text-gray-700 font-roboto leading-relaxed">
                We begin with a comprehensive audit of your current data landscape, identifying gaps, opportunities, and 
                strategic priorities. This forms the foundation for a custom analytics roadmap aligned with your business objectives.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-dataops-600 text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-rubik">Dashboard Design & Development</h3>
              <p className="text-gray-700 font-roboto leading-relaxed">
                Our team designs and builds custom dashboards that provide clear visibility into your key performance indicators. 
                Each dashboard is tailored to specific user roles and business functions for maximum relevance and impact.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-dataops-600 text-white rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-rubik">Integration & Automation</h3>
              <p className="text-gray-700 font-roboto leading-relaxed">
                We implement automated data flows and reporting processes that keep your insights fresh and actionable. 
                This includes setting up alerts, scheduled reports, and real-time monitoring capabilities.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-dataops-600 text-white rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-rubik">Training & Enablement</h3>
              <p className="text-gray-700 font-roboto leading-relaxed">
                We ensure your team can effectively use and maintain the analytics solutions through comprehensive training 
                and documentation. This includes best practices for data interpretation and decision-making processes.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Results You Can Expect</h3>
          <ul className="text-green-700 space-y-1">
            <li>• 40% improvement in decision-making speed</li>
            <li>• 60% reduction in manual reporting time</li>
            <li>• Complete visibility into customer lifecycle metrics</li>
            <li>• Proactive identification of growth opportunities</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsBIApproach;
