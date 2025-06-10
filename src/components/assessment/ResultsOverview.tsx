
import React from 'react';
import { TrendingUp, Award, AlertTriangle, CheckCircle } from 'lucide-react';

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
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      message: "Your HubSpot implementation needs immediate attention"
    };
    if (overallScore < 85) return {
      color: 'from-orange-400 to-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600',
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      message: "Good foundation with room for improvement"
    };
    if (overallScore < 105) return {
      color: 'from-yellow-400 to-yellow-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-600',
      icon: <TrendingUp className="h-8 w-8 text-yellow-500" />,
      message: "Strong performance with optimization opportunities"
    };
    return {
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
      icon: <Award className="h-8 w-8 text-green-500" />,
      message: "Excellent HubSpot implementation!"
    };
  };

  const config = getScoreConfig();

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Assessment Results</h2>
        <p className="text-gray-600">Here's how your HubSpot implementation measures up</p>
      </div>

      <div className={`${config.bgColor} ${config.borderColor} border-2 rounded-2xl p-8 mb-8`}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Score Circle */}
          <div className="flex-shrink-0">
            <div className="relative">
              <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                  className="text-gray-200"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  fill="transparent"
                  strokeDasharray={`${(percentage * 251.2) / 100} 251.2`}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
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
                  <div className="text-4xl font-bold text-gray-900">{overallScore}</div>
                  <div className="text-sm text-gray-500">/{maxScore}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Score Details */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              {config.icon}
              <span className={`ml-3 text-2xl font-bold ${config.textColor}`}>
                {scoreLabel}
              </span>
            </div>
            <p className="text-lg text-gray-700 mb-4">{config.message}</p>
            <div className="flex items-center justify-center lg:justify-start space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{percentage}%</div>
                <div className="text-sm text-gray-500">Overall Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-dataops-600">5</div>
                <div className="text-sm text-gray-500">Areas Assessed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action */}
      <div className="bg-gradient-to-r from-dataops-600 to-dataops-700 rounded-xl p-6 text-white text-center">
        <div className="flex items-center justify-center mb-3">
          <CheckCircle className="h-6 w-6 mr-2" />
          <span className="font-semibold">Ready for Action?</span>
        </div>
        <p className="mb-4">Your personalized improvement plan is ready below. Let's get started!</p>
      </div>
    </div>
  );
};

export default ResultsOverview;
