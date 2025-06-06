
import React from 'react';
import { DollarSign, Clock, Target } from 'lucide-react';

const RevOpsCallToAction = () => {
  return (
    <>
      {/* Call to Action */}
      <div className="mt-8 bg-dataops-900 text-white rounded-lg p-6">
        <h3 className="font-semibold mb-2">Ready to Implement RevOps?</h3>
        <p className="text-gray-300 text-sm mb-4">
          Our RevOps consulting team can help you achieve these results. We'll design and implement 
          a revenue operations strategy tailored to your business goals.
        </p>
        <a 
          href="/contact"
          className="bg-dataops-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-dataops-700 transition-colors inline-block"
        >
          Get a Free RevOps Strategy Session
        </a>
      </div>

      {/* Educational Content */}
      <div className="mt-12 bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding RevOps ROI</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-green-600" />
              Revenue Impact
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              RevOps typically increases revenue by 15-25% through improved lead qualification, 
              faster sales cycles, and better conversion rates across the entire revenue funnel.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-dataops-600" />
              Efficiency Gains
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Process automation and data quality improvements typically save 20-40% of time 
              spent on manual tasks, reporting, and data cleanup across sales and marketing teams.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Target className="w-5 h-5 mr-2 text-purple-600" />
              Strategic Alignment
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              RevOps creates unified metrics and processes that align sales, marketing, and customer 
              success teams around shared revenue goals and consistent customer experiences.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">Industry Benchmarks</h4>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• Companies with mature RevOps see 19% faster revenue growth</li>
            <li>• RevOps reduces sales cycle length by 10-15% on average</li>
            <li>• Businesses typically see 200-400% ROI from RevOps investments</li>
            <li>• 75% of highest-growth companies have dedicated RevOps functions</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RevOpsCallToAction;
