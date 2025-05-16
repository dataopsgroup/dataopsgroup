
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/ui/optimized-image';

const DataOpsImplementationHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-dataops-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dataops-100 text-dataops-800 text-sm font-medium mb-2">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              HubSpot Integration & Customization
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              Connect your HubSpot instance with the tools and systems your business relies on. 
              Our custom integrations create seamless data flows that eliminate silos and manual processes.
            </p>
            <div className="pt-6">
              <Button className="bg-dataops-600 hover:bg-dataops-700 px-6 py-6 text-base" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-3 flex justify-end">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-xl h-96">
              <OptimizedImage 
                src="/lovable-uploads/12e641ec-9075-4921-80ad-5c42ee2a35de.png"
                alt="Person diagramming data flows and integrations on a whiteboard"
                width={600}
                height={375}
                className="w-full h-full object-cover"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataOpsImplementationHero;
