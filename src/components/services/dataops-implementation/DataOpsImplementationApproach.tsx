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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-rubik">
              Our Implementation Approach
            </h2>
            <p className="text-lg text-gray-600 font-roboto">
              Systematic methodology ensuring successful DataOps deployment across your portfolio
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="mb-12">
            {/* Timeline Headers */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {approaches.map((approach, index) => (
                <div key={index} className="text-center">
                  <div className="bg-dataops-600 text-white px-4 py-2 rounded-lg font-semibold text-sm mb-2">
                    {approach.timeline}
                  </div>
                  <div className="h-1 bg-dataops-200 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-dataops-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline Content */}
            <div className="grid grid-cols-4 gap-4">
              {approaches.map((approach, index) => (
                <div key={index} className="bg-gradient-to-br from-dataops-50 to-white p-6 rounded-xl border border-dataops-200">
                  <div className="flex items-center justify-center w-8 h-8 bg-dataops-600 text-white rounded-full font-bold text-sm mb-4 mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 font-rubik text-center">
                    {approach.title}
                  </h3>
                  <p className="text-gray-600 font-roboto text-sm leading-relaxed text-center">
                    {approach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Keep the "Why Our Approach Works" section exactly as it was */}
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
