
import React from 'react';
import RevOpsCalculatorHeader from './RevOpsCalculatorHeader';
import RevOpsInputForm from './RevOpsInputForm';
import RevOpsResultsDisplay from './RevOpsResultsDisplay';
import RevOpsCallToAction from './RevOpsCallToAction';
import { useRevOpsCalculatorState } from '@/hooks/useRevOpsCalculatorState';

const RevOpsCalculator = () => {
  const {
    inputData,
    setInputData,
    results,
    showResults,
    calculateROI,
    resetCalculator
  } = useRevOpsCalculatorState();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <RevOpsCalculatorHeader />
      
      {!showResults ? (
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <RevOpsInputForm 
              inputData={inputData}
              setInputData={setInputData}
            />
          </div>
          <div className="lg:pl-8">
            <button
              onClick={calculateROI}
              className="w-full bg-dataops-600 hover:bg-dataops-700 text-white py-3 px-6 rounded-lg font-semibold mb-6"
            >
              Calculate RevOps ROI
            </button>
          </div>
        </div>
      ) : (
        <>
          <RevOpsResultsDisplay results={results} inputData={inputData} />
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
