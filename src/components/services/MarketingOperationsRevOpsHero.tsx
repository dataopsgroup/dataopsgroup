
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MarketingOperationsRevOpsHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-dataops-50">
      <div className="container mx-auto">
        <div className="flex justify-center mb-6">
          <Link 
            to="/insights" 
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors flex items-center"
          >
            Back to Insights
          </Link>
        </div>
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dataops-100 text-dataops-800 text-sm font-medium mb-2">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Marketing Data Management & Analytics
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              Leverage your marketing data to gain insights, improve campaign performance, and drive revenue growth with our comprehensive marketing data management and analytics services.
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
                src="/lovable-uploads/38a717bc-5952-4682-b390-57a9de301649.png"
                alt="Marketing data analytics dashboard showing traffic overview metrics"
                className="w-full h-auto object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingOperationsRevOpsHero;
