import React from 'react';
import { Quote, TrendingUp } from 'lucide-react';
const PESocialProofSection = () => {
  const testimonials = [{
    quote: "The Hypha team understood our PE timeline pressure and delivered exactly what our investment committee needed to see. The operational improvements were evident within 60 days, and the exit-ready systems gave us a significant valuation advantage.",
    attribution: "Portfolio Operations Manager, $500M Manufacturing Company"
  }, {
    quote: "Unlike other consultants who disappeared after implementation, Hypha built our internal capability. We're now self-sufficient for 90% of our needs and call them for strategic guidance.",
    attribution: "CEO, $100M Healthcare Services Company"
  }];
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
          
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => {})}
        </div>

        {/* Statistics */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <TrendingUp className="h-8 w-8 text-dataops-600 mr-3" />
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