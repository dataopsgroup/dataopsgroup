
import React from 'react';
import { ChevronRight, BarChart2, Database, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="pt-24 pb-16 md:py-32 px-4 bg-gradient-to-br from-white to-dataops-50">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Maximize Your Data's <span className="gradient-text">Potential</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-lg">
              We help businesses transform their data operations to drive efficiency, 
              insights, and innovation across their organization.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-dataops-600 hover:bg-dataops-700 px-6 py-6 text-base">
              Schedule a Consultation
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-dataops-600 text-dataops-600 hover:bg-dataops-50 px-6 py-6 text-base">
              View Our Services
            </Button>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-dataops-100 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-dataops-200 rounded-full filter blur-3xl opacity-50"></div>
          
          <div className="relative bg-white rounded-2xl shadow-xl p-8 z-10">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center p-6 bg-dataops-50 rounded-lg">
                <Database className="h-10 w-10 text-dataops-600 mb-4" />
                <h3 className="font-medium text-dataops-800">Data Integration</h3>
              </div>
              <div className="flex flex-col items-center p-6 bg-dataops-50 rounded-lg">
                <BarChart2 className="h-10 w-10 text-dataops-600 mb-4" />
                <h3 className="font-medium text-dataops-800">Analytics</h3>
              </div>
              <div className="flex flex-col items-center p-6 bg-dataops-50 rounded-lg">
                <Share2 className="h-10 w-10 text-dataops-600 mb-4" />
                <h3 className="font-medium text-dataops-800">Data Sharing</h3>
              </div>
              <div className="flex flex-col items-center p-6 bg-white border border-dataops-100 rounded-lg shadow-sm">
                <div className="h-10 w-10 rounded-full bg-dataops-100 flex items-center justify-center mb-4">
                  <span className="text-dataops-700 font-bold">+</span>
                </div>
                <h3 className="font-medium text-dataops-800">And More</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
