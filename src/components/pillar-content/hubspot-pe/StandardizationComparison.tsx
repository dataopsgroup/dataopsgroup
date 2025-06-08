
import React from 'react';
import { X, Check, AlertTriangle } from 'lucide-react';

const StandardizationComparison = () => {
  const comparisonData = [
    {
      category: "Implementation Timeline",
      chaotic: "6-18 months per company",
      standardized: "100 days across entire portfolio",
      impact: "73% faster deployment"
    },
    {
      category: "Reporting Consistency", 
      chaotic: "Different metrics, formats, frequencies",
      standardized: "Unified KPIs across all companies",
      impact: "Real-time portfolio visibility"
    },
    {
      category: "Training Requirements",
      chaotic: "Custom training for each team",
      standardized: "One training program, all companies",
      impact: "85% reduction in training costs"
    },
    {
      category: "Integration Complexity",
      chaotic: "Unique integrations per company",
      standardized: "Template-based connectors",
      impact: "90% fewer integration issues"
    },
    {
      category: "Data Quality Control",
      chaotic: "Manual audits and corrections",
      standardized: "Automated validation rules",
      impact: "95% cleaner data quality"
    },
    {
      category: "Exit Preparation",
      chaotic: "6+ months of data cleanup",
      standardized: "Exit-ready from day one",
      impact: "19% higher valuations"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dataops-900">
            The Cost of <span className="text-red-600">Chaotic</span> vs. <span className="text-green-600">Standardized</span> Operations
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Most PE firms lose millions in value creation potential by allowing each portfolio company 
            to choose their own CRM. Here's what standardization actually delivers:
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-4 gap-0">
            {/* Header */}
            <div className="bg-dataops-900 text-white p-4 font-semibold">
              Operations Area
            </div>
            <div className="bg-red-600 text-white p-4 font-semibold flex items-center">
              <X className="h-5 w-5 mr-2" />
              Chaotic Approach
            </div>
            <div className="bg-green-600 text-white p-4 font-semibold flex items-center">
              <Check className="h-5 w-5 mr-2" />
              Standardized HubSpot
            </div>
            <div className="bg-saffron-500 text-white p-4 font-semibold flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Value Impact
            </div>

            {/* Data Rows */}
            {comparisonData.map((row, index) => (
              <React.Fragment key={index}>
                <div className={`p-4 font-medium ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  {row.category}
                </div>
                <div className={`p-4 text-red-700 ${index % 2 === 0 ? 'bg-red-50' : 'bg-white'}`}>
                  {row.chaotic}
                </div>
                <div className={`p-4 text-green-700 ${index % 2 === 0 ? 'bg-green-50' : 'bg-white'}`}>
                  {row.standardized}
                </div>
                <div className={`p-4 text-saffron-700 font-semibold ${index % 2 === 0 ? 'bg-saffron-50' : 'bg-white'}`}>
                  {row.impact}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center bg-white border border-gray-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-red-600 mb-2">$2.4M</div>
            <div className="text-gray-700">Average annual cost of operational chaos per portfolio company</div>
          </div>
          
          <div className="text-center bg-white border border-gray-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">$180K</div>
            <div className="text-gray-700">Annual cost of standardized HubSpot operations per company</div>
          </div>
          
          <div className="text-center bg-white border border-gray-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-saffron-500 mb-2">13.3x</div>
            <div className="text-gray-700">ROI from choosing standardization over chaos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardizationComparison;
