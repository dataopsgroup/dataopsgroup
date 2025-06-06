
import React from 'react';

const ApproachHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-dataops-50">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dataops-100 text-dataops-800 text-sm font-medium mb-2">
              Our Methodology
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Our <span className="text-dataops-600">Systematic Approach</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              We follow a proven, repeatable methodology that consistently delivers results for our clients. Our structured approach ensures every implementation meets private equity standards for scalability, reporting, and operational excellence.
            </p>
            
            {/* Assessment CTA - unique to approach page */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">See Where You Stand Before We Begin</h3>
              <p className="text-blue-800 mb-4">
                Our methodology starts with understanding your current operational maturity. Take our comprehensive assessment to see exactly where improvements will deliver the highest impact on your growth metrics.
              </p>
              <a href="/data-operations-assessment" className="inline-flex items-center bg-dataops-600 hover:bg-dataops-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Assess Your Current Operations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachHero;
