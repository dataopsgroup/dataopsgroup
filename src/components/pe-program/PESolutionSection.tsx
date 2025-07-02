import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Target, Clock, TrendingUp } from 'lucide-react';
const PESolutionSection = () => {
  const solutions = [{
    icon: Target,
    title: "Systematic Assessment",
    description: "Complete operational audit with prioritized improvement roadmap"
  }, {
    icon: Clock,
    title: "Rapid Implementation",
    description: "100-day transformation program with weekly milestone tracking"
  }, {
    icon: TrendingUp,
    title: "Measurable Results",
    description: "Documented efficiency gains and EBITDA impact analysis"
  }];
  const benefits = ["Unified data architecture across all business functions", "Automated workflows that eliminate manual bottlenecks", "Real-time visibility into operational performance", "Scalable systems that support aggressive growth targets", "Team training and knowledge transfer for sustainability"];
  return <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Only 100-Day Program That Delivers Working Systems, Not Reports
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've systematized the transformation process specifically for PE portfolio companies, 
            delivering operational infrastructure that accelerates value creation
          </p>
        </div>

        {/* Solution Components */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => <div key={index} className="text-center">
              <div className="bg-dataops-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <solution.icon className="h-8 w-8 text-dataops-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>)}
        </div>

        {/* Benefits List */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What You Get
          </h3>
          <div className="max-w-3xl mx-auto">
            {benefits.map((benefit, index) => <div key={index} className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>)}
          </div>
        </div>

        {/* CTA Button */}
        
      </div>
    </section>;
};
export default PESolutionSection;