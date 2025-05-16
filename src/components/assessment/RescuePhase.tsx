
import React from 'react';
import { Check } from 'lucide-react';

interface RescuePhaseProps {
  title: string;
  actions: string[];
}

const RescuePhase: React.FC<RescuePhaseProps> = ({ title, actions }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
      <h4 className="font-semibold text-dataops-700 mb-3">{title}</h4>
      <ul className="space-y-3">
        {actions.map((action, index) => (
          <li key={index} className="flex items-start">
            <Check className="text-dataops-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
            <span className="text-sm text-gray-700">{action}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RescuePhase;
