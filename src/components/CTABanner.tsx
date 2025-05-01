
import React from 'react';
import { Button } from '@/components/ui/button';

const CTABanner = () => {
  return (
    <section className="gradient-bg py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Turn Your Data Into Revenue?
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Schedule a consultation with our team to discover how DataOps Group can help you 
          unlock the full potential of your data assets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-dataops-800 hover:bg-gray-100">
            Schedule a Consultation
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
