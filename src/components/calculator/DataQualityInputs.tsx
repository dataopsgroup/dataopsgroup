
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { CalculatorInputs } from './types';

interface DataQualityInputsProps {
  inputs: CalculatorInputs;
  onInputChange: (field: string, value: string) => void;
}

const DataQualityInputs: React.FC<DataQualityInputsProps> = ({ inputs, onInputChange }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mt-8 mb-4 flex items-center">
        <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
        Data Quality Issues
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Time Spent on Data Quality Issues: {inputs.dataQualityIssueTime}%
          </label>
          <input
            type="range"
            min="5"
            max="50"
            value={inputs.dataQualityIssueTime}
            onChange={(e) => onInputChange('dataQualityIssueTime', e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>5%</span>
            <span>50%</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Customer Churn Rate: {inputs.customerChurnRate}%
          </label>
          <input
            type="range"
            min="1"
            max="25"
            value={inputs.customerChurnRate}
            onChange={(e) => onInputChange('customerChurnRate', e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1%</span>
            <span>25%</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duplicate/Bad Data Rate: {inputs.duplicateDataRate}%
          </label>
          <input
            type="range"
            min="5"
            max="40"
            value={inputs.duplicateDataRate}
            onChange={(e) => onInputChange('duplicateDataRate', e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>5%</span>
            <span>40%</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Compliance Violations (Annual)
          </label>
          <input
            type="number"
            value={inputs.complianceViolations}
            onChange={(e) => onInputChange('complianceViolations', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dataops-500 focus:border-transparent"
            placeholder="e.g., 2"
          />
        </div>
      </div>
    </div>
  );
};

export default DataQualityInputs;
