
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import QuizResults from '@/components/assessment/QuizResults';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const HubSpotAssessmentResultsPage = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  return (
    <SemanticLayout>
      <Helmet>
        <title>Your HubSpot Implementation Assessment Results | DataOps Group</title>
        <meta name="description" content="Your HubSpot assessment results with personalized recommendations and next steps to improve your data operations." />
        <meta name="keywords" content="hubspot assessment results, data operations results, personalized recommendations, implementation assessment" />
        <link rel="canonical" href={`${baseUrl}/data-operations-assessment/results`} />
        <meta name="robots" content="noindex, nofollow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Your HubSpot Implementation Assessment Results" />
        <meta property="og:description" content="Your HubSpot assessment results with personalized recommendations and next steps to improve your data operations." />
        <meta property="og:url" content={`${baseUrl}/data-operations-assessment/results`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your HubSpot Implementation Assessment Results" />
        <meta name="twitter:description" content="Your HubSpot assessment results with personalized recommendations and next steps to improve your data operations." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
      </Helmet>

      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "DataOps Assessment", url: "/data-operations-assessment" },
          { name: "Results", url: "/data-operations-assessment/results" }
        ]} 
      />

      <QuizResults />
    </SemanticLayout>
  );
};

export default HubSpotAssessmentResultsPage;
