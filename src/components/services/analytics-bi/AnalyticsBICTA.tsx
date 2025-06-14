
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AnalyticsBICTA = () => {
  return (
    <section className="text-center mb-12">
      <div className="bg-gradient-to-r from-dataops-950 to-dataops-800 text-white rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data into Insights?</h2>
        <p className="text-lg mb-6 opacity-90">
          Let's discuss how our analytics and BI services can help you make better data-driven decisions. 
          Start with our{' '}
          <Link to="/data-operations-assessment" className="text-brand-saffron hover:text-brand-saffron/80 font-medium underline">
            free assessment
          </Link>
          {' '}or explore our other{' '}
          <Link to="/services" className="text-brand-saffron hover:text-brand-saffron/80 font-medium underline">
            consulting services
          </Link>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-brand-saffron hover:bg-brand-saffron/90 text-white">
            <Link to="/book">Schedule a Consultation</Link>
          </Button>
          <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-dataops-950">
            <Link to="/case-studies">View Success Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsBICTA;
