
import React from 'react';
import { Calculator } from 'lucide-react';

const CalculatorHeader = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <Calculator className="h-8 w-8 text-dataops-600 mr-3" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Bad Data Cost Calculator</h1>
      </div>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Discover how much poor data quality is costing your business annually. Get a comprehensive breakdown 
        of productivity losses, revenue impact, and compliance risks.
      </p>
    </div>
  );
};

export default CalculatorHeader;
