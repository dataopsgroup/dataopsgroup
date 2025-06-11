
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface QuizSchemaProps {
  name: string;
  description: string;
  url: string;
  about?: string;
  educationalLevel?: string;
  timeRequired?: string;
  numberOfQuestions?: number;
}

const QuizSchema = ({ 
  name, 
  description, 
  url,
  about = "Data Operations and HubSpot Implementation",
  educationalLevel = "Intermediate",
  timeRequired = "PT10M",
  numberOfQuestions = 20
}: QuizSchemaProps) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "@id": `${fullUrl}#quiz`,
    "name": name,
    "description": description,
    "url": fullUrl,
    "about": about,
    "educationalLevel": educationalLevel,
    "timeRequired": timeRequired,
    "numberOfQuestions": numberOfQuestions,
    "educationalAlignment": {
      "@type": "AlignmentObject",
      "alignmentType": "assesses",
      "educationalFramework": "Business Operations Assessment",
      "targetDescription": "Evaluates data operations maturity and HubSpot implementation readiness"
    },
    "provider": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": "DataOps Group",
      "url": baseUrl
    },
    "creator": {
      "@type": "Organization", 
      "@id": `${baseUrl}/#organization`
    },
    "isAccessibleForFree": true,
    "inLanguage": "en-US",
    "hasPart": {
      "@type": "WebPage",
      "url": fullUrl,
      "name": `${name} Results Page`
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default QuizSchema;
