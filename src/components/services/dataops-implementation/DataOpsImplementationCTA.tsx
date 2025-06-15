
import React from 'react';

const DataOpsImplementationCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-dataops-600 to-dataops-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-rubik">
            Ready to Scale Your Portfolio Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90 font-roboto">
            Join 50+ PE firms that have transformed their portfolio performance with our DataOps implementation.
            Get your free assessment and implementation roadmap.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">100 Days</div>
              <div className="text-sm opacity-80">Full Implementation</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">$18-22</div>
              <div className="text-sm opacity-80">ROI Multiple</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">73%</div>
              <div className="text-sm opacity-80">Efficiency Gain</div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <a 
              href="/data-operations-assessment" 
              className="bg-white text-dataops-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Get Free Assessment
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-dataops-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Schedule Consultation
            </a>
          </div>

          <p className="mt-6 text-sm opacity-75 font-roboto">
            Free 30-minute consultation • No obligation • Portfolio assessment included
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataOpsImplementationCTA;
