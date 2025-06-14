
import React from 'react';
import FAQPageSchema from '@/components/seo/FAQPageSchema';

const AnalyticsBIFAQSchema = () => {
  const faqItems = [
    {
      question: "What types of analytics and BI services do you provide?",
      answer: "We provide comprehensive analytics and business intelligence services including custom dashboard development, data visualization, reporting automation, predictive analytics, and data warehouse setup. Our services are designed to transform raw data into actionable business insights."
    },
    {
      question: "How long does it take to implement an analytics solution?",
      answer: "Implementation timelines vary based on complexity, but most analytics projects take 4-12 weeks. We start with a data audit, then design and build custom dashboards and reports tailored to your business needs."
    },
    {
      question: "Do you work with existing data sources and systems?",
      answer: "Yes, we integrate with existing data sources including HubSpot, Salesforce, Google Analytics, databases, and other business systems. We create unified data views regardless of where your data currently lives."
    },
    {
      question: "What makes your analytics approach different?",
      answer: "We focus on business outcomes rather than just technical implementation. Our analytics solutions are designed to drive specific business decisions and include proper data governance, quality controls, and user training."
    },
    {
      question: "Can you help with data quality issues before building analytics?",
      answer: "Absolutely. Data quality is foundational to effective analytics. We start every project with a comprehensive data audit and cleanup process to ensure your analytics are built on reliable, accurate data."
    }
  ];

  return (
    <FAQPageSchema 
      items={faqItems}
      url="/services/analytics-bi"
      title="Analytics & BI Services FAQ - DataOps Group"
      description="Common questions about our analytics and business intelligence services, including implementation timelines, data integration, and quality assurance."
    />
  );
};

export default AnalyticsBIFAQSchema;
