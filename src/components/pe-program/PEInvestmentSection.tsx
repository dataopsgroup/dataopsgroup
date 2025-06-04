
import React from 'react';

const PEInvestmentSection = () => {
  const roiMetrics = [
    { metric: "25-40%", description: "improvement in sales productivity metrics" },
    { metric: "30-50%", description: "reduction in administrative overhead" },
    { metric: "90%+", description: "forecast accuracy improvement" },
    { metric: "2-5%", description: "EBITDA margin improvement through operational efficiency" }
  ];

  const valueExamples = [
    {
      title: "$50M Revenue Company",
      value: "$1.5-2.5M annual operational improvement"
    },
    {
      title: "Exit Multiple Impact",
      value: "10-20% valuation premium for digital readiness"
    },
    {
      title: "Time Savings",
      value: "15-20 hours/week recovered per department"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Program Investment and Expected Returns
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Portfolio-Wide Standardization */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Portfolio-Wide Standardization</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-1">Portfolio-Wide Standardization</h4>
              <p className="text-dataops-600 font-bold mb-2">Custom pricing for 3+ companies</p>
              <p className="text-sm text-gray-600">Standardized implementation across multiple portfolio companies</p>
            </div>
          </div>

          {/* ROI Metrics */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Typical ROI Metrics</h3>
            <div className="space-y-4">
              {roiMetrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-dataops-600 mb-1">{metric.metric}</div>
                  <p className="text-gray-600">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Value Examples */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Value Creation Examples</h3>
            <div className="space-y-4">
              {valueExamples.map((example, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">{example.title}</h4>
                  <p className="text-dataops-600 font-bold">{example.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PEInvestmentSection;
