
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaseStudiesIndustries = () => {
  // Industry list
  const industries = [
    'Finance & Banking',
    'Healthcare & Life Sciences',
    'Manufacturing',
    'Retail & E-commerce',
    'Technology',
    'Insurance',
    'Logistics & Supply Chain',
    'Energy & Utilities',
  ];

  return (
    <section className="bg-gray-50 p-8 rounded-lg space-y-6">
      <h2 className="text-2xl font-semibold">Industries We Serve</h2>
      <p className="text-gray-700">
        Our data solutions have been successfully implemented across various industries:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8">
        {industries.map((industry, index) => (
          <Link key={index} to="/services" className="text-dataops-600 hover:underline">
            {industry}
          </Link>
        ))}
      </div>
      <div className="mt-4">
        <Link to="/contact" className="inline-flex items-center text-dataops-600 hover:text-dataops-800">
          Want to see how we can help your industry? Contact us
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default CaseStudiesIndustries;
