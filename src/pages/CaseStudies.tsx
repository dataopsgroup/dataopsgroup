
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import CTABanner from '@/components/CTABanner';
import CaseStudiesGrid from '@/components/case-studies/CaseStudiesGrid';
import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Portfolio Company Success Stories | DataOps Group</title>
        <meta 
          name="description" 
          content="See how DataOps Group has transformed marketing operations for portfolio companies, driving measurable growth across diverse industries with proven ROI." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Portfolio Company Success Stories | DataOps Group",
            "description": "See how DataOps Group has transformed marketing operations for portfolio companies, driving measurable growth across diverse industries with proven ROI.",
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
          { name: "Portfolio Success Stories", url: "/case-studies" }
        ]} 
      />
      <Navbar />
      <main className="flex-1">
        <CaseStudiesHero />
        
        <section className="py-16 px-4 bg-gray-50">
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
