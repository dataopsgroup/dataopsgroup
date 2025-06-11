
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import BadDataCostCalculator from '@/components/calculator/BadDataCostCalculator';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import WebApplicationSchema from '@/components/seo/WebApplicationSchema';

const BadDataCostCalculatorPage = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  return (
    <SemanticLayout>
      <Helmet>
        <title>Bad Data Cost Calculator 2025 - Calculate Your Data Quality Losses | DataOps Group</title>
        <meta name="description" content="Free calculator reveals annual costs of poor data quality. Get detailed breakdown of productivity losses and revenue impact." />
        <meta name="keywords" content="bad data cost calculator, data quality costs, poor data impact, productivity losses, revenue calculator" />
        <link rel="canonical" href={`${baseUrl}/bad-data-cost-calculator`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bad Data Cost Calculator 2025 - Calculate Your Data Quality Losses" />
        <meta property="og:description" content="Free calculator reveals annual costs of poor data quality. Get detailed breakdown of productivity losses and revenue impact." />
        <meta property="og:url" content={`${baseUrl}/bad-data-cost-calculator`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bad Data Cost Calculator 2025 - Calculate Your Data Quality Losses" />
        <meta name="twitter:description" content="Free calculator reveals annual costs of poor data quality. Get detailed breakdown of productivity losses and revenue impact." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
      </Helmet>

      <WebApplicationSchema 
        name="Bad Data Cost Calculator"
        description="Calculate the annual costs of poor data quality including productivity losses, revenue impact, and compliance risks."
        url="/bad-data-cost-calculator"
        applicationCategory="BusinessApplication"
      />

      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Bad Data Cost Calculator", url: "/bad-data-cost-calculator" }
        ]} 
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <BadDataCostCalculator />
      </div>
    </SemanticLayout>
  );
};

export default BadDataCostCalculatorPage;
