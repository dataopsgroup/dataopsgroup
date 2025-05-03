
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DataOpsImplementationHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-dataops-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
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
          
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
              <img 
                src="/lovable-uploads/12e641ec-9075-4921-80ad-5c42ee2a35de.png"
                alt="Person diagramming data flows and integrations on a whiteboard"
                className="w-full h-64 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataOpsImplementationHero;
