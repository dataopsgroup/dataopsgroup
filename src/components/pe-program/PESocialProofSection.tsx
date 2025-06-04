import React from 'react';
import { TrendingUp } from 'lucide-react';
const PESocialProofSection = () => {
  const statistics = [{
    percentage: "67%",
    description: "of companies report improved sales productivity after CRM optimization¹"
  }, {
    percentage: "245% ROI",
    description: "average from marketing automation implementations²"
  }, {
    percentage: "18%",
    description: "more likely to have high growth rates for companies with mature sales processes³"
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
          
          <div className="grid md:grid-cols-3 gap-8 text-red-600 text-2xl">
            {statistics.map((stat, index) => <div key={index} className="text-center bg-white p-8 rounded-lg shadow-sm border">
                <div className="text-4xl font-bold text-dataops-600 mb-4">
                  {stat.percentage}
                </div>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>)}
          </div>

          {/* Citations */}
          <div className="mt-8 text-center text-sm text-gray-500 space-y-1">
            <p>¹ Source: Salesforce State of Sales Report 2024</p>
            <p>² Source: Nucleus Research: Marketing Automation ROI Study</p>
            <p>³ Source: HubSpot Sales Enablement Report</p>
          </div>
        </div>
      </div>
    </section>;
};
export default PESocialProofSection;