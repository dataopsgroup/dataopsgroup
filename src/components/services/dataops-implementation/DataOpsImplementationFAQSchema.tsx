
import React from 'react';
import { Helmet } from 'react-helmet-async';

const DataOpsImplementationFAQSchema = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is DataOps implementation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DataOps implementation involves establishing automated data pipelines, standardized workflows, and integrated technology stacks to scale marketing operations across portfolio companies with consistent performance and efficiency."
        }
      },
      {
        "@type": "Question", 
        "name": "How long does DataOps implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DataOps implementation typically takes 6-12 weeks depending on portfolio size and complexity, with standardized processes deployed across all companies for immediate operational improvements."
        }
      },
      {
        "@type": "Question",
        "name": "What systems does DataOps integrate with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our DataOps implementation integrates with HubSpot, Salesforce, marketing automation platforms, BI tools, and custom data sources to create unified, automated workflows across your entire tech stack."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqData)}
      </script>
    </Helmet>
  );
};

export default DataOpsImplementationFAQSchema;
