
import React from 'react';
import { Calculator } from 'lucide-react';
import { CalculatorResults, CalculatorInputs } from './types';
import CostBreakdown from './CostBreakdown';
import CallToActionSection from './CallToActionSection';

interface ResultsDisplayProps {
  showResults: boolean;
  results: CalculatorResults;
  inputs: CalculatorInputs;
  formatCurrency: (amount: number) => string;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ 
  showResults, 
  results, 
  inputs, 
  formatCurrency 
}) => {
  if (!showResults) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        <div className="text-center">
          <Calculator className="h-16 w-16 mx-auto mb-4 text-gray-300" />
          <p className="text-lg">Enter your information and click "Calculate" to see your results</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">
        Annual Cost of Bad Data
      </h2>

      {/* Total Cost Display */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-red-600 mb-2">
            {formatCurrency(results.totalAnnualCost)}
          </div>
          <p className="text-gray-600">Total Annual Cost of Poor Data Quality</p>
          <p className="text-sm text-gray-500 mt-1">
            That's {((results.totalAnnualCost / (parseFloat(inputs.annualRevenue) || 1)) * 100).toFixed(1)}% of your annual revenue
          </p>
        </div>
      </div>

      {/* Breakdown */}
      <CostBreakdown breakdown={results.breakdown} formatCurrency={formatCurrency} />

      {/* Call to Action */}
      <CallToActionSection />
    </div>
  );
};

export default ResultsDisplay;
