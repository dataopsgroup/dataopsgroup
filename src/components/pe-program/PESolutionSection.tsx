import React from 'react';
import { Target, Cog, Rocket } from 'lucide-react';
const PESolutionSection = () => {
  const differentiators = [{
    icon: Target,
    title: "PE-Native Understanding",
    description: "We speak your language: EBITDA, value creation, exit multiples",
    details: ["Built-in board reporting and investor communication frameworks", "Designed around your 3-7 year value creation timeline"]
  }, {
    icon: Cog,
    title: "Battle-Tested Methodology",
    description: "Proven across dozens of portfolio company transformations",
    details: ["Industry-specific templates that reduce implementation risk", "Systematic quality controls ensure consistent outcomes"]
  }, {
    icon: Rocket,
    title: "Rapid Time-to-Value",
    description: "Foundation results in 100 days, full transformation in 6-18 months",
    details: ["Immediate operational improvements while building long-term capability", "Your team becomes 90% self-sufficient, with us as strategic partners"]
  }];
  return <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Only 100-Day Program Built for PE Portfolio Companies
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our systematic approach transforms operational chaos into the unified, efficient systems your investment committee expects—without disrupting daily operations.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">What Makes Us Different?</h3>

        <div className="grid lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <item.icon className="h-12 w-12 text-dataops-600 mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h4>
              <p className="text-gray-600 mb-4">
                {item.description}
              </p>
              <ul className="space-y-2">
                {item.details.map((detail, idx) => <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="text-dataops-600 mr-2">•</span>
                    {detail}
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
    </section>;
};
export default PESolutionSection;