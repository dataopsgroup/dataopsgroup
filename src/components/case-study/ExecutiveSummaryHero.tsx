
import React from 'react';

interface ExecutiveSummaryHeroProps {
  title: string;
  industry: string;
  revenue: string;
  timeline: string;
  metrics: {
    primary: { value: string; label: string };
    secondary: { value: string; label: string }[];
  };
}

const ExecutiveSummaryHero = ({ title, industry, revenue, timeline, metrics }: ExecutiveSummaryHeroProps) => {
  return (
    <div className="bg-gradient-to-br from-dataops-950 to-dataops-800 text-white p-8 rounded-2xl mb-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <div className="flex flex-wrap gap-4 text-lg">
            <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">{revenue}</span>
            <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">{industry}</span>
            <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">{timeline}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-saffron-500 p-6 rounded-xl text-center transform scale-105 shadow-2xl">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metrics.primary.value}</div>
            <div className="text-white font-medium">{metrics.primary.label}</div>
          </div>
          
          {metrics.secondary.map((metric, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold mb-2">{metric.value}</div>
              <div className="text-blue-200 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummaryHero;
