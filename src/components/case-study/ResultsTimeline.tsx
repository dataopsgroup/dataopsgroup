
import React from 'react';

interface TimelineItem {
  month: string;
  title: string;
  description: string;
  metric: string;
}

interface ResultsTimelineProps {
  timeline: TimelineItem[];
}

const ResultsTimeline = ({ timeline }: ResultsTimelineProps) => {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-dataops-950 mb-8 text-center">18-Month Results Timeline</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-saffron-500 hidden md:block"></div>
        
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="relative flex items-start">
              {/* Timeline marker */}
              <div className="relative z-10 bg-saffron-500 text-white px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap">
                {item.month}
              </div>
              
              {/* Content */}
              <div className="ml-8 bg-white p-6 rounded-xl shadow-md flex-1">
                <h4 className="text-lg font-semibold text-dataops-950 mb-2">{item.title}</h4>
                <p className="text-gray-700 mb-3">{item.description}</p>
                <div className="text-saffron-600 font-semibold">{item.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsTimeline;
