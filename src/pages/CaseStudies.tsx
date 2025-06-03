
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import CTABanner from '@/components/CTABanner';
import CaseStudiesGrid from '@/components/case-studies/CaseStudiesGrid';
import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import MetaHead from '@/components/seo/MetaHead';

const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

const CaseStudiesPage = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Portfolio Success Stories", url: "/case-studies" }
  ];

  return (
    <SemanticLayout>
      <MetaHead
        title="Portfolio Company Success Stories | DataOps Group"
        description="See how DataOps Group has transformed marketing operations for portfolio companies, driving measurable growth across diverse industries with proven ROI."
        keywords="portfolio companies, case studies, hubspot implementation, marketing operations, revenue growth, dataops success stories"
        canonicalPath="/case-studies"
        ogType="website"
        ogTitle="Portfolio Company Success Stories | DataOps Group"
        ogDescription="See how DataOps Group has transformed marketing operations for portfolio companies, driving measurable growth across diverse industries with proven ROI."
        ogImage="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
        siteName="DataOps Group"
      />
      
      <BreadcrumbSchema items={breadcrumbs} />
      
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
              "url": `${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`
            }
          }
        })}
      </script>
      
      <main className="flex-1">
        <CaseStudiesHero />
        
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <CaseStudiesGrid />
          </div>
        </section>
        
        <CTABanner />
      </main>
    </SemanticLayout>
  );
};

export default CaseStudiesPage;
