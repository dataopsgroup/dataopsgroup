
import React from 'react';
import BreadcrumbNavigation from '@/components/seo/BreadcrumbNavigation';

const FAQHero: React.FC = () => {
  const breadcrumbItems = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'FAQs',
      url: '/faqs',
      current: true
    }
  ];

  return (
    <section className="bg-gradient-to-br from-white to-dataops-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <BreadcrumbNavigation items={breadcrumbItems} className="mb-6" />
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-lg text-gray-700">
            Find answers to common questions about our HubSpot optimization services and implementation approach
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQHero;
