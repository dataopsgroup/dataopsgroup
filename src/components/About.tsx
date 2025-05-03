
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const benefits = [
    {
      text: 'Over 15 years of industry experience',
      color: 'bg-blue-400'
    },
    {
      text: 'Team of certified data specialists',
      color: 'bg-green-400'
    },
    {
      text: 'Proven methodologies with tangible results',
      color: 'bg-purple-400'
    },
    {
      text: 'Tailored solutions for your specific challenges',
      color: 'bg-orange-400'
    },
    {
      text: 'Ongoing support and knowledge transfer',
      color: 'bg-pink-400'
    }
  ];

  return (
    <section id="about" className="section-padding bg-dataops-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dataops-600">
              About DataOps Group
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              DataOps Group tackles the frustrating data chaos that's costing you millions in wasted resources and missed opportunities. While others push generic solutions, we specialize in transforming your messy, siloed data operations into streamlined revenue-generating systems.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Tired of data projects that drain budgets without delivering results? Our team combines battle-tested technical expertise with real-world business knowledge to create practical solutions that eliminate immediate data headaches while building lasting competitive advantages your competitors can't match.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className={`h-4 w-4 rounded-full ${benefit.color} mr-4 flex-shrink-0`}></div>
                  <span className="text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-dataops-100 rounded-full filter blur-3xl opacity-50"></div>
            <div className="relative bg-white p-8 rounded-lg shadow-lg">
              <div className="aspect-video bg-dataops-800 rounded-md flex items-center justify-center">
                <div className="text-white font-medium">Company Video</div>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="border border-dataops-100 rounded-md p-4 text-center">
                  <div className="text-4xl font-bold gradient-text">150+</div>
                  <div className="text-sm text-gray-600 mt-2">Clients Served</div>
                </div>
                <div className="border border-dataops-100 rounded-md p-4 text-center">
                  <div className="text-4xl font-bold gradient-text">98%</div>
                  <div className="text-sm text-gray-600 mt-2">Client Satisfaction</div>
                </div>
                <div className="border border-dataops-100 rounded-md p-4 text-center">
                  <div className="text-4xl font-bold gradient-text">50M+</div>
                  <div className="text-sm text-gray-600 mt-2">Data Points Processed</div>
                </div>
                <div className="border border-dataops-100 rounded-md p-4 text-center">
                  <div className="text-4xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-gray-600 mt-2">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
