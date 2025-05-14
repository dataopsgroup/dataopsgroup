
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  items: FAQItem[];
  url?: string;
  title?: string;
  description?: string;
}

const FAQPageSchema = ({ 
  items,
  url = "/faqs",
  title = "Frequently Asked Questions about HubSpot Consulting",
  description = "Find answers to common questions about HubSpot implementation, data quality, and marketing operations."
}: FAQPageSchemaProps) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${fullUrl}#faqpage`,
    "url": fullUrl,
    "name": title,
    "description": description,
    "mainEntity": items.map((item, index) => ({
      "@type": "Question",
      "@id": `${fullUrl}#question-${index + 1}`,
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "@id": `${fullUrl}#answer-${index + 1}`,
        "text": item.answer
      }
    })),
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "isPartOf": {
      "@id": `${baseUrl}/#website`
    },
    "inLanguage": "en-US"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default FAQPageSchema;
