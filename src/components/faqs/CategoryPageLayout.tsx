
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SemanticLayout from '@/components/layout/SemanticLayout';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQPageSchema from '@/components/seo/FAQPageSchema';
import CTABanner from '@/components/CTABanner';
import FAQCategory from '@/components/faqs/FAQCategory';
import FAQHelp from '@/components/faqs/FAQHelp';
import CategoryNavigation from '@/components/faqs/CategoryNavigation';
import MetaHead from '@/components/seo/MetaHead';
import { FAQCategory as FAQCategoryType } from '@/data/faqs/types';

interface CategoryPageLayoutProps {
  category: FAQCategoryType;
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  robots?: string;
}

const CategoryPageLayout: React.FC<CategoryPageLayoutProps> = ({
  category,
  title,
  description,
  keywords,
  canonicalPath,
  robots = "index, follow"
}) => {
  const formattedFAQs = category.items.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'FAQs', url: '/faqs' },
    { name: category.title, url: canonicalPath }
  ];

  return (
    <SemanticLayout>
      {/* Use MetaHead for all meta tags including title */}
      <MetaHead
        title={title}
        description={description}
        keywords={keywords}
        canonicalPath={canonicalPath}
        ogType="website"
        ogTitle={title}
        ogDescription={description}
      />
      
      {/* Additional meta tags that MetaHead doesn't handle */}
      <Helmet>
        <meta name="robots" content={robots} />
      </Helmet>
      
      {/* Use individual Question schema for category pages to avoid duplicate FAQPage */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "QAPage",
            "@id": `https://dataopsgroup.com${canonicalPath}#qapage`,
            "url": `https://dataopsgroup.com${canonicalPath}`,
            "name": `${category.title} - FAQ`,
            "description": description,
            "mainEntity": formattedFAQs.map((item, index) => ({
              "@type": "Question",
              "@id": `https://dataopsgroup.com${canonicalPath}#question-${index + 1}`,
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "@id": `https://dataopsgroup.com${canonicalPath}#answer-${index + 1}`,
                "text": item.answer
              }
            })),
            "isPartOf": {
              "@id": "https://dataopsgroup.com/faqs#faqpage"
            },
            "inLanguage": "en-US"
          })}
        </script>
      </Helmet>
      
      <BreadcrumbSchema items={breadcrumbs} />
      
      <section className="bg-gradient-to-br from-white to-dataops-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {category.title} <span className="gradient-text">FAQ</span>
            </h1>
            <p className="text-lg text-gray-700">{description}</p>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700">
                💡 <strong>Tip:</strong> For the complete FAQ collection, visit our{' '}
                <Link to="/faqs" className="underline hover:text-blue-800">main FAQ page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <CategoryNavigation currentCategoryId={category.id} />
          
          <div className="max-w-4xl mx-auto">
            <FAQCategory category={category} />
          </div>
          
          <aside className="mt-12">
            <FAQHelp />
          </aside>
        </div>
      </section>
      
      <CTABanner />
    </SemanticLayout>
  );
};

export default CategoryPageLayout;
