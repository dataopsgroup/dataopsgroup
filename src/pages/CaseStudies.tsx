
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import CTABanner from '@/components/CTABanner';
import CaseStudiesGrid from '@/components/case-studies/CaseStudiesGrid';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>HubSpot Success Stories | Real Client Results | DataOps Group</title>
        <meta 
          name="description" 
          content="See how we've rescued broken HubSpot implementations and delivered measurable ROI. Real case studies from insurance, manufacturing, and SaaS companies." 
        />
        <link rel="canonical" href="https://dataopsgroup.com/case-studies" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HubSpot Success Stories | Real Client Results | DataOps Group" />
        <meta property="og:description" content="See how we've rescued broken HubSpot implementations and delivered measurable ROI. Real case studies from insurance, manufacturing, and SaaS companies." />
        <meta property="og:url" content="https://dataopsgroup.com/case-studies" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="HubSpot Success Stories | Real Client Results | DataOps Group" />
        <meta name="twitter:description" content="See how we've rescued broken HubSpot implementations and delivered measurable ROI. Real case studies from insurance, manufacturing, and SaaS companies." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "HubSpot Success Stories | Real Client Results | DataOps Group",
            "description": "See how we've rescued broken HubSpot implementations and delivered measurable ROI. Real case studies from insurance, manufacturing, and SaaS companies.",
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
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" }
        ]} 
      />
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
