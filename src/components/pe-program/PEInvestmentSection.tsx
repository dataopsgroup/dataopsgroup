import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PEInvestmentSection = () => {
  const operationalImprovements = [
    { metric: "25-40%", description: "improvement in sales productivity metrics" },
    { metric: "30-50%", description: "reduction in administrative overhead" },
    { metric: "90%+", description: "forecast accuracy improvement" }
  ];

  const financialReturns = [
    { metric: "2-5%", description: "EBITDA margin improvement through operational efficiency" },
    { metric: "10-20%", description: "valuation premium for digital readiness at exit" },
    { metric: "$1.5-2.5M", description: "annual operational improvement for $50M revenue company" }
  ];

  const timeValue = [
    { metric: "15-20 hours", description: "recovered per department weekly" },
    { metric: "100 days", description: "to full operational transformation" },
    { metric: "90/10 model", description: "transition to sustainable self-management" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What You Gain
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Systematic transformation delivers measurable value across operational efficiency, financial performance, and organizational capability
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Operational Efficiency */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Operational Efficiency</h3>
            <div className="space-y-4">
              {operationalImprovements.map((metric, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-dataops-600 mb-1">{metric.metric}</div>
                  <p className="text-gray-600">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Impact */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Financial Impact</h3>
            <div className="space-y-4">
              {financialReturns.map((metric, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">{metric.metric}</div>
                  <p className="text-gray-600">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Time & Resource Value */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Time & Resource Value</h3>
            <div className="space-y-4">
              {timeValue.map((metric, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{metric.metric}</div>
                  <p className="text-gray-600">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio-Wide Standardization */}
        <div className="bg-dataops-50 border border-dataops-200 rounded-lg p-8 text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Portfolio-Wide Standardization</h3>
          <p className="text-dataops-600 font-bold text-lg mb-2">Custom pricing for 3+ companies</p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Standardized implementation across multiple portfolio companies with economies of scale, 
            shared best practices, and unified reporting capabilities
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link to="/contact">
            <Button className="bg-saffron-500 hover:bg-saffron-600 text-dataops-950 font-semibold px-8 py-3 text-lg bg-brand-saffron">
              Get Your Custom Assessment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PEInvestmentSection;
