
import React from 'react';

const ServicesHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-dataops-50">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dataops-100 text-dataops-800 text-sm font-medium mb-2">
              What We Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Our <span className="text-dataops-600">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              At DataOps Group, we provide comprehensive data operation solutions designed 
              to transform how your organization manages, processes, and leverages data. Our expert team delivers 
              tailored services to meet your specific business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
