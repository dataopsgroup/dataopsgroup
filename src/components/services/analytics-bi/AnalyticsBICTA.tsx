
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Users } from 'lucide-react';

const AnalyticsBICTA = () => {
  return (
    <section className="text-center mb-12">
      <div className="bg-gradient-to-r from-dataops-950 to-dataops-800 text-white rounded-lg p-8">
        <div className="flex justify-center mb-6">
          <div className="flex space-x-4">
            <BarChart3 className="h-8 w-8 text-brand-saffron" />
            <TrendingUp className="h-8 w-8 text-brand-saffron" />
            <Users className="h-8 w-8 text-brand-saffron" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data into Competitive Advantage?</h2>
        <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
          Join 100+ companies that have transformed their decision-making with our analytics solutions. 
          Get actionable insights in 30 days or less. Start with our{' '}
          <Link to="/data-operations-assessment" className="text-brand-saffron hover:text-brand-saffron/80 font-medium underline">
            free 10-minute assessment
          </Link>
          {' '}to discover your biggest opportunities.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8 text-sm">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="font-semibold text-brand-saffron mb-1">90% Faster</div>
            <div className="opacity-90">Report generation time</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="font-semibold text-brand-saffron mb-1">$2.1M Average</div>
            <div className="opacity-90">Annual ROI increase</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="font-semibold text-brand-saffron mb-1">30 Days</div>
            <div className="opacity-90">To first insights</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-brand-saffron hover:bg-brand-saffron/90 text-white text-lg px-8 py-4">
            <Link to="/book">Schedule Your Strategy Session</Link>
          </Button>
          <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-dataops-950 text-lg px-8 py-4">
            <Link to="/data-operations-assessment">Start Free Assessment</Link>
          </Button>
        </div>
        
        <p className="mt-4 text-sm opacity-75">
          No commitment required • 15-minute consultation • Immediate insights
        </p>
      </div>
    </section>
  );
};

export default AnalyticsBICTA;
