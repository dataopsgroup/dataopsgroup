
import React from 'react';
import CalculatorHeader from './CalculatorHeader';
import CompanyInputForm from './CompanyInputForm';
import DataQualityInputs from './DataQualityInputs';
import ResultsDisplay from './ResultsDisplay';
import CallToActionSection from './CallToActionSection';
import { useCalculatorState } from '@/hooks/useCalculatorState';

const BadDataCostCalculator = () => {
  const {
    companyData,
    setCompanyData,
    dataQuality,
    setDataQuality,
    results,
    showResults,
    calculateCosts,
    resetCalculator
  } = useCalculatorState();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <CalculatorHeader />
      
      {!showResults ? (
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <CompanyInputForm 
              companyData={companyData}
              setCompanyData={setCompanyData}
            />
            <DataQualityInputs
              dataQuality={dataQuality}
              setDataQuality={setDataQuality}
            />
          </div>
          <div className="lg:pl-8">
            <button
              onClick={calculateCosts}
              className="w-full bg-dataops-600 hover:bg-dataops-700 text-white py-3 px-6 rounded-lg font-semibold mb-6"
            >
              Calculate Bad Data Costs
            </button>
          </div>
        </div>
      ) : (
        <>
          <ResultsDisplay results={results} companyData={companyData} />
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
      
      <CallToActionSection />
    </div>
  );
};

export default BadDataCostCalculator;
