
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
  const percentage = Math.round((overallScore / maxScore) * 100);
  
  // Get score configuration
  const getScoreConfig = () => {
    if (overallScore < 50) return {
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-600',
      message: "Your HubSpot implementation needs immediate attention"
    };
    if (overallScore < 85) return {
      color: 'from-orange-400 to-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600',
      message: "Good foundation with room for improvement"
    };
    if (overallScore < 105) return {
      color: 'from-yellow-400 to-yellow-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-600',
      message: "Strong performance with optimization opportunities"
    };
    return {
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
      message: "Excellent HubSpot implementation!"
    };
  };

  const config = getScoreConfig();

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your Assessment Results</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Here's how your HubSpot implementation measures up</p>
      </div>

      <div className={`${config.bgColor} ${config.borderColor} border-2 rounded-3xl p-12 mb-12 shadow-2xl`}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Score Circle */}
          <div className="flex-shrink-0">
            <div className="relative">
              <svg className="w-52 h-52 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  className="text-gray-200"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#gradient)"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray={`${(percentage * 251.2) / 100} 251.2`}
                  strokeLinecap="round"
                  className="transition-all duration-2000 ease-out"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" className={`stop-color-gradient-${config.color.split('-')[1]}-500`} />
                    <stop offset="100%" className={`stop-color-gradient-${config.color.split('-')[1]}-600`} />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-900 mb-2">{overallScore}</div>
                  <div className="text-lg text-gray-500">/{maxScore}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Score Details */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <span className={`text-3xl font-bold ${config.textColor}`}>
                {scoreLabel}
              </span>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">{config.message}</p>
            <div className="flex items-center justify-center lg:justify-start space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{percentage}%</div>
                <div className="text-sm text-gray-500 font-medium">Overall Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dataops-600">5</div>
                <div className="text-sm text-gray-500 font-medium">Areas Assessed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action */}
      <div className="bg-gradient-to-r from-dataops-600 via-dataops-700 to-dataops-800 rounded-2xl p-8 text-white text-center shadow-xl">
        <div className="flex items-center justify-center mb-4">
          <span className="font-bold text-xl">Ready for Action?</span>
        </div>
        <p className="mb-6 text-lg opacity-90">Your personalized improvement plan is ready below. Let's get started!</p>
      </div>
    </div>
  );
};

export default ResultsOverview;
