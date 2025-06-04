import React from 'react';
import { TrendingUp } from 'lucide-react';
const PESocialProofSection = () => {
  const statistics = [{
    percentage: "87%",
    description: "of portfolio companies achieve measurable operational improvements within 90 days"
  }, {
    percentage: "$18-22 ROI",
    description: "for every dollar invested in the program"
  }, {
    percentage: "19%",
    description: "higher valuations for companies with professionally implemented systems"
  }];
  return <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Proven Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Portfolio companies consistently achieve measurable improvements and enhanced valuations
          </p>
        </div>

        {/* Statistics */}
        <div>
          <div className="flex items-center justify-center mb-8">
            
            <h3 className="text-2xl font-bold text-gray-900">By the Numbers</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => <div key={index} className="text-center bg-white p-8 rounded-lg shadow-sm border">
                <div className="text-4xl font-bold text-dataops-600 mb-4">
                  {stat.percentage}
                </div>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default PESocialProofSection;