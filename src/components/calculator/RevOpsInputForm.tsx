import React from 'react';
import { Calculator } from 'lucide-react';
import { RevOpsCalculatorInputs } from './revops-types';

interface RevOpsInputFormProps {
  inputs: RevOpsCalculatorInputs;
  onInputChange: (field: keyof RevOpsCalculatorInputs, value: string | number) => void;
  onCalculate: () => void;
  onReset: () => void;
}

const RevOpsInputForm: React.FC<RevOpsInputFormProps> = ({
  inputs,
  onInputChange,
  onCalculate,
  onReset
}) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">
        Company & Team Information
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Revenue ($)
          </label>
          <input
            type="number"
            value={inputs.annualRevenue}
            onChange={(e) => onInputChange('annualRevenue', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dataops-500 focus:border-transparent"
            placeholder="e.g., 10000000"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sales Team Size
            </label>
            <input
              type="number"
              value={inputs.salesTeamSize}
              onChange={(e) => onInputChange('salesTeamSize', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dataops-500 focus:border-transparent"
              placeholder="e.g., 8"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Marketing Team Size
            </label>
            <input
              type="number"
              value={inputs.marketingTeamSize}
              onChange={(e) => onInputChange('marketingTeamSize', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dataops-500 focus:border-transparent"
              placeholder="e.g., 5"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Average Deal Size ($)
            </label>
            <input
              type="number"
              value={inputs.avgDealSize}
              onChange={(e) => onInputChange('avgDealSize', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dataops-500 focus:border-transparent"
              placeholder="e.g., 25000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sales Cycle (Days)
            </label>
            <input
              type="number"
              value={inputs.salesCycleLength}
              onChange={(e) => onInputChange('salesCycleLength', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dataops-500 focus:border-transparent"
              placeholder="e.g., 90"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current RevOps Investment ($)
          </label>
          <input
            type="number"
            value={inputs.currentRevOpsInvestment}
            onChange={(e) => onInputChange('currentRevOpsInvestment', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dataops-500 focus:border-transparent"
            placeholder="e.g., 200000"
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-8 mb-4">
        Current Performance Metrics
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Lead Conversion Rate: {inputs.leadConversionRate}%
          </label>
          <input
            type="range"
            min="1"
            max="20"
            value={inputs.leadConversionRate}
            onChange={(e) => onInputChange('leadConversionRate', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1%</span>
            <span>20%</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sales Conversion Rate: {inputs.salesConversionRate}%
          </label>
          <input
            type="range"
            min="5"
            max="50"
            value={inputs.salesConversionRate}
            onChange={(e) => onInputChange('salesConversionRate', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>5%</span>
            <span>50%</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Time on Data Quality Issues: {inputs.dataQualityIssueTime}%
          </label>
          <input
            type="range"
            min="10"
            max="60"
            value={inputs.dataQualityIssueTime}
            onChange={(e) => onInputChange('dataQualityIssueTime', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>10%</span>
            <span>60%</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Time on Manual Processes: {inputs.manualProcessTime}%
          </label>
          <input
            type="range"
            min="20"
            max="70"
            value={inputs.manualProcessTime}
            onChange={(e) => onInputChange('manualProcessTime', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>20%</span>
            <span>70%</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Weekly Reporting Hours
          </label>
          <input
            type="number"
            value={inputs.reportingTime}
            onChange={(e) => onInputChange('reportingTime', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dataops-500 focus:border-transparent"
            placeholder="e.g., 20"
          />
        </div>
      </div>

      <div className="mt-8 space-y-3">
        <button
          onClick={onCalculate}
          className="w-full bg-dataops-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-dataops-700 transition-colors flex items-center justify-center"
        >
          <Calculator className="w-5 h-5 mr-2" />
          Calculate RevOps ROI
        </button>
        
        <button
          onClick={onReset}
          className="w-full bg-gray-200 text-gray-700 py-2 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors"
        >
          Reset Calculator
        </button>
      </div>
    </div>
  );
};

export default RevOpsInputForm;
