
import React from 'react';
import { BarChart3 } from 'lucide-react';

const RevOpsCalculatorHeader = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <BarChart3 className="w-8 h-8 text-dataops-600 mr-3" />
        <h1 className="text-3xl font-bold text-gray-900">RevOps ROI Calculator</h1>
      </div>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto">
        Calculate the return on investment for your Revenue Operations implementation. 
        Discover how RevOps optimization can increase revenue, reduce costs, and improve team efficiency.
      </p>
    </div>
  );
};

export default RevOpsCalculatorHeader;
