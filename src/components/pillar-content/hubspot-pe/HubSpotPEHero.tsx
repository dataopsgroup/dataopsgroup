
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HubSpotPEHero = () => {
  return (
    <section className="pt-0 pb-16 px-4 bg-blue-50 -mt-[109px]">
      <div className="container mx-auto pt-[25px]">
        <div className="max-w-4xl">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dataops-950 text-brand-saffron text-sm font-medium mb-2">
              Private Equity Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              HubSpot for Private Equity: Beyond Spreadsheets to Strategic Advantage
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
              Transform portfolio operations into competitive advantages with standardized HubSpot implementations. 
              Get the complete guide to CRM selection, implementation, and ROI optimization for private equity firms.
            </p>
            
            {/* Enhanced Introduction for Better SEO */}
            <div className="mt-6 p-6 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                Private equity firms managing multiple portfolio companies face unique operational challenges that traditional CRMs cannot address. 
                Spreadsheet-based reporting creates data silos, manual processes slow down deal velocity, and inconsistent systems across portfolio companies 
                make it impossible to generate reliable investor reports. Our comprehensive guide demonstrates how HubSpot's multi-entity architecture 
                solves these challenges while delivering measurable ROI improvements of 18-22x in the first year. Learn proven methodologies used by 
                leading PE firms to standardize operations, accelerate value creation, and enhance portfolio company performance through strategic 
                technology implementation.
              </p>
            </div>
            
            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="flex items-center space-x-3">
                <div>
                  <h3 className="font-semibold text-gray-900">19% Higher Valuations</h3>
                  <p className="text-sm text-gray-600">Data-driven operations</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div>
                  <h3 className="font-semibold text-gray-900">100-Day Implementation</h3>
                  <p className="text-sm text-gray-600">Proven methodology</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div>
                  <h3 className="font-semibold text-gray-900">$18-22 ROI</h3>
                  <p className="text-sm text-gray-600">Per dollar invested</p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/data-operations-assessment"
                className="bg-dataops-600 hover:bg-dataops-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Assess Your PE Readiness
                <ChevronRight className="h-5 w-5 ml-2" />
              </Link>
              <Link 
                to="/revops-roi-calculator"
                className="border-2 border-dataops-600 text-dataops-600 hover:bg-dataops-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Calculate ROI Impact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubSpotPEHero;
