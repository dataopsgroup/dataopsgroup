
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';
import MarketingOperationsRevOpsHero from '@/components/services/MarketingOperationsRevOpsHero';
import MarketingOperationsRevOpsContent from '@/components/services/MarketingOperationsRevOpsContent';
import MarketingOperationsRevOpsBenefits from '@/components/services/MarketingOperationsRevOpsBenefits';
import RelatedServices from '@/components/services/RelatedServices';
import CTABanner from '@/components/CTABanner';
import MarketingOperationsRevOpsSchema from '@/components/services/MarketingOperationsRevOpsSchema';
import { Helmet } from 'react-helmet-async';

const MarketingOperationsRevOps = () => {
  // Enhanced Service Schema for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Marketing Operations & Revenue Operations Services",
    "description": "Transform your revenue operations with expert marketing automation, data integration, and performance optimization to maximize ROI through streamlined processes.",
    "provider": {
      "@type": "Organization",
      "@id": "https://dataopsgroup.com/#organization",
      "name": "DataOps Group"
    },
    "serviceType": "Revenue Operations Consulting",
    "areaServed": "United States",
    "url": "https://dataopsgroup.com/services/marketing-operations-revops",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Marketing Operations & RevOps Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing Automation Setup",
            "description": "Design and implement sophisticated marketing automation workflows that nurture leads and drive conversions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Integration & Analytics",
            "description": "Connect your marketing and sales data for comprehensive performance tracking and optimization."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Optimization",
            "description": "Optimize your revenue operations to maximize ROI and accelerate business growth."
          }
        }
      ]
    }
  };

  return (
    <SemanticLayout>
      <MetaHead
        title="Marketing Operations & RevOps | DataOps Group"
        description="Transform your revenue operations with expert marketing automation, data integration, and performance optimization. Maximize ROI through streamlined processes and analytics."
        keywords="marketing operations, revenue operations, portfolio growth, systematic marketing processes, advanced analytics, portfolio consulting"
        canonicalPath="/services/marketing-operations-revops"
        ogType="website"
        ogTitle="Marketing Operations & RevOps | DataOps Group"
        ogDescription="Transform your revenue operations with expert marketing automation, data integration, and performance optimization. Maximize ROI through streamlined processes and analytics."
      />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>
      
      <MarketingOperationsRevOpsSchema />
      
      <MarketingOperationsRevOpsHero />

      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="pt-16 lg:pt-24 no-image-hover-effect">
            <MarketingOperationsRevOpsContent />
          </div>
        </div>
      </div>
      
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="py-16 lg:py-24">
            <MarketingOperationsRevOpsBenefits />
          </div>
        </div>
      </div>
      
      <div className="bg-white">
        <RelatedServices 
          currentService="marketing-operations-revops"
          title="Explore Our Other Services"
          description="Discover how our comprehensive service offerings can support your business transformation"
        />
      </div>
      
      <CTABanner />
    </SemanticLayout>
  );
};

export default MarketingOperationsRevOps;
