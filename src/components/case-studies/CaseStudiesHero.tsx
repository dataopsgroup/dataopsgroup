
import React from 'react';

const CaseStudiesHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-dataops-50">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dataops-100 text-dataops-800 text-sm font-medium mb-2">
              Success Stories
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Case <span className="text-dataops-600">Studies</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              Discover how DataOps Group has helped organizations across industries transform their 
              data operations and achieve measurable business outcomes. Our case studies showcase 
              real-world applications of our proven methodology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
