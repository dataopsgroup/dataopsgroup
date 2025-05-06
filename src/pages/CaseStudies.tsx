import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import CTABanner from '@/components/CTABanner';
import CaseStudiesGrid from '@/components/case-studies/CaseStudiesGrid';

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Case Studies | DataOps Group</title>
        <meta 
          name="description" 
          content="Real-world success stories and case studies showcasing how DataOps Group has transformed data operations for businesses." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Case Studies | DataOps Group",
            "description": "Real-world success stories and case studies showcasing how DataOps Group has transformed data operations for businesses.",
            "publisher": {
              "@type": "Organization",
              "name": "DataOps Group",
              "logo": {
                "@type": "ImageObject",
                "url": "https://dataopsgroup.com/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
              }
            }
          })}
        </script>
      </Helmet>
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-white to-dataops-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Case</span> Studies
              </h1>
              <p className="text-lg text-gray-700">
                Real-world success stories showing how we've transformed data operations for businesses
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8">Featured Case Studies</h2>
            <CaseStudiesGrid />
          </div>
        </section>
        
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
