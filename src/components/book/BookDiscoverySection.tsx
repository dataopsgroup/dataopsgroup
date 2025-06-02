
import React from 'react';

const BookDiscoverySection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What You'll Discover</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your marketing data from chaos to clarity with proven frameworks and actionable strategies.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="discover-card bg-white p-10 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-3xl mb-6">
              🏗️
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Data Organization Framework</h3>
            <p className="text-gray-600 leading-relaxed">
              Learn how to identify and organize the most valuable data in your marketing ecosystem for maximum impact. 
              Build a foundation that scales with your business growth.
            </p>
          </div>
          <div className="discover-card bg-white p-10 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center text-3xl mb-6">
              🗣️
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Executive Communication</h3>
            <p className="text-gray-600 leading-relaxed">
              Master techniques to communicate data insights effectively to C-suite executives and stakeholders. 
              Turn complex analytics into compelling business narratives.
            </p>
          </div>
          <div className="discover-card bg-white p-10 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center text-3xl mb-6">
              🚀
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Revenue Acceleration</h3>
            <p className="text-gray-600 leading-relaxed">
              Develop strategies that transform marketing data into tangible business revenue and growth. 
              Implement systems that deliver measurable ROI within 60 days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDiscoverySection;
