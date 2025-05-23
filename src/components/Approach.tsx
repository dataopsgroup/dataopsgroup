
import React from 'react';
import { X } from 'lucide-react';

const Approach = () => {
  return (
    <section id="approach" className="pt-10 pb-16 md:pt-16 md:pb-24 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sound Familiar?
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6">
            {[
              "Your marketing and sales teams are fighting over lead quality",
              "Deals are stuck in your pipeline with no clear reason why",
              "You're spending more time managing HubSpot than growing revenue",
              "Your dashboards show activity but not actual business impact"
            ].map((problem, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-5 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 mt-1">
                  <X className="h-5 w-5 text-red-500" />
                </div>
                <p className="text-lg text-gray-800">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
