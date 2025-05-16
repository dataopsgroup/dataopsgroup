
import React from 'react';

interface ResultsOverviewProps {
  overallScore: number;
  maxScore?: number;
  scoreLabel: string;
}

const ResultsOverview: React.FC<ResultsOverviewProps> = ({ 
  overallScore, 
  maxScore = 125, 
  scoreLabel 
}) => {
  // Calculate score color based on score
  const getScoreColor = (score: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage < 40) return 'border-red-500';
    if (percentage < 65) return 'border-orange-400';
    if (percentage < 85) return 'border-yellow-400';
    return 'border-green-500';
  };
  
  // Get text color for score label
  const getScoreLabelColor = () => {
    if (overallScore < 50) return 'text-red-500';
    if (overallScore < 85) return 'text-orange-500';
    if (overallScore < 105) return 'text-yellow-600';
    return 'text-green-500';
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <div className={`w-32 h-32 rounded-full border-8 flex items-center justify-center mb-4 ${getScoreColor(overallScore)}`}>
        <span className="text-4xl font-bold">{overallScore}</span>
        <span className="text-gray-500 font-medium">/{maxScore}</span>
      </div>
      <div className={`text-xl font-semibold ${getScoreLabelColor()}`}>
        {scoreLabel}
      </div>
    </div>
  );
};

export default ResultsOverview;
