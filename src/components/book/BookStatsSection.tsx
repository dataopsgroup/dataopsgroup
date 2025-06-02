
import React from 'react';

const BookStatsSection = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="stat-item">
            <span className="block text-4xl font-extrabold text-blue-600 mb-2">50+</span>
            <span className="text-gray-600 font-medium">Companies Transformed</span>
          </div>
          <div className="stat-item">
            <span className="block text-4xl font-extrabold text-blue-600 mb-2">15+</span>
            <span className="text-gray-600 font-medium">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="block text-4xl font-extrabold text-blue-600 mb-2">100%</span>
            <span className="text-gray-600 font-medium">Data-Driven Strategies</span>
          </div>
          <div className="stat-item">
            <span className="block text-4xl font-extrabold text-blue-600 mb-2">60</span>
            <span className="text-gray-600 font-medium">Days to Results</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookStatsSection;
