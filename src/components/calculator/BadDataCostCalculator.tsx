
import React from 'react';
import CalculatorHeader from './CalculatorHeader';
import CompanyInputForm from './CompanyInputForm';
import DataQualityInputs from './DataQualityInputs';
import ResultsDisplay from './ResultsDisplay';
import CallToActionSection from './CallToActionSection';
import { useCalculatorState } from '@/hooks/useCalculatorState';

const BadDataCostCalculator = () => {
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <CalculatorHeader />
      
      {!showResults ? (
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <CompanyInputForm 
              inputs={inputs}
              onInputChange={handleInputChange}
            />
            <DataQualityInputs
              inputs={inputs}
              onInputChange={handleInputChange}
            />
          </div>
          <div className="lg:pl-8">
            <button
              onClick={calculateCosts}
              className="w-full bg-dataops-600 hover:bg-dataops-700 text-white py-3 px-6 rounded-lg font-semibold mb-6"
            >
              Calculate Bad Data Costs
            </button>
            <CallToActionSection />
          </div>
        </div>
      ) : (
        <>
          <ResultsDisplay 
            showResults={showResults}
            results={results}
            inputs={inputs}
            formatCurrency={formatCurrency}
          />
          <div className="text-center mt-4">
            <button
              onClick={resetCalculator}
              className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
            >
              Calculate Again
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BadDataCostCalculator;
