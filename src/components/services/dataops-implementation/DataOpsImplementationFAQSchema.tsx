
import React from 'react';

const DataOpsImplementationFAQSchema = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is DataOps implementation for portfolio companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DataOps implementation involves streamlining and automating data operations across portfolio companies to create standardized processes, improve data quality, and enable consistent performance measurement across investments."
        }
      },
      {
        "@type": "Question", 
        "name": "How long does DataOps implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our proven methodology delivers full DataOps implementation in 100 days or less, with phased rollouts that minimize disruption to existing operations while maximizing value creation."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI can we expect from DataOps implementation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Portfolio companies typically see 18-22x ROI from DataOps implementation, with 73% efficiency gains, 85% improvement in data quality, and 65% reduction in time to insights."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
};

export default DataOpsImplementationFAQSchema;
