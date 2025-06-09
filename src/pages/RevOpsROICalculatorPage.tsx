
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import RevOpsCalculator from '@/components/calculator/RevOpsCalculator';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const RevOpsROICalculatorPage = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  return (
    <SemanticLayout>
      <Helmet>
        <title>RevOps ROI Calculator 2025 - Calculate Revenue Operations Returns | DataOps Group</title>
        <meta name="description" content="Free RevOps ROI calculator shows potential revenue gains, cost savings, and payback periods. Get your personalized ROI projection instantly." />
        <meta name="keywords" content="revops roi calculator, revenue operations calculator, revops investment, roi calculator, revenue operations returns" />
        <link rel="canonical" href={`${baseUrl}/revops-roi-calculator`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RevOps ROI Calculator 2025 - Calculate Revenue Operations Returns" />
        <meta property="og:description" content="Free RevOps ROI calculator shows potential revenue gains, cost savings, and payback periods. Get your personalized ROI projection instantly." />
        <meta property="og:url" content={`${baseUrl}/revops-roi-calculator`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RevOps ROI Calculator 2025 - Calculate Revenue Operations Returns" />
        <meta name="twitter:description" content="Free RevOps ROI calculator shows potential revenue gains, cost savings, and payback periods. Get your personalized ROI projection instantly." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "RevOps ROI Calculator",
            "description": "Calculate return on investment for Revenue Operations implementation with detailed projections.",
            "url": `${baseUrl}/revops-roi-calculator`,
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "provider": {
              "@type": "Organization",
              "name": "DataOps Group",
              "url": "https://dataopsgroup.com"
            }
          })}
        </script>
      </Helmet>

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
