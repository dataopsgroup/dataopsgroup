
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import RevOpsCalculatorHeader from '@/components/calculator/RevOpsCalculatorHeader';
import RevOpsInputForm from '@/components/calculator/RevOpsInputForm';
import RevOpsResultsDisplay from '@/components/calculator/RevOpsResultsDisplay';
import RevOpsCallToAction from '@/components/calculator/RevOpsCallToAction';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { useRevOpsCalculatorState } from '@/hooks/useRevOpsCalculatorState';

const RevOpsROICalculatorPage = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  
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
    <SemanticLayout>
      <Helmet>
        <title>RevOps ROI Calculator 2025 - Calculate Your Revenue Operations Return | DataOps Group</title>
        <meta 
          name="description" 
          content="Free RevOps ROI calculator shows potential revenue gains, cost savings, and payback period from revenue operations consulting. Get your personalized ROI projection." 
        />
        <meta name="keywords" content="revops roi calculator, revenue operations roi, revops consulting, revenue operations return on investment, sales operations calculator" />
        <link rel="canonical" href={`${baseUrl}/revops-roi-calculator`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RevOps ROI Calculator 2025 - Calculate Your Revenue Operations Return | DataOps Group" />
        <meta property="og:description" content="Free RevOps ROI calculator shows potential revenue gains, cost savings, and payback period from revenue operations consulting. Get your personalized ROI projection." />
        <meta property="og:url" content={`${baseUrl}/revops-roi-calculator`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta property="og:site_name" content="DataOps Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RevOps ROI Calculator 2025 - Calculate Your Revenue Operations Return | DataOps Group" />
        <meta name="twitter:description" content="Free RevOps ROI calculator shows potential revenue gains, cost savings, and payback period from revenue operations consulting. Get your personalized ROI projection." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta name="twitter:site" content="@dataops_group" />
      </Helmet>
      
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "RevOps ROI Calculator", url: "/revops-roi-calculator" }
        ]} 
      />
      
      <section className="flex-grow pt-32 px-[5%]" aria-labelledby="revops-calculator-heading">
        <div className="max-w-7xl mx-auto">
          <RevOpsCalculatorHeader />
          
          <div className="grid lg:grid-cols-2 gap-8">
            <RevOpsInputForm
              inputs={inputs}
              onInputChange={handleInputChange}
              onCalculate={calculateROI}
              onReset={resetCalculator}
            />
            
            <RevOpsResultsDisplay
              results={results}
              inputs={inputs}
              showResults={showResults}
              formatCurrency={formatCurrency}
              formatPercentage={formatPercentage}
            />
          </div>
          
          <RevOpsCallToAction />
        </div>
      </section>
      
      {/* Schema markup for RevOps Calculator */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "RevOps ROI Calculator",
          "description": "Free RevOps ROI calculator shows potential revenue gains, cost savings, and payback period from revenue operations consulting.",
          "url": `${baseUrl}/revops-roi-calculator`,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "provider": {
            "@type": "Organization",
            "name": "DataOps Group",
            "url": "https://dataopsgroup.com"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        })
      }} />
    </SemanticLayout>
  );
};

export default RevOpsROICalculatorPage;
