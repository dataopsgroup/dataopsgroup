
import React from 'react';

interface AssessmentSchemaProps {
  url: string;
}

const AssessmentSchema: React.FC<AssessmentSchemaProps> = ({ url }) => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Quiz",
        "name": "HubSpot Implementation Assessment Quiz",
        "description": "Evaluate your current HubSpot implementation and identify key improvement opportunities with this interactive assessment.",
        "provider": {
          "@type": "Organization",
          "name": "DataOps Group",
          "url": "https://dataopsgroup.com"
        },
        "educationalAlignment": {
          "@type": "AlignmentObject",
          "alignmentType": "assesses",
          "educationalFramework": "HubSpot Implementation Quality",
          "targetName": "HubSpot Implementation Best Practices"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What percentage of your team regularly uses HubSpot for their core responsibilities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ideally, more than 80% of your team should be regularly using HubSpot for their core responsibilities to maximize ROI."
            }
          },
          {
            "@type": "Question",
            "name": "How effectively is your HubSpot implementation delivering measurable ROI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A successful HubSpot implementation should have clear metrics that demonstrate its impact on business objectives and revenue growth."
            }
          }
        ],
        "url": url
      })}
    </script>
  );
};

export default AssessmentSchema;
