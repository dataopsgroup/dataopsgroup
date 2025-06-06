import React, { useState } from 'react';
import { Calculator, AlertTriangle, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';

const BadDataCostCalculatorPage = () => {
  const [inputs, setInputs] = useState({
    annualRevenue: '',
    employeeCount: '',
    avgSalary: '',
    dataQualityIssueTime: '25', // percentage
    customerChurnRate: '5', // percentage
    marketingBudget: '',
    duplicateDataRate: '15', // percentage
    complianceViolations: '0'
  });

  const [results, setResults] = useState({
    totalAnnualCost: 0,
    productivityLoss: 0,
    lostRevenue: 0,
    marketingWaste: 0,
    complianceCosts: 0,
    breakdown: []
  });

  const [showResults, setShowResults] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateCosts = () => {
    const revenue = parseFloat(inputs.annualRevenue) || 0;
    const employees = parseFloat(inputs.employeeCount) || 0;
    const salary = parseFloat(inputs.avgSalary) || 0;
    const timeWasted = parseFloat(inputs.dataQualityIssueTime) / 100;
    const churnRate = parseFloat(inputs.customerChurnRate) / 100;
    const marketing = parseFloat(inputs.marketingBudget) || 0;
    const duplicateRate = parseFloat(inputs.duplicateDataRate) / 100;
    const violations = parseFloat(inputs.complianceViolations) || 0;

    // Productivity loss calculation
    const totalSalaryCost = employees * salary;
    const productivityLoss = totalSalaryCost * timeWasted;

    // Lost revenue from customer churn due to bad data
    const lostRevenue = revenue * (churnRate * 0.3); // 30% of churn attributed to data issues

    // Marketing waste from duplicate/bad data
    const marketingWaste = marketing * duplicateRate;

    // Compliance costs ($50k per violation average)
    const complianceCosts = violations * 50000;

    const totalCost = productivityLoss + lostRevenue + marketingWaste + complianceCosts;

    const breakdown = [
      { category: 'Employee Productivity Loss', amount: productivityLoss, percentage: (productivityLoss / totalCost) * 100 },
      { category: 'Lost Revenue (Churn)', amount: lostRevenue, percentage: (lostRevenue / totalCost) * 100 },
      { category: 'Marketing Waste', amount: marketingWaste, percentage: (marketingWaste / totalCost) * 100 },
      { category: 'Compliance Violations', amount: complianceCosts, percentage: (complianceCosts / totalCost) * 100 }
    ].filter(item => item.amount > 0);

    setResults({
      totalAnnualCost: totalCost,
      productivityLoss,
      lostRevenue,
      marketingWaste,
      complianceCosts,
      breakdown
    });

    setShowResults(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetCalculator = () => {
    setInputs({
      annualRevenue: '',
      employeeCount: '',
      avgSalary: '',
      dataQualityIssueTime: '25',
      customerChurnRate: '5',
      marketingBudget: '',
      duplicateDataRate: '15',
      complianceViolations: '0'
    });
    setShowResults(false);
  };

  return (
    <SemanticLayout>
      <Helmet>
        <title>Bad Data Cost Calculator - DataOps Group</title>
        <meta 
          name="description" 
          content="Calculate how much poor data quality is costing your business annually. Get a comprehensive breakdown of productivity losses, revenue impact, and compliance risks with our free calculator." 
        />
        <meta name="keywords" content="data quality, cost calculator, bad data, data operations, ROI calculator" />
        <link rel="canonical" href="https://dataopsgroup.com/bad-data-cost-calculator" />
      </Helmet>

      <main className="pt-6 pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Calculator className="h-8 w-8 text-dataops-600 mr-3" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Bad Data Cost Calculator</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how much poor data quality is costing your business annually. Get a comprehensive breakdown 
              of productivity losses, revenue impact, and compliance risks.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">
                Company Information
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Revenue ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.annualRevenue}
                    onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dataops-500 focus:border-transparent"
                    placeholder="e.g., 10000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    value={inputs.employeeCount}
                    onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dataops-500 focus:border-transparent"
                    placeholder="e.g., 100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Salary ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.avgSalary}
                    onChange={(e) => handleInputChange('avgSalary', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dataops-500 focus:border-transparent"
                    placeholder="e.g., 75000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Marketing Budget ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.marketingBudget}
                    onChange={(e) => handleInputChange('marketingBudget', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dataops-500 focus:border-transparent"
                    placeholder="e.g., 500000"
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold mt-8 mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
                Data Quality Issues
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Spent on Data Quality Issues: {inputs.dataQualityIssueTime}%
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={inputs.dataQualityIssueTime}
                    onChange={(e) => handleInputChange('dataQualityIssueTime', e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5%</span>
                    <span>50%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Customer Churn Rate: {inputs.customerChurnRate}%
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    value={inputs.customerChurnRate}
                    onChange={(e) => handleInputChange('customerChurnRate', e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1%</span>
                    <span>25%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duplicate/Bad Data Rate: {inputs.duplicateDataRate}%
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    value={inputs.duplicateDataRate}
                    onChange={(e) => handleInputChange('duplicateDataRate', e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5%</span>
                    <span>40%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Compliance Violations (Annual)
                  </label>
                  <input
                    type="number"
                    value={inputs.complianceViolations}
                    onChange={(e) => handleInputChange('complianceViolations', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dataops-500 focus:border-transparent"
                    placeholder="e.g., 2"
                  />
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button
                  onClick={calculateCosts}
                  className="w-full bg-dataops-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-dataops-700 transition-colors flex items-center justify-center"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculate Bad Data Costs
                </button>
                
                <button
                  onClick={resetCalculator}
                  className="w-full bg-gray-200 text-gray-700 py-2 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Reset Calculator
                </button>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              {!showResults ? (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <div className="text-center">
                    <Calculator className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                    <p className="text-lg">Enter your information and click "Calculate" to see your results</p>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-red-600" />
                    Annual Cost of Bad Data
                  </h2>

                  {/* Total Cost Display */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        {formatCurrency(results.totalAnnualCost)}
                      </div>
                      <p className="text-gray-600">Total Annual Cost of Poor Data Quality</p>
                      <p className="text-sm text-gray-500 mt-1">
                        That's {((results.totalAnnualCost / (parseFloat(inputs.annualRevenue) || 1)) * 100).toFixed(1)}% of your annual revenue
                      </p>
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Cost Breakdown:</h3>
                    
                    {results.breakdown.map((item, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900">{item.category}</span>
                          <span className="font-semibold text-gray-900">{formatCurrency(item.amount)}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-red-500 h-2 rounded-full transition-all duration-500" 
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {item.percentage.toFixed(1)}% of total cost
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <div className="mt-8 bg-dataops-50 border border-dataops-200 rounded-lg p-6">
                    <h3 className="font-semibold text-dataops-900 mb-2">Ready to Reduce These Costs?</h3>
                    <p className="text-dataops-700 text-sm mb-4">
                      Our data ops consulting can help you implement systems and processes to dramatically reduce these costs. 
                      Most clients see 40-60% improvement in data quality within 90 days.
                    </p>
                    <a 
                      href="/contact"
                      className="inline-block bg-dataops-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-dataops-700 transition-colors"
                    >
                      Get a Free Data Assessment
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Your Bad Data Costs</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-orange-600" />
                  Productivity Impact
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Studies show employees spend 20-40% of their time dealing with data quality issues. This includes 
                  data cleansing, verification, duplicate removal, and rework caused by incorrect information.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                  Revenue Impact
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Poor data quality directly affects customer experience, leading to increased churn rates. 
                  Additionally, bad data reduces the effectiveness of marketing campaigns and sales efforts.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Industry Benchmarks</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Average companies lose 12% of revenue due to poor data quality</li>
                <li>• 88% of organizations struggle with data quality issues</li>
                <li>• Data professionals spend 60% of time on data preparation vs. analysis</li>
                <li>• Each data quality rule violation costs an average of $15,000</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </SemanticLayout>
  );
};

export default BadDataCostCalculatorPage;
