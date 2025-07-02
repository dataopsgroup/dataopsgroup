
import React from 'react';
import RevOpsCalculatorHeader from './RevOpsCalculatorHeader';
import RevOpsInputForm from './RevOpsInputForm';
import RevOpsResultsDisplay from './RevOpsResultsDisplay';
import RevOpsCallToAction from './RevOpsCallToAction';
import { useRevOpsCalculatorState } from '@/hooks/useRevOpsCalculatorState';

const RevOpsCalculator = () => {
  const {
    inputs,
    results,
    showResults,
    calculateROI,
    handleInputChange,
    resetCalculator,
    formatCurrency,
    formatPercentage
  } = useRevOpsCalculatorState();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <RevOpsCalculatorHeader />
      
      {!showResults ? (
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <RevOpsInputForm 
              inputs={inputs}
              onInputChange={handleInputChange}
              onCalculate={calculateROI}
              onReset={resetCalculator}
            />
          </div>
        </div>
      ) : (
        <>
          <RevOpsResultsDisplay 
            results={results} 
            inputs={inputs}
            showResults={showResults}
            formatCurrency={formatCurrency}
            formatPercentage={formatPercentage}
          />
          <div className="text-center mt-8">
            <button
              onClick={resetCalculator}
              className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
            >
              Calculate Again
            </button>
          </div>
        </>
      )}
      
      <RevOpsCallToAction />
    </div>
  );
};

export default RevOpsCalculator;
