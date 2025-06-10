
import React from 'react';
import { Clock, DollarSign } from 'lucide-react';

const InformationSection = () => {
  return (
    <div className="mt-12 bg-gray-50 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Your Bad Data Costs</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Clock className="h-5 w-5 mr-2 text-orange-600" />
            Productivity Impact
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Studies show employees spend 20-40% of their time dealing with data quality issues. This includes 
            data cleansing, verification, duplicate removal, and rework caused by incorrect information.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <DollarSign className="h-5 w-5 mr-2 text-green-600" />
            Revenue Impact
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Poor data quality directly affects customer experience, leading to increased churn rates. 
            Additionally, bad data reduces the effectiveness of marketing campaigns and sales efforts.
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">Industry Benchmarks</h4>
        <ul className="text-yellow-700 text-sm space-y-1">
          <li>• Average companies lose 12% of revenue due to poor data quality</li>
          <li>• 88% of organizations struggle with data quality issues</li>
          <li>• Data professionals spend 60% of time on data preparation vs. analysis</li>
          <li>• Each data quality rule violation costs an average of $15,000</li>
        </ul>
      </div>
    </div>
  );
};

export default InformationSection;
