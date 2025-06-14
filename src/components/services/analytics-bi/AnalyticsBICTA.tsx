
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AnalyticsBICTA = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Data into Insights?</h2>
      <p className="text-gray-600 mb-8">
        Let's discuss how our analytics and BI services can help you make better data-driven decisions. 
        Start with our 
        <Link to="/data-operation-assessment" className="text-dataops-600 hover:text-dataops-800 font-medium">
          free assessment
        </Link>
        or explore our other 
        <Link to="/services" className="text-dataops-600 hover:text-dataops-800 font-medium">
          consulting services
        </Link>.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild className="bg-dataops-600 hover:bg-dataops-700">
          <Link to="/book">Schedule a Consultation</Link>
        </Button>
        <Button variant="outline" asChild className="border-dataops-600 text-dataops-600 hover:bg-dataops-50">
          <Link to="/case-studies">View Success Stories</Link>
        </Button>
      </div>
    </div>
  );
};

export default AnalyticsBICTA;
