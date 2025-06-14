
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AnalyticsBICTA = () => {
  return (
    <section className="text-center">
      <div className="bg-gradient-to-r from-dataops-600 to-dataops-700 text-white rounded-lg p-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-rubik">Ready to Transform Your Data Into Insights?</h2>
        <p className="text-xl mb-8 opacity-95 font-roboto leading-relaxed max-w-3xl mx-auto">
          Let's discuss how our analytics and BI services can help you make better data-driven decisions that drive measurable business growth. 
          Start with our comprehensive assessment or explore our other consulting services.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button asChild size="lg" className="bg-white text-dataops-600 hover:bg-gray-100 font-semibold px-8 py-3">
            <Link to="/book">Schedule a Consultation</Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="border-white text-white hover:bg-white hover:text-dataops-600 font-semibold px-8 py-3">
            <Link to="/data-operation-assessment">Free DataOps Assessment</Link>
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
          <Link to="/case-studies" className="hover:text-brand-saffron underline transition-colors">
            View Success Stories
          </Link>
          <Link to="/services" className="hover:text-brand-saffron underline transition-colors">
            Explore Other Services
          </Link>
          <Link to="/insights" className="hover:text-brand-saffron underline transition-colors">
            Read Our Insights
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsBICTA;
