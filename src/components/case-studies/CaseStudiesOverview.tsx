
import React from 'react';

const CaseStudiesOverview = () => {
  return (
    <section className="space-y-8 bg-white p-8 rounded-lg">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-dataops-950 mb-4">Investment-Grade Success Stories</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Our data operations transformations have consistently delivered measurable ROI across diverse portfolio companies. 
          Each case study demonstrates scalable methodologies that can be replicated to drive operational excellence 
          and accelerate growth across your entire portfolio.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 pt-6">
        <div className="text-center p-6 bg-gradient-to-br from-dataops-50 to-blue-50 rounded-lg">
          <div className="text-3xl font-bold text-dataops-600 mb-2">47%</div>
          <div className="text-sm text-gray-700">Average Revenue Growth</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-saffron-50 to-orange-50 rounded-lg">
          <div className="text-3xl font-bold text-saffron-600 mb-2">100%</div>
          <div className="text-sm text-gray-700">Implementation Success Rate</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
          <div className="text-3xl font-bold text-green-600 mb-2">6-18</div>
          <div className="text-sm text-gray-700">Months to ROI</div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Why PE Firms Choose DataOps Group:</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-saffron-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span><strong>Scalable Methodologies:</strong> Proven frameworks that work across diverse industries and company sizes</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-dataops-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span><strong>Measurable ROI:</strong> Clear metrics and KPIs that demonstrate investment value</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-saffron-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span><strong>Operational Excellence:</strong> Sustainable improvements that continue delivering value post-implementation</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CaseStudiesOverview;
