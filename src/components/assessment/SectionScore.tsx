
import React from 'react';

interface SectionScoreProps {
  title: string;
  score: number;
  maxScore?: number;
}

const SectionScore: React.FC<SectionScoreProps> = ({ title, score, maxScore = 25 }) => {
  // Get section score color for section bars
  const getSectionBarColor = (score: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage < 40) return 'bg-red-500';
    if (percentage < 65) return 'bg-orange-400';
    if (percentage < 85) return 'bg-yellow-400';
    return 'bg-green-500';
  };

  // Get section score width for bar visualization
  const getSectionBarWidth = (score: number) => {
    return `${(score / maxScore) * 100}%`;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
      <div className="font-medium mb-2">{title}</div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
        <div 
          className={`h-full ${getSectionBarColor(score)} rounded-full transition-all duration-500`}
          style={{ width: getSectionBarWidth(score) }}
        ></div>
      </div>
      <div className="text-right text-sm font-medium">{score}/{maxScore}</div>
    </div>
  );
};

export default SectionScore;
