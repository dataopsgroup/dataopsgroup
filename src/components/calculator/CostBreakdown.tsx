
import React from 'react';
import { BreakdownItem } from './types';

interface CostBreakdownProps {
  breakdown: BreakdownItem[];
  formatCurrency: (amount: number) => string;
}

const CostBreakdown: React.FC<CostBreakdownProps> = ({ breakdown, formatCurrency }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900">Cost Breakdown:</h3>
      
      {breakdown.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-900">{item.category}</span>
            <span className="font-semibold text-gray-900">{formatCurrency(item.amount)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-red-500 h-2 rounded-full transition-all duration-500" 
              style={{ width: `${item.percentage}%` }}
            ></div>
          </div>
          <div className="text-sm text-gray-500 mt-1">
            {item.percentage.toFixed(1)}% of total cost
          </div>
        </div>
      ))}
    </div>
  );
};

export default CostBreakdown;
