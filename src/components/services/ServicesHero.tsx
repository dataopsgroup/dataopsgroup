
import React from 'react';

const ServicesHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-dataops-50">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dataops-950 text-brand-saffron text-sm font-medium mb-2">
              What We Offer
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              HubSpot & DataOps Services
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              Expert HubSpot implementation, marketing operations, and data services that drive 
              measurable portfolio growth. Specialized for PE firms and growing companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
