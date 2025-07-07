import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import WebApplicationSchema from '@/components/seo/WebApplicationSchema';
import HubSpotROICalculator from '@/components/calculator/HubSpotROICalculator';

const HubSpotROICalculatorPage = () => {
  return (
    <SemanticLayout>
      <MetaHead
        title="HubSpot ROI Calculator for Private Equity | Portfolio Value Calculator | DataOps Group"
        description="Calculate the IRR impact of implementing HubSpot across your PE portfolio companies. Model operational improvements, exit multiple enhancement, and implementation costs."
        keywords="hubspot roi calculator, private equity roi, portfolio value calculator, hubspot pe calculator, pe technology roi"
        canonicalPath="/hubspot-roi-calculator"
        ogType="website"
        ogTitle="HubSpot ROI Calculator for Private Equity | Portfolio Value Calculator"
        ogDescription="Calculate the IRR impact of implementing HubSpot across your PE portfolio companies. Model operational improvements and exit multiple enhancement."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "HubSpot ROI Calculator for Private Equity",
          "description": "Calculate the IRR impact of implementing HubSpot across PE portfolio companies with detailed scenario modeling.",
          "url": "/hubspot-roi-calculator",
          "applicationCategory": "BusinessApplication",
          "publisher": {
            "@type": "Organization",
            "name": "DataOps Group"
          }
        }}
      />

      <WebApplicationSchema 
        name="HubSpot ROI Calculator for Private Equity"
        description="Calculate the IRR impact of implementing HubSpot across PE portfolio companies with detailed scenario modeling."
        url="/hubspot-roi-calculator"
        applicationCategory="BusinessApplication"
      />

      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "HubSpot ROI Calculator", url: "/hubspot-roi-calculator" }
        ]} 
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <HubSpotROICalculator />
      </div>
    </SemanticLayout>
  );
};

export default HubSpotROICalculatorPage;