
import React from 'react';
import { Calculator } from 'lucide-react';

interface CalculatorButtonsProps {
  onCalculate: () => void;
  onReset: () => void;
}

const CalculatorButtons: React.FC<CalculatorButtonsProps> = ({ onCalculate, onReset }) => {
  return (
    <div className="mt-8 space-y-3">
      <button
        onClick={onCalculate}
        className="w-full bg-dataops-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-dataops-700 transition-colors flex items-center justify-center"
      >
        <Calculator className="h-5 w-5 mr-2" />
        Calculate Bad Data Costs
      </button>
      
      <button
        onClick={onReset}
        className="w-full bg-gray-200 text-gray-700 py-2 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors"
      >
        Reset Calculator
      </button>
    </div>
  );
};

export default CalculatorButtons;
