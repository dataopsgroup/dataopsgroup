
import React from 'react';
import { FAQItem } from '@/data/faqs/types';
import { Helmet } from 'react-helmet-async';

interface FAQSchemaProps {
  items: FAQItem[];
  pageTitle: string;
  pageDescription: string;
}

const FAQSchema: React.FC<FAQSchemaProps> = ({ items, pageTitle, pageDescription }) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  
  return (
    <Helmet>
      {/* Removed duplicate title tag - handled by MetaHead component */}
      <meta name="keywords" content="HubSpot FAQs, HubSpot consultant, data quality, marketing ROI, sales and marketing alignment, HubSpot optimization, statistical process control, data cleaning, reporting dashboards" />
      
      {/* FAQ schema markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        })}
      </script>
    </Helmet>
  );
};

export default FAQSchema;
