
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MarketingOperationsRevOpsHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-dataops-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dataops-100 text-dataops-800 text-sm font-medium mb-2">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Marketing Operations & RevOps
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              Align your marketing, sales, and customer success operations to create a unified 
              revenue engine that drives growth, improves customer experience, and maximizes ROI.
            </p>
            <div className="pt-6">
              <Button className="bg-dataops-600 hover:bg-dataops-700 px-6 py-6 text-base" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
              <img 
                src="/lovable-uploads/351b0f9b-3348-45c7-8d09-8ff53700ac30.png"
                alt="Network cables and server infrastructure representing marketing operations"
                className="w-full h-64 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingOperationsRevOpsHero;
