
import React from 'react';
import { DollarSign, TrendingUp, Target } from 'lucide-react';

const PEInvestmentSection = () => {
  const investmentLevels = [
    {
      title: "Foundation Package",
      range: "$75,000 - $100,000",
      description: "Essential operational improvements and system foundation"
    },
    {
      title: "Complete Transformation",
      range: "$150,000 - $250,000",
      description: "Full 100-day program with comprehensive optimization"
    },
    {
      title: "Portfolio-Wide Standardization",
      range: "Custom pricing for 3+ companies",
      description: "Standardized implementation across multiple portfolio companies"
    }
  ];

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
            Program Investment & Expected Returns
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Investment Levels */}
          <div>
            <div className="flex items-center mb-6">
              <DollarSign className="h-8 w-8 text-dataops-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Investment Levels</h3>
            </div>
            <div className="space-y-4">
              {investmentLevels.map((level, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">{level.title}</h4>
                  <p className="text-dataops-600 font-bold mb-2">{level.range}</p>
                  <p className="text-sm text-gray-600">{level.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Metrics */}
          <div>
            <div className="flex items-center mb-6">
              <TrendingUp className="h-8 w-8 text-dataops-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Typical ROI Metrics</h3>
            </div>
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
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-dataops-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Value Creation Examples</h3>
            </div>
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
