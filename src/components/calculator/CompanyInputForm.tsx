
import React from 'react';
import { CalculatorInputs } from './types';

interface CompanyInputFormProps {
  inputs: CalculatorInputs;
  onInputChange: (field: string, value: string) => void;
}

const CompanyInputForm: React.FC<CompanyInputFormProps> = ({ inputs, onInputChange }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">
        Company Information
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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Employees
          </label>
          <input
            type="number"
            value={inputs.employeeCount}
            onChange={(e) => onInputChange('employeeCount', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dataops-500 focus:border-transparent"
            placeholder="e.g., 100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Average Salary ($)
          </label>
          <input
            type="number"
            value={inputs.avgSalary}
            onChange={(e) => onInputChange('avgSalary', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dataops-500 focus:border-transparent"
            placeholder="e.g., 75000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Marketing Budget ($)
          </label>
          <input
            type="number"
            value={inputs.marketingBudget}
            onChange={(e) => onInputChange('marketingBudget', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dataops-500 focus:border-transparent"
            placeholder="e.g., 500000"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyInputForm;
