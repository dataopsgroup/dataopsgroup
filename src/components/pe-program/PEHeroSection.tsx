import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PEHeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-dataops-950 to-dataops-600 text-white mt-[8px] pt-16 pb-16 md:pb-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">
          The 100-Day Portfolio Company Transformation Program
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Turn Operational Chaos Into Value Creation Engines
        </h2>
        <p className="text-lg md:text-xl mb-12 text-blue-100 max-w-4xl mx-auto">
          Unlike generic consultants who treat every business the same, we've developed the only systematic approach designed specifically for PE portfolio companies' unique challenges and timelines.
        </p>
        <div className="flex justify-center">
          <Link to="/contact">
            <Button className="bg-saffron-500 hover:bg-saffron-600 text-dataops-950 font-semibold px-8 py-3 text-lg bg-brand-saffron">
              Get Your Custom Assessment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PEHeroSection;
