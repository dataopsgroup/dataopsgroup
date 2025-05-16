
import React from 'react';

interface PriorityRecommendationProps {
  index: number;
  title: string;
  text: string;
}

const PriorityRecommendation: React.FC<PriorityRecommendationProps> = ({ index, title, text }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm flex gap-4">
      <div className="bg-dataops-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">
        {index}
      </div>
      <div>
        <h4 className="font-semibold text-lg mb-1 text-dataops-800">{title}</h4>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default PriorityRecommendation;
