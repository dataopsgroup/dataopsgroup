
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import AssessmentQuiz from '@/components/assessment/AssessmentQuiz';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import QuizSchema from '@/components/seo/QuizSchema';

const HubSpotAssessment = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  return (
    <SemanticLayout>
      <Helmet>
        <title>Free DataOps Maturity Assessment - 10-Minute Data Operations Audit | DataOps Group</title>
        <meta name="description" content="Take our free 10-minute DataOps assessment to identify gaps in your data operations. Get personalized recommendations instantly." />
        <meta name="keywords" content="dataops assessment, data operations audit, hubspot assessment, data maturity assessment, free assessment" />
        <link rel="canonical" href={`${baseUrl}/data-operations-assessment`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Free DataOps Maturity Assessment - 10-Minute Data Operations Audit" />
        <meta property="og:description" content="Take our free 10-minute DataOps assessment to identify gaps in your data operations. Get personalized recommendations instantly." />
        <meta property="og:url" content={`${baseUrl}/data-operations-assessment`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free DataOps Maturity Assessment - 10-Minute Data Operations Audit" />
        <meta name="twitter:description" content="Take our free 10-minute DataOps assessment to identify gaps in your data operations. Get personalized recommendations instantly." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
      </Helmet>

      <QuizSchema 
        name="DataOps Maturity Assessment"
        description="Comprehensive assessment to evaluate your data operations maturity and HubSpot implementation readiness"
        url="/data-operations-assessment"
        about="Data Operations, HubSpot Implementation, and Marketing Operations"
        educationalLevel="Intermediate to Advanced"
        timeRequired="PT10M"
        numberOfQuestions={20}
      />

      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "DataOps Assessment", url: "/data-operations-assessment" }
        ]} 
      />

      <AssessmentQuiz />
    </SemanticLayout>
  );
};

export default HubSpotAssessment;
