
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import QuizResults from '@/components/assessment/QuizResults';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { buildCanonicalUrl, buildOGUrl } from '@/utils/url-builder';

const HubSpotAssessmentResultsPage = () => {
  const canonicalUrl = buildCanonicalUrl('/data-operations-assessment/results');
  const ogUrl = buildOGUrl('/data-operations-assessment/results');

  // Mock data for results page - in a real app this would come from state/URL params
  const mockScores = {
    'data-quality': 15,
    'process-automation': 12,
    'team-adoption': 18,
    'performance-measurement': 10,
    'integration-workflow': 14
  };

  const mockPriorities = [
    {
      index: 1,
      section: 'performance-measurement',
      name: 'Performance Measurement',
      title: 'Implement Comprehensive Analytics',
      text: 'Set up proper tracking and measurement systems to understand your data operations performance.'
    }
  ];

  const mockRescuePlan = {
    phase1: ['Set up basic data tracking', 'Audit current data quality'],
    phase2: ['Implement automated processes', 'Train team on best practices'],
    phase3: ['Optimize workflows', 'Monitor and improve continuously']
  };

  const handleEmailResults = () => {
    console.log('Email results functionality would be implemented here');
  };

  return (
    <SemanticLayout>
      <Helmet>
        <title>Your HubSpot Implementation Assessment Results | DataOps Group</title>
        <meta name="description" content="Your HubSpot assessment results with personalized recommendations and next steps to improve your data operations." />
        <meta name="keywords" content="hubspot assessment results, data operations results, personalized recommendations, implementation assessment" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Your HubSpot Implementation Assessment Results" />
        <meta property="og:description" content="Your HubSpot assessment results with personalized recommendations and next steps to improve your data operations." />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content="https://dataopsgroup.com/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your HubSpot Implementation Assessment Results" />
        <meta name="twitter:description" content="Your HubSpot assessment results with personalized recommendations and next steps to improve your data operations." />
        <meta name="twitter:image" content="https://dataopsgroup.com/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png" />
      </Helmet>

      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "DataOps Assessment", url: "/data-operations-assessment" },
          { name: "Results", url: "/data-operations-assessment/results" }
        ]} 
      />

      <QuizResults 
        overallScore={69}
        scores={mockScores}
        sectionTitles={['Data Quality & Management', 'Process Automation', 'Team Adoption', 'Performance Measurement', 'Integration & Workflow']}
        priorities={mockPriorities}
        rescuePlan={mockRescuePlan}
        onEmailResults={handleEmailResults}
      />
    </SemanticLayout>
  );
};

export default HubSpotAssessmentResultsPage;
