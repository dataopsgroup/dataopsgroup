
import React from 'react';

interface SectionScoreProps {
  title: string;
  score: number;
  maxScore?: number;
}

const SectionScore: React.FC<SectionScoreProps> = ({ title, score, maxScore = 25 }) => {
  const percentage = (score / maxScore) * 100;
  
  // Get section configuration
  const getSectionConfig = () => {
    if (percentage < 40) return {
      bgColor: 'bg-red-500',
      bgGradient: 'from-red-500 to-red-600',
      textColor: 'text-red-600',
      borderColor: 'border-red-200',
      bgCard: 'bg-red-50',
      label: 'Needs Attention'
    };
    if (percentage < 65) return {
      bgColor: 'bg-orange-400',
      bgGradient: 'from-orange-400 to-orange-500',
      textColor: 'text-orange-600',
      borderColor: 'border-orange-200',
      bgCard: 'bg-orange-50',
      label: 'Developing'
    };
    if (percentage < 85) return {
      bgColor: 'bg-yellow-400',
      bgGradient: 'from-yellow-400 to-yellow-500',
      textColor: 'text-yellow-600',
      borderColor: 'border-yellow-200',
      bgCard: 'bg-yellow-50',
      label: 'Good'
    };
    return {
      bgColor: 'bg-green-500',
      bgGradient: 'from-green-500 to-green-600',
      textColor: 'text-green-600',
      borderColor: 'border-green-200',
      bgCard: 'bg-green-50',
      label: 'Excellent'
    };
  };

  const config = getSectionConfig();

  return (
    <div className={`${config.bgCard} ${config.borderColor} border-2 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
      <div className="flex items-start justify-between mb-6">
        <h4 className="font-bold text-gray-900 text-lg leading-tight flex-1">{title}</h4>
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 flex-shrink-0 mt-1"></div>
      </div>
      
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${config.bgGradient} rounded-full transition-all duration-1500 ease-out`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      
      {/* Score Details */}
      <div className="flex items-center justify-between">
        <span className={`text-sm font-bold ${config.textColor}`}>
          {config.label}
        </span>
        <div className="text-right">
          <div className="font-bold text-gray-900 text-xl">{score}/{maxScore}</div>
          <div className="text-sm text-gray-500 font-medium">{Math.round(percentage)}%</div>
        </div>
      </div>
    </div>
  );
};

export default SectionScore;
