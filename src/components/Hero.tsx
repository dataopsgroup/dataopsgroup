
import React from 'react';
import { ChevronRight, BarChart2, Database, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="pt-24 pb-16 md:py-32 px-4 bg-gradient-to-br from-white to-dataops-50">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Fix Your <span className="text-dataops-600">HubSpot Ordeal</span>, Generate Revenue
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-lg">
              It's not HubSpot that's failing you—it's your disorganized data and setup. We convert chaotic, scattered HubSpot portals into organized revenue engines that turn your existing contacts into paying customers.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button className="bg-dataops-600 hover:bg-dataops-700 px-6 py-6 text-base">
                Schedule a Consultation
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" className="border-dataops-600 text-dataops-600 hover:bg-dataops-50 px-6 py-6 text-base" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-dataops-100 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-dataops-200 rounded-full filter blur-3xl opacity-50"></div>
          
          <div className="relative bg-white rounded-2xl shadow-xl p-8 z-10">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg text-white">
                <Database className="h-10 w-10 mb-4" />
                <h3 className="text-sm font-medium">HubSpot Cleansing</h3>
              </div>
              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg text-white">
                <BarChart2 className="h-10 w-10 mb-4" />
                <h3 className="text-sm font-medium">Revenue Conversion</h3>
              </div>
              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg text-white">
                <Share2 className="h-10 w-10 mb-4" />
                <h3 className="text-sm font-medium">Systems Integration</h3>
              </div>
              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg text-white">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <span className="font-bold">+</span>
                </div>
                <h3 className="text-sm font-medium">HubSpot Services</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
