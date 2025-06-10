
import React from 'react';
import { Search, Wrench, TrendingUp } from 'lucide-react';

const steps = [{
  icon: <Search className="h-10 w-10" />,
  title: 'PE-Standard Assessment',
  description: 'We audit operations against PE growth expectations and identify gaps that slow portfolio value creation.',
  color: 'bg-blue-500'
}, {
  icon: <Wrench className="h-10 w-10" />,
  title: 'Rapid Implementation',
  description: 'We deploy proven HubSpot systems designed for PE portfolio scalability and investor reporting requirements.',
  color: 'bg-orange-500'
}, {
  icon: <TrendingUp className="h-10 w-10" />,
  title: 'Portfolio Optimization',
  description: 'We optimize for the metrics PE firms track and ensure systems can scale across other portfolio companies.',
  color: 'bg-green-500'
}];

const Approach = () => {
  return (
    <section id="approach" className="pt-10 pb-16 md:pt-16 md:pb-24 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            A systematic process that delivers reliable results. Learn more about our comprehensive <a href="/approach" className="text-dataops-600 hover:text-dataops-700 underline font-medium">methodology</a> and see how we've helped other <a href="/case-studies" className="text-dataops-600 hover:text-dataops-700 underline font-medium">portfolio companies</a> achieve success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-6`}>
                {step.icon}
              </div>
              
              <h3 className="approach-step-title">Step {index + 1}: {step.title}</h3>
              <p className="text-center text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Ready to get started? <a href="/contact" className="text-dataops-600 hover:text-dataops-700 underline font-medium">Contact our team</a> or learn more about our <a href="/services" className="text-dataops-600 hover:text-dataops-700 underline font-medium">comprehensive services</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Approach;
