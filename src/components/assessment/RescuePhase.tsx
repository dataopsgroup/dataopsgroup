
import React from 'react';

interface RescuePhaseProps {
  title: string;
  actions: string[];
}

const RescuePhase: React.FC<RescuePhaseProps> = ({ title, actions }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
      <h4 className="font-semibold text-dataops-700 mb-3">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-700 list-disc pl-4">
        {actions.map((action, index) => (
          <li key={index}>{action}</li>
        ))}
      </ul>
    </div>
  );
};

export default RescuePhase;
