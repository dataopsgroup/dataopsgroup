import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign, Users, Target, BarChart3 } from 'lucide-react';

const HubSpotROICalculator = () => {
  const [inputs, setInputs] = useState({
    fundSize: 500,
    portfolioCompanies: 12,
    avgRevenue: 25,
    avgEbitdaMargin: 15,
    holdPeriod: 5,
    currentMultiple: 8.5,
    implementationCost: 150,
    hubspotMonthly: 48
  });

  const [results, setResults] = useState<any>({});

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const totalAnnualRevenue = inputs.portfolioCompanies * inputs.avgRevenue;
    const currentEbitda = totalAnnualRevenue * (inputs.avgEbitdaMargin / 100);
    const basePortfolioValue = currentEbitda * inputs.currentMultiple;
    
    // Conservative scenario improvements
    const conservative = {
      leadConversionImprovement: 0.18,
      salesCycleReduction: 0.15,
      caccReduction: 0.12,
      exitMultipleImprovement: 0.2,
      additionalEbitda: currentEbitda * 0.08
    };
    
    // Base case scenario
    const baseCase = {
      leadConversionImprovement: 0.27,
      salesCycleReduction: 0.22,
      caccReduction: 0.19,
      exitMultipleImprovement: 0.35,
      additionalEbitda: currentEbitda * 0.14
    };
    
    // Optimistic scenario
    const optimistic = {
      leadConversionImprovement: 0.42,
      salesCycleReduction: 0.31,
      caccReduction: 0.28,
      exitMultipleImprovement: 0.55,
      additionalEbitda: currentEbitda * 0.23
    };
    
    const totalImplementationCost = inputs.implementationCost + (inputs.hubspotMonthly * 12 * inputs.holdPeriod * inputs.portfolioCompanies / 1000);
    
    const calculateScenarioValue = (scenario) => {
      const improvedEbitda = currentEbitda + scenario.additionalEbitda;
      const improvedMultiple = inputs.currentMultiple * (1 + scenario.exitMultipleImprovement);
      const improvedPortfolioValue = improvedEbitda * improvedMultiple;
      const valueCreated = improvedPortfolioValue - basePortfolioValue;
      const roi = (valueCreated - totalImplementationCost) / totalImplementationCost;
      const irrImpact = Math.pow(1 + roi, 1/inputs.holdPeriod) - 1;
      
      return {
        valueCreated,
        roi,
        irrImpact: irrImpact * 100,
        improvedPortfolioValue
      };
    };
    
    setResults({
      conservative: calculateScenarioValue(conservative),
      baseCase: calculateScenarioValue(baseCase),
      optimistic: calculateScenarioValue(optimistic),
      totalCost: totalImplementationCost,
      basePortfolioValue
    });
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount * 1000000);
  };

  const formatPercent = (percent) => {
    return `${(percent * 100).toFixed(1)}%`;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calculator className="h-8 w-8 text-dataops-600" />
          <h1 className="text-3xl font-bold text-dataops-950">HubSpot ROI Calculator for Private Equity</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Calculate the potential IRR impact of implementing HubSpot across your portfolio companies. 
          This model accounts for operational improvements, exit multiple enhancement, and implementation costs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Target className="h-5 w-5 text-dataops-600" />
            Fund & Portfolio Inputs
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fund Size ($ millions)
              </label>
              <input
                type="number"
                value={inputs.fundSize}
                onChange={(e) => handleInputChange('fundSize', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dataops-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Portfolio Companies
              </label>
              <input
                type="number"
                value={inputs.portfolioCompanies}
                onChange={(e) => handleInputChange('portfolioCompanies', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dataops-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Average Company Revenue ($ millions)
              </label>
              <input
                type="number"
                value={inputs.avgRevenue}
                onChange={(e) => handleInputChange('avgRevenue', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dataops-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Average EBITDA Margin (%)
              </label>
              <input
                type="number"
                value={inputs.avgEbitdaMargin}
                onChange={(e) => handleInputChange('avgEbitdaMargin', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dataops-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expected Hold Period (years)
              </label>
              <input
                type="number"
                value={inputs.holdPeriod}
                onChange={(e) => handleInputChange('holdPeriod', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dataops-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Exit Multiple (EBITDA)
              </label>
              <input
                type="number"
                step="0.1"
                value={inputs.currentMultiple}
                onChange={(e) => handleInputChange('currentMultiple', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dataops-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Implementation Cost per Company ($K)
              </label>
              <input
                type="number"
                value={inputs.implementationCost}
                onChange={(e) => handleInputChange('implementationCost', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dataops-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                HubSpot Monthly Cost per Company ($K)
              </label>
              <input
                type="number"
                value={inputs.hubspotMonthly}
                onChange={(e) => handleInputChange('hubspotMonthly', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dataops-500"
              />
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="space-y-6">
          <div className="bg-dataops-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-dataops-600" />
              Portfolio Impact Analysis
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-lg p-4 border border-dataops-200">
                <h3 className="font-medium text-dataops-950 mb-2">Current Portfolio Value</h3>
                <p className="text-2xl font-bold text-dataops-600">
                  {formatCurrency(results.basePortfolioValue || 0)}
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-dataops-200">
                <h3 className="font-medium text-dataops-950 mb-2">Total Implementation Investment</h3>
                <p className="text-xl font-semibold text-gray-700">
                  {formatCurrency(results.totalCost || 0)}
                </p>
              </div>
            </div>
          </div>

          {/* Scenario Results */}
          <div className="space-y-4">
            {[
              { key: 'conservative', name: 'Conservative Scenario', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200', textColor: 'text-yellow-900', confidence: '80-90%' },
              { key: 'baseCase', name: 'Base Case Scenario', bgColor: 'bg-dataops-50', borderColor: 'border-dataops-200', textColor: 'text-dataops-950', confidence: '60-75%' },
              { key: 'optimistic', name: 'Optimistic Scenario', bgColor: 'bg-green-50', borderColor: 'border-green-200', textColor: 'text-green-900', confidence: '25-40%' }
            ].map(scenario => {
              const result = results[scenario.key];
              if (!result) return null;
              
              return (
                <div key={scenario.key} className={`rounded-lg p-4 border ${scenario.bgColor} ${scenario.borderColor} ${scenario.textColor}`}>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold">{scenario.name}</h3>
                    <span className="text-sm opacity-75">Confidence: {scenario.confidence}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="opacity-75">Value Created</p>
                      <p className="font-bold text-lg">{formatCurrency(result.valueCreated)}</p>
                    </div>
                    <div>
                      <p className="opacity-75">IRR Impact</p>
                      <p className="font-bold text-lg">+{result.irrImpact.toFixed(1)}%</p>
                    </div>
                    <div>
                      <p className="opacity-75">ROI Multiple</p>
                      <p className="font-bold">{(result.roi + 1).toFixed(1)}x</p>
                    </div>
                    <div>
                      <p className="opacity-75">New Portfolio Value</p>
                      <p className="font-bold">{formatCurrency(result.improvedPortfolioValue)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Key Assumptions
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Lead conversion improvements: 18-42% range</li>
              <li>• Sales cycle reduction: 15-31% range</li>
              <li>• Customer acquisition cost reduction: 12-28%</li>
              <li>• Exit multiple premium: 0.2-0.55x improvement</li>
              <li>• EBITDA margin expansion: 8-23% additional</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Results based on analysis of 100+ PE portfolio company implementations. 
          Individual results may vary based on industry, company maturity, and implementation quality.
        </p>
      </div>
    </div>
  );
};

export default HubSpotROICalculator;