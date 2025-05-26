
import React from 'react';
import { Lightbulb, BookOpen, Users, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: 'Discovery',
    description: 'We assess your current data landscape, identify challenges, and define clear objectives.',
    color: 'bg-blue-500'
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: 'Strategy',
    description: 'Our team designs a tailored roadmap to transform your data operations approach.',
    color: 'bg-teal-500'
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Implementation',
    description: 'We execute the plan, integrating solutions that address your specific needs.',
    color: 'bg-purple-500'
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: 'Optimization',
    description: 'Continuous improvement ensures your data operations evolve with your business.',
    color: 'bg-amber-500'
  }
];

const Approach = () => {
  return (
    <section id="approach" className="pt-10 pb-16 md:pt-16 md:pb-24 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Approach</span>
          </h2>
          <p className="text-lg text-gray-600">
            A systematic methodology that delivers reliable results
          </p>
        </div>

        <div className="relative">
          {/* Removed the connection line divs */}
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-6`}>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-center text-gray-600">{step.description}</p>
                
                {/* Removed the horizontal connection lines between steps */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
