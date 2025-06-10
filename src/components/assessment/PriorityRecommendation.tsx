
import React from 'react';

interface PriorityRecommendationProps {
  index: number;
  title: string;
  text: string;
}

const PriorityRecommendation: React.FC<PriorityRecommendationProps> = ({ index, title, text }) => {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg flex gap-5 hover:shadow-xl transition-all duration-300">
      <div className="bg-dataops-600 text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-lg">
        {index}
      </div>
      <div>
        <h4 className="font-bold text-xl mb-3 text-dataops-800 flex items-center">
          <span>{title}</span>
        </h4>
        <p className="text-gray-700 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default PriorityRecommendation;
