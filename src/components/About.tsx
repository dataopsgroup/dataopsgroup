
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const benefits = [
    'Over 15 years of industry experience',
    'Team of certified data specialists',
    'Proven methodologies with tangible results',
    'Tailored solutions for your specific challenges',
    'Ongoing support and knowledge transfer',
  ];

  return (
    <section id="about" className="section-padding bg-dataops-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">DataOps Group</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              DataOps Group is a premier consulting firm specializing in data operations 
              excellence. We partner with organizations to optimize their data workflows, 
              enhance data quality, and accelerate value delivery from their data investments.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Our team combines deep technical expertise with business acumen to deliver 
              solutions that not only solve immediate data challenges but also create 
              sustainable competitive advantages.
            </p>
            
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-dataops-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
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
