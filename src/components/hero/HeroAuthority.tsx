
import React from 'react';

const HeroAuthority = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
          Companies Trust DataOps Group to Transform Their HubSpot and Operations
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <p className="text-lg font-semibold text-blue-600 mb-2">
              "Increased qualified leads by 47% in 90 days"
            </p>
            <p className="text-gray-600">
              - Audio Visual Equipment Wholesaler
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <p className="text-lg font-semibold text-blue-600 mb-2">
              "Reduced sales cycle by 28%"
            </p>
            <p className="text-gray-600">
              - Multi-National Insurance
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <p className="text-lg font-semibold text-blue-600 mb-2">
              "Achieved 35% improvement in close rates"
            </p>
            <p className="text-gray-600">
              - SaaS Healthcare
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAuthority;
