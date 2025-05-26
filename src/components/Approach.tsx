import React from 'react';
import { Search, Wrench, TrendingUp } from 'lucide-react';
const steps = [{
  icon: <Search className="h-10 w-10" />,
  title: 'Deep Audit',
  subtitle: 'Week 1',
  description: 'We analyze your data quality, workflow efficiency, and team processes to identify exactly what\'s killing your ROI.',
  color: 'bg-blue-500'
}, {
  icon: <Wrench className="h-10 w-10" />,
  title: 'Strategic Fix',
  subtitle: 'Week 2',
  description: 'We implement the critical changes needed to stop revenue leaks and get your teams aligned.',
  color: 'bg-orange-500'
}, {
  icon: <TrendingUp className="h-10 w-10" />,
  title: 'Optimization & Training',
  subtitle: 'Week 3',
  description: 'We fine-tune performance and ensure your team can maintain the improvements long-term.',
  color: 'bg-green-500'
}];
const Approach = () => {
  return <section id="approach" className="pt-10 pb-16 md:pt-16 md:pb-24 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-gray-600">A systematic process that delivers reliable results</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-6`}>
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2">Step {index + 1}: {step.title}</h3>
              <p className="text-sm font-medium text-gray-500 mb-3">({step.subtitle})</p>
              <p className="text-center text-gray-600">{step.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Approach;