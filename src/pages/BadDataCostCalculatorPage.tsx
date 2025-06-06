
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
