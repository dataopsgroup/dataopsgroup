
import React from 'react';

const CaseStudiesHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white via-dataops-50 to-saffron-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-dataops-950 text-brand-saffron text-sm font-medium mb-4">
              Success Stories
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Portfolio Company Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Measurable growth transformations across diverse industries. See how we've delivered 
              <span className="font-semibold text-dataops-600"> proven ROI</span> and 
              <span className="font-semibold text-dataops-600"> operational excellence</span> for 
              portfolio companies like yours.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 pt-4">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-saffron-500 rounded-full mr-2"></span>
                Revenue Growth Metrics
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-dataops-500 rounded-full mr-2"></span>
                Operational Efficiency
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-saffron-500 rounded-full mr-2"></span>
                Scalable Solutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
