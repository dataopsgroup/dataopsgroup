
import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

const ROICalculatorWidget = () => {
  const [inputs, setInputs] = useState({
    portfolioSize: 5,
    avgRevenue: 50,
    currentEfficiency: 60,
    implementationCost: 180
  });

  const calculateROI = () => {
    const baseRevenue = inputs.portfolioSize * inputs.avgRevenue * 1000000;
    const efficiencyGain = (85 - inputs.currentEfficiency) / 100;
    const additionalRevenue = baseRevenue * efficiencyGain * 0.15; // 15% revenue impact from efficiency
    const implementationCost = inputs.implementationCost * 1000 * inputs.portfolioSize;
    const yearOneROI = (additionalRevenue - implementationCost) / implementationCost;
    
    return {
      additionalRevenue,
      implementationCost,
      yearOneROI,
      monthlyGain: additionalRevenue / 12,
      breakEvenMonths: Math.ceil(implementationCost / (additionalRevenue / 12))
    };
  };

  const results = calculateROI();

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    return `$${Math.round(amount).toLocaleString()}`;
  };

  const formatPercent = (decimal: number) => {
    return `${Math.round(decimal * 100)}%`;
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dataops-900">
            HubSpot PE ROI Calculator
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Calculate the potential return on investment from standardizing your portfolio operations on HubSpot. 
            Adjust the inputs below to match your portfolio characteristics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Calculator className="h-6 w-6 text-dataops-600 mr-3" />
              <h3 className="text-xl font-semibold text-dataops-900">Portfolio Parameters</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Portfolio Companies
                </label>
                <input
                  type="range"
                  min="2"
                  max="20"
                  value={inputs.portfolioSize}
                  onChange={(e) => setInputs({...inputs, portfolioSize: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>2</span>
                  <span className="font-medium text-dataops-600">{inputs.portfolioSize} companies</span>
                  <span>20</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Annual Revenue per Company (Millions)
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={inputs.avgRevenue}
                  onChange={(e) => setInputs({...inputs, avgRevenue: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$10M</span>
                  <span className="font-medium text-dataops-600">${inputs.avgRevenue}M</span>
                  <span>$500M</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Operational Efficiency
                </label>
                <input
                  type="range"
                  min="30"
                  max="80"
                  value={inputs.currentEfficiency}
                  onChange={(e) => setInputs({...inputs, currentEfficiency: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>30%</span>
                  <span className="font-medium text-dataops-600">{inputs.currentEfficiency}%</span>
                  <span>80%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Cost per Company ($K)
                </label>
                <input
                  type="range"
                  min="100"
                  max="300"
                  step="10"
                  value={inputs.implementationCost}
                  onChange={(e) => setInputs({...inputs, implementationCost: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$100K</span>
                  <span className="font-medium text-dataops-600">${inputs.implementationCost}K</span>
                  <span>$300K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-dataops-50 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-6 w-6 text-dataops-600 mr-3" />
              <h3 className="text-xl font-semibold text-dataops-900">ROI Projection</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-dataops-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Total Implementation Investment</span>
                  <DollarSign className="h-4 w-4 text-gray-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {formatCurrency(results.implementationCost)}
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Additional Revenue (Year 1)</span>
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {formatCurrency(results.additionalRevenue)}
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-saffron-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Year 1 ROI</span>
                  <span className="text-sm text-saffron-600 font-medium">Return Multiple</span>
                </div>
                <div className="text-2xl font-bold text-saffron-600">
                  {formatPercent(results.yearOneROI)}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {(results.yearOneROI + 1).toFixed(1)}x return on investment
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Monthly Gain</div>
                  <div className="text-lg font-bold text-dataops-600">
                    {formatCurrency(results.monthlyGain)}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Break Even</div>
                  <div className="text-lg font-bold text-dataops-600">
                    {results.breakEvenMonths} months
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-dataops-600 to-dataops-700 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Realize These Returns?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              These projections are based on actual client results. Take our assessment to get a personalized 
              implementation roadmap for your portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/data-operations-assessment"
                className="bg-white text-dataops-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Your PE Assessment
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-dataops-600 transition-colors"
              >
                Speak with a PE Specialist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorWidget;
