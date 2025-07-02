
import React from 'react';

const HeroContentSection = () => {
  return (
    <section className="hero-content-section py-16 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="hero-content-grid grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-gray-700">
                We are PE-specialized HubSpot experts who transform fragmented systems into unified platforms that drive EBITDA growth, improve operational efficiency, and create the data infrastructure your investors expect.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-3xl font-bold text-dataops-600 mb-2">19%</div>
                  <div className="text-sm text-gray-600">Higher portfolio company valuations with standardized operations</div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">73%</div>
                  <div className="text-sm text-gray-600">Faster EBITDA growth through data-driven insights</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Ready to Transform Your Portfolio Operations?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/data-operations-assessment"
                  className="bg-dataops-600 hover:bg-dataops-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Assess Your PE Readiness
                </a>
                <a 
                  href="/revops-roi-calculator"
                  className="border-2 border-dataops-600 text-dataops-600 hover:bg-dataops-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Calculate ROI Impact
                </a>
              </div>
            </div>
          </div>
          
          {/* Right column - Visual elements */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">
                Platform Transformation Results
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Revenue Operations Efficiency</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm font-semibold text-green-600">+85%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Data Quality Score</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <span className="text-sm font-semibold text-blue-600">92%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Process Standardization</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <span className="text-sm font-semibold text-purple-600">+78%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                ⚡ 100-Day Implementation Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContentSection;
