
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
      title="HubSpot Data Quality FAQ | DataOps Group"
      description="Expert answers about HubSpot data quality, cleaning databases, governance, and maintaining accurate contact information."
      keywords="HubSpot data quality FAQ, data cleaning questions, database cleanup, data governance, contact data management, duplicate removal, data standardization, CRM data quality"
      canonicalPath="/faqs/data-quality"
      robots="index, follow"
    />
  );
};

export default FAQDataQuality;
