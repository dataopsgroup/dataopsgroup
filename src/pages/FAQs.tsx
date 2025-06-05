
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import CTABanner from '@/components/CTABanner';
import FAQPageSchema from '@/components/seo/FAQPageSchema';

// Import refactored FAQ components
import FAQHero from '@/components/faqs/FAQHero';
import FAQCategory from '@/components/faqs/FAQCategory';
import FAQHelp from '@/components/faqs/FAQHelp';
import FAQTableOfContents from '@/components/faqs/FAQTableOfContents';
import FAQSearch from '@/components/faqs/FAQSearch';
import FAQSearchResults from '@/components/faqs/FAQSearchResults';

// Import FAQ data
import faqCategories, { 
  hubspotFAQs, 
  approachFAQs, 
  dataQualityFAQs, 
  hubspotModulesFAQs,
  hubspotExpertFAQs 
} from '@/data/faqs';
import { validateFAQData } from '@/utils/route-monitoring';
import { useFAQSearch } from '@/hooks/useFAQSearch';

const FAQsPage = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  // Validate FAQ data on component mount
  useEffect(() => {
    // Validate FAQ data structure to ensure it's working properly
    const isValid = validateFAQData(faqCategories);
    
    if (!isValid) {
      console.error('FAQ data validation failed. This could cause rendering issues.');
    }
  }, []);

  // Initialize search functionality
  const {
    searchTerm,
    selectedCategory,
    isSearchActive,
    searchResults,
    handleSearch,
    clearSearch,
    handleCategoryFilter
  } = useFAQSearch(faqCategories);
  
  // Combine all FAQ items for schema markup
  const allFAQs = [
    ...hubspotFAQs, 
    ...approachFAQs, 
    ...dataQualityFAQs, 
    ...hubspotModulesFAQs,
    ...hubspotExpertFAQs
  ];

  // Format FAQs for FAQPageSchema
  const formattedFAQs = allFAQs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  // Define breadcrumbs for schema
  const breadcrumbs = [
    {
      name: 'Home',
      url: '/'
    }, 
    {
      name: 'FAQs',
      url: '/faqs'
    }
  ];

  return (
    <SemanticLayout>
      <Helmet>
        <title>HubSpot FAQ - Expert Answers to Common Questions | DataOps Group</title>
        <meta name="description" content="Get expert answers to your HubSpot questions. Comprehensive FAQ covering implementation, data quality, expert hiring, and best practices from certified consultants." />
        <meta name="keywords" content="HubSpot FAQ, HubSpot questions, HubSpot implementation FAQ, data quality questions, HubSpot expert hiring, marketing operations FAQ, RevOps questions, HubSpot consultant answers" />
        <link rel="canonical" href={`${baseUrl}/faqs`} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="DataOps Group" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HubSpot FAQ - Expert Answers from Certified Consultants" />
        <meta property="og:description" content="Comprehensive answers to common HubSpot questions covering implementation, data quality, expert hiring, and optimization strategies." />
        <meta property="og:url" content={`${baseUrl}/faqs`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta property="og:image:alt" content="HubSpot FAQ and Expert Answers" />
        <meta property="og:site_name" content="DataOps Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HubSpot FAQ - Expert Answers to Common Questions" />
        <meta name="twitter:description" content="Get expert answers to your HubSpot questions from certified consultants with 12+ years of experience." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta name="twitter:site" content="@dataops_group" />
        
        {/* Additional SEO tags */}
        <meta name="article:section" content="FAQ" />
        <meta name="article:tag" content="HubSpot FAQ" />
        <meta name="article:tag" content="Expert Answers" />
        <meta name="article:tag" content="Implementation Guide" />
      </Helmet>
      
      <FAQPageSchema items={formattedFAQs} url="/faqs" />
      <BreadcrumbSchema items={breadcrumbs} />
      
      <section aria-label="FAQ Hero Section">
        <FAQHero />
      </section>
      
      <section className="py-16 px-4 bg-white" aria-label="Frequently Asked Questions">
        <div className="container mx-auto">
          <FAQSearch
            categories={faqCategories}
            onSearch={handleSearch}
            onCategoryFilter={handleCategoryFilter}
            onClear={clearSearch}
            selectedCategory={selectedCategory}
            isSearchActive={isSearchActive}
          />

          {isSearchActive ? (
            <FAQSearchResults results={searchResults} searchTerm={searchTerm} />
          ) : (
            <>
              <FAQTableOfContents categories={faqCategories} />
              
              <div className="flex flex-col space-y-8">
                {faqCategories && Array.isArray(faqCategories) ? (
                  faqCategories.map((category) => (
                    <FAQCategory key={category.id} category={category} />
                  ))
                ) : (
                  <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600">
                      Error loading FAQ content. Please try refreshing the page.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
          
          <aside aria-label="Additional Help" className="mt-12">
            <FAQHelp />
          </aside>
        </div>
      </section>
      
      <section aria-label="Call To Action">
        <CTABanner />
      </section>
    </SemanticLayout>
  );
};

export default FAQsPage;
