
import React from 'react';
import CategoryPageLayout from '@/components/faqs/CategoryPageLayout';
import faqCategories from '@/data/faqs';

const FAQDataQuality = () => {
  const category = faqCategories.find(cat => cat.id === 'data-quality');
  
  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <CategoryPageLayout
      category={category}
      title="Data Quality FAQ - DataOps Group"
      description="Learn about data quality management, data cleaning, enrichment, and best practices for maintaining clean HubSpot data."
      keywords="data quality FAQ, data cleaning, data enrichment, HubSpot data management, data governance, data operations"
      canonicalPath="/faqs/data-quality"
    />
  );
};

export default FAQDataQuality;
