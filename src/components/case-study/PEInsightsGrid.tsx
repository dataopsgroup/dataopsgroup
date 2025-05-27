
import React from 'react';
import { BarChart3, Zap, Target } from 'lucide-react';

const PEInsightsGrid = () => {
  const insights = [
    {
      icon: <BarChart3 className="h-8 w-8 text-saffron-500" />,
      title: "Scalable Framework",
      description: "This approach can be replicated across similar B2B companies in your portfolio"
    },
    {
      icon: <Zap className="h-8 w-8 text-saffron-500" />,
      title: "Fast ROI",
      description: "12-month payback period with continued growth beyond initial investment"
    },
    {
      icon: <Target className="h-8 w-8 text-saffron-500" />,
      title: "Operational Excellence",
      description: "95% reduction in manual reporting creates capacity for strategic work"
    }
  ];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-dataops-950 mb-8 text-center">
        Key Insights for PE Portfolio Companies
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {insights.map((insight, index) => (
          <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl">
            <div className="flex justify-center mb-4">{insight.icon}</div>
            <h4 className="text-lg font-semibold text-dataops-950 mb-3">{insight.title}</h4>
            <p className="text-gray-700">{insight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PEInsightsGrid;
