
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import CTABanner from '@/components/CTABanner';
import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import CaseStudiesOverview from '@/components/case-studies/CaseStudiesOverview';
import CaseStudiesGrid from '@/components/case-studies/CaseStudiesGrid';
import CaseStudiesIndustries from '@/components/case-studies/CaseStudiesIndustries';
import CaseStudiesSidebar from '@/components/case-studies/CaseStudiesSidebar';

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Case Studies - DataOps Group</title>
        <meta name="description" content="Explore real-world examples of how DataOps Group has helped organizations transform their data operations and drive business success." />
        <meta name="keywords" content="case studies, success stories, data transformation, client results, financial services data, healthcare data integration, retail analytics" />
        <link rel="canonical" href="/case-studies" />
      </Helmet>
      <Navbar />
      <main>
        <CaseStudiesHero />

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-12">
                <CaseStudiesOverview />
                <CaseStudiesGrid />
                <CaseStudiesIndustries />
              </div>
              
              <div>
                <CaseStudiesSidebar />
              </div>
            </div>
          </div>
        </section>
        
        <CTABanner />
      </main>
      <Footer />
      
      {/* Schema markup for Case Studies page */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Case Studies - DataOps Group",
          "description": "Explore real-world examples of how DataOps Group has helped organizations transform their data operations and drive business success.",
          "publisher": {
            "@type": "Organization",
            "name": "DataOps Group"
          },
          "author": {
            "@type": "Person",
            "name": "Geoff Tucker"
          }
        })
      }} />
    </div>
  );
};

export default CaseStudiesPage;
