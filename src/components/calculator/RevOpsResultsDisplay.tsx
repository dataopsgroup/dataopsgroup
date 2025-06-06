
import React from 'react';
import { BarChart3, Zap } from 'lucide-react';
import { RevOpsCalculatorResults, RevOpsCalculatorInputs } from './revops-types';

interface RevOpsResultsDisplayProps {
  results: RevOpsCalculatorResults;
  inputs: RevOpsCalculatorInputs;
  showResults: boolean;
  formatCurrency: (amount: number) => string;
  formatPercentage: (value: number) => string;
}

const RevOpsResultsDisplay: React.FC<RevOpsResultsDisplayProps> = ({
  results,
  inputs,
  showResults,
  formatCurrency,
  formatPercentage
}) => {
  if (!showResults) {
    return (
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-center h-full text-gray-500">
          <div className="text-center">
            <BarChart3 className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p className="text-lg">Enter your information and click "Calculate" to see your RevOps ROI projection</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">
        Your RevOps ROI Projection
      </h2>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600">
            {formatPercentage(results.projectedRevOpsROI)}
          </div>
          <p className="text-sm text-green-700">Projected Annual ROI</p>
        </div>

        <div className="bg-dataops-50 border border-dataops-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-dataops-600">
            {results.paybackPeriod.toFixed(1)} mo
          </div>
          <p className="text-sm text-dataops-700">Payback Period</p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="text-xl font-bold text-purple-600">
            {formatCurrency(results.revenueGain)}
          </div>
          <p className="text-sm text-purple-700">Annual Revenue Gain</p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <div className="text-xl font-bold text-orange-600">
            {formatPercentage(results.efficiencyGain)}
          </div>
          <p className="text-sm text-orange-700">Efficiency Improvement</p>
        </div>
      </div>

      {/* Total Benefits */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {formatCurrency(results.totalROI)}
          </div>
          <p className="text-gray-600">Total Annual Benefits from RevOps</p>
          <p className="text-sm text-gray-500 mt-1">
            That's {((results.totalROI / (parseFloat(inputs.annualRevenue) || 1)) * 100).toFixed(1)}% of your annual revenue
          </p>
        </div>
      </div>

      {/* Breakdown */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900">Benefits Breakdown:</h3>
        
        {results.breakdown.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-900">{item.category}</span>
              <span className="font-semibold text-gray-900">{formatCurrency(item.amount)}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-500" 
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            <div className="text-sm text-gray-600">
              {item.description}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {item.percentage.toFixed(1)}% of total benefits
            </div>
          </div>
        ))}
      </div>

      {/* Key Insights */}
      <div className="mt-8 bg-dataops-50 border border-dataops-200 rounded-lg p-6">
        <h3 className="font-semibold text-dataops-900 mb-4 flex items-center">
          <Zap className="w-5 h-5 mr-2" />
          Key RevOps Opportunities
        </h3>
        <div className="space-y-2 text-sm text-dataops-800">
          {results.efficiencyGain > 30 && (
            <p>• High efficiency gains possible - significant manual process automation opportunity</p>
          )}
          {results.paybackPeriod < 12 && (
            <p>• Fast payback period indicates strong RevOps investment case</p>
          )}
          {results.revenueGain > (parseFloat(inputs.annualRevenue) * 0.1) && (
            <p>• Revenue optimization could add 10%+ to annual revenue</p>
          )}
          <p>• Process standardization will improve sales and marketing alignment</p>
          <p>• Data quality improvements will enhance decision-making across teams</p>
        </div>
      </div>
    </div>
  );
};

export default RevOpsResultsDisplay;
