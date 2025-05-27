
import React from 'react';
import { X, CheckCircle } from 'lucide-react';

interface BeforeAfterComparisonProps {
  problems: string[];
  solutions: string[];
}

const BeforeAfterComparison = ({ problems, solutions }: BeforeAfterComparisonProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-dataops-950 mb-8 text-center">The Transformation</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Before DataOps Group</h3>
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
              <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{problem}</span>
            </div>
          ))}
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">After Implementation</h3>
          {solutions.map((solution, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{solution}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;
