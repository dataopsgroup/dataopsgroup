
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import RevOpsCalculator from '@/components/calculator/RevOpsCalculator';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import WebApplicationSchema from '@/components/seo/WebApplicationSchema';
import MetaHead from '@/components/seo/MetaHead';

const RevOpsROICalculatorPage = () => {
  return (
    <SemanticLayout>
      <MetaHead
        title="RevOps ROI Calculator 2025 - Calculate Revenue Returns"
        description="Free RevOps ROI calculator shows revenue gains, cost savings, and payback periods. Get your personalized projection instantly."
        keywords="revops roi calculator, revenue operations calculator, revops investment, roi calculator, revenue operations returns"
        canonicalPath="/revops-roi-calculator"
        ogType="website"
        ogTitle="RevOps ROI Calculator 2025 - Calculate Revenue Returns"
        ogDescription="Free RevOps ROI calculator shows revenue gains, cost savings, and payback periods. Get your personalized projection instantly."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "RevOps ROI Calculator",
          "description": "Calculate return on investment for Revenue Operations implementation with detailed projections.",
          "url": "/revops-roi-calculator",
          "applicationCategory": "BusinessApplication",
          "publisher": {
            "@type": "Organization",
            "name": "DataOps Group"
          }
        }}
      />

      <WebApplicationSchema 
        name="RevOps ROI Calculator"
        description="Calculate return on investment for Revenue Operations implementation with detailed projections."
        url="/revops-roi-calculator"
        applicationCategory="BusinessApplication"
      />

      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "RevOps ROI Calculator", url: "/revops-roi-calculator" }
        ]} 
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <RevOpsCalculator />
      </div>
    </SemanticLayout>
  );
};

export default RevOpsROICalculatorPage;
