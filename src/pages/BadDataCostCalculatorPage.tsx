
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import { useCalculatorState } from '@/hooks/useCalculatorState';
import CalculatorHeader from '@/components/calculator/CalculatorHeader';
import CompanyInputForm from '@/components/calculator/CompanyInputForm';
import DataQualityInputs from '@/components/calculator/DataQualityInputs';
import CalculatorButtons from '@/components/calculator/CalculatorButtons';
import ResultsDisplay from '@/components/calculator/ResultsDisplay';
import InformationSection from '@/components/calculator/InformationSection';

const BadDataCostCalculatorPage = () => {
  const {
    inputs,
    results,
    showResults,
    formatCurrency,
    calculateCosts,
    handleInputChange,
    resetCalculator
  } = useCalculatorState();

  // Calculator schema markup
  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Bad Data Cost Calculator",
    "description": "Calculate the annual cost of poor data quality on your business including productivity losses, revenue impact, and compliance risks.",
    "url": "https://dataopsgroup.com/bad-data-cost-calculator",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "DataOps Group",
      "url": "https://dataopsgroup.com"
    },
    "featureList": [
      "Calculate productivity losses from data quality issues",
      "Estimate revenue impact from customer churn",
      "Assess marketing waste from duplicate data",
      "Evaluate compliance violation costs",
      "Generate detailed cost breakdown reports"
    ]
  };

  return (
    <SemanticLayout>
      <Helmet>
        <title>Bad Data Cost Calculator 2025 - Calculate Your Data Quality Losses</title>
        <meta 
          name="description" 
          content="Free calculator reveals how much poor data quality costs your business annually. Get detailed breakdown of productivity losses, revenue impact & compliance risks." 
        />
        <meta name="keywords" content="data quality calculator, bad data cost, data operations, ROI calculator, data quality assessment, business data losses 2025" />
        <link rel="canonical" href="https://dataopsgroup.com/bad-data-cost-calculator" />
        
        {/* Calculator Schema */}
        <script type="application/ld+json">
          {JSON.stringify(calculatorSchema)}
        </script>
      </Helmet>

      <main className="pt-6 pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <CalculatorHeader />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-gray-50 rounded-xl p-6">
              <CompanyInputForm inputs={inputs} onInputChange={handleInputChange} />
              <DataQualityInputs inputs={inputs} onInputChange={handleInputChange} />
              <CalculatorButtons onCalculate={calculateCosts} onReset={resetCalculator} />
            </div>

            {/* Results Section */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <ResultsDisplay 
                showResults={showResults}
                results={results}
                inputs={inputs}
                formatCurrency={formatCurrency}
              />
            </div>
          </div>

          <InformationSection />
        </div>
      </main>
    </SemanticLayout>
  );
};

export default BadDataCostCalculatorPage;
