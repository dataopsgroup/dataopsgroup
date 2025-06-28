
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';
import DataOpsImplementationPageHeader from '@/components/services/dataops-implementation/DataOpsImplementationPageHeader';
import DataOpsImplementationOverview from '@/components/services/dataops-implementation/DataOpsImplementationOverview';
import DataOpsImplementationDashboardGrid from '@/components/services/dataops-implementation/DataOpsImplementationDashboardGrid';
import DataOpsImplementationApproach from '@/components/services/dataops-implementation/DataOpsImplementationApproach';
import DataOpsImplementationChallenges from '@/components/services/dataops-implementation/DataOpsImplementationChallenges';
import DataOpsImplementationCTA from '@/components/services/dataops-implementation/DataOpsImplementationCTA';
import ServiceSchemaMarkup from '@/components/services/ServiceSchemaMarkup';
import DataOpsImplementationFAQSchema from '@/components/services/dataops-implementation/DataOpsImplementationFAQSchema';
import DataOpsImplementationBreadcrumbs from '@/components/services/dataops-implementation/DataOpsImplementationBreadcrumbs';
import ScrollProgressIndicator from '@/components/services/dataops-implementation/ScrollProgressIndicator';
import DataOpsImplementationSocialShare from '@/components/services/dataops-implementation/DataOpsImplementationSocialShare';
import { Helmet } from 'react-helmet-async';

/*
 * DESIGN PRESERVATION NOTICE:
 * This DataOps Implementation page design uses the following exact structure and should NOT be changed without explicit instruction:
 * 1. DataOpsImplementationPageHeader - Main title and description
 * 2. DataOpsImplementationOverview - Service overview content
 * 3. DataOpsImplementationDashboardGrid - Benefits grid with images (9 cards in 3-column layout)
 * 4. DataOpsImplementationApproach - Methodology section
 * 5. DataOpsImplementationChallenges - Common challenges section
 * 6. DataOpsImplementationCTA - Call-to-action section
 * 
 * This design was specifically created to match the Analytics & BI page structure and confirmed by the user.
 * Do not modify the component order, layout, or replace components without explicit user instruction.
 */

const DataOpsImplementation = () => {
  const serviceTitle = "DataOps Implementation Services - Portfolio Operations Scaling | DataOps Group";
  const serviceDescription = "Scale marketing operations across your portfolio with streamlined DataOps implementation. Standardize processes, automate workflows, and drive consistent performance across all portfolio companies.";
  const enhancedKeywords = "DataOps implementation, portfolio operations, marketing operations scaling, process standardization, workflow automation, portfolio company optimization, system integration, HubSpot implementation, data pipeline automation, operational efficiency";
  
  // Enhanced Service Schema for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "DataOps Implementation Services",
    "description": "Scale marketing operations across your portfolio with streamlined DataOps implementation, process standardization, and workflow automation.",
    "provider": {
      "@type": "Organization",
      "@id": "https://dataopsgroup.com/#organization",
      "name": "DataOps Group"
    },
    "serviceType": "Data Operations Implementation",
    "areaServed": "United States",
    "url": "https://dataopsgroup.com/services/dataops-implementation",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "DataOps Implementation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Portfolio Operations Scaling",
            "description": "Standardize and scale marketing operations across your entire portfolio of companies."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Process Standardization",
            "description": "Create consistent, repeatable processes that drive efficiency and performance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Workflow Automation",
            "description": "Automate data pipelines and operational workflows to reduce manual effort and errors."
          }
        }
      ]
    }
  };
  
  return (
    <SemanticLayout>
      <MetaHead 
        title={serviceTitle} 
        description={serviceDescription} 
        keywords={enhancedKeywords}
        canonicalPath="/services/dataops-implementation" 
        ogTitle={serviceTitle} 
        ogDescription={serviceDescription} 
        ogType="website"
      />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>
      
      <ServiceSchemaMarkup 
        serviceId="dataops-implementation" 
        isHubSpotTraining={false} 
      />
      
      <DataOpsImplementationFAQSchema />
      
      <ScrollProgressIndicator />
      <DataOpsImplementationSocialShare />
      
      <div className="pt-24 pb-16">
        <DataOpsImplementationBreadcrumbs />
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <DataOpsImplementationPageHeader />
          </div>
        </div>
        
        {/* Standardized container for overview section */}
        <div className="mx-auto px-0">
          <div className="max-w-6xl mx-auto">
            <DataOpsImplementationOverview />
          </div>
        </div>
        
        {/* Benefits grid section - full width for proper 3-column layout */}
        <DataOpsImplementationDashboardGrid />
        
        <div className="mx-auto px-0">
          <div className="max-w-6xl mx-auto">
            <DataOpsImplementationApproach />
            <DataOpsImplementationChallenges />
            <DataOpsImplementationCTA />
          </div>
        </div>
      </div>
    </SemanticLayout>
  );
};

export default DataOpsImplementation;
