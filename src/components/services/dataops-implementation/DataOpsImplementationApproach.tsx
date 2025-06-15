
import React from 'react';

const DataOpsImplementationApproach = () => {
  const approaches = [
    {
      phase: "Assessment",
      title: "Current State Analysis",
      description: "Evaluate existing systems, processes, and data flows across portfolio companies",
      timeline: "Week 1-2"
    },
    {
      phase: "Design",
      title: "Architecture Planning",
      description: "Create standardized frameworks and integration blueprints for scalable implementation",
      timeline: "Week 3-4"
    },
    {
      phase: "Implementation",
      title: "Phased Rollout",
      description: "Deploy DataOps solutions systematically across portfolio with minimal disruption",
      timeline: "Week 5-12"
    },
    {
      phase: "Optimization",
      title: "Performance Tuning",
      description: "Monitor, refine, and optimize systems for maximum efficiency and ROI",
      timeline: "Ongoing"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-rubik">
              Our Implementation Approach
            </h2>
            <p className="text-lg text-gray-600 font-roboto">
              Systematic methodology ensuring successful DataOps deployment across your portfolio
            </p>
          </div>

          <div className="space-y-8">
            {approaches.map((approach, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-dataops-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 font-rubik">
                      {approach.title}
                    </h3>
                    <span className="text-sm text-dataops-600 font-medium bg-dataops-50 px-3 py-1 rounded-full">
                      {approach.timeline}
                    </span>
                  </div>
                  <p className="text-gray-600 font-roboto leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-dataops-50 to-white p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 font-rubik">
              Why Our Approach Works
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Portfolio-Focused</h4>
                <p className="text-gray-600 text-sm">Designed specifically for private equity operational needs</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Scalable Framework</h4>
                <p className="text-gray-600 text-sm">Standardized processes that work across diverse companies</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Rapid Implementation</h4>
                <p className="text-gray-600 text-sm">Proven methodology delivers results in 100 days or less</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Measurable ROI</h4>
                <p className="text-gray-600 text-sm">Clear metrics and performance tracking from day one</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataOpsImplementationApproach;
