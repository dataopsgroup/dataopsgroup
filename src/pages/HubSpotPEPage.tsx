import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import HubSpotPEHero from '@/components/pillar-content/hubspot-pe/HubSpotPEHero';
import WhyHubSpotFeatures from '@/components/pillar-content/hubspot-pe/WhyHubSpotFeatures';
import StandardizationComparison from '@/components/pillar-content/hubspot-pe/StandardizationComparison';
import CRMSelectionChecklist from '@/components/pillar-content/hubspot-pe/CRMSelectionChecklist';
import PlatformComparisonTable from '@/components/pillar-content/hubspot-pe/PlatformComparisonTable';
import ROICalculatorWidget from '@/components/pillar-content/hubspot-pe/ROICalculatorWidget';
import HubSpotPEFAQ from '@/components/pillar-content/hubspot-pe/HubSpotPEFAQ';
import FinalCTASection from '@/components/pillar-content/hubspot-pe/FinalCTASection';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ArticleSchema from '@/components/seo/ArticleSchema';
const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
const HubSpotPEPage = () => {
  return <SemanticLayout>
      <Helmet>
        <title>HubSpot for Private Equity | CRM Implementation Guide 2025 | DataOps Group</title>
        <meta name="description" content="Complete guide to implementing HubSpot for private equity firms. ROI calculator, platform comparisons, and proven implementation strategies for portfolio operations." />
        <meta name="keywords" content="hubspot private equity, pe crm implementation, portfolio operations, private equity hubspot, crm standardization" />
        <link rel="canonical" href={`${baseUrl}/guides/hubspot-private-equity`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="HubSpot for Private Equity | CRM Implementation Guide 2025" />
        <meta property="og:description" content="Complete guide to implementing HubSpot for private equity firms. ROI calculator, platform comparisons, and proven implementation strategies." />
        <meta property="og:url" content={`${baseUrl}/guides/hubspot-private-equity`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta property="og:site_name" content="DataOps Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HubSpot for Private Equity | CRM Implementation Guide 2025" />
        <meta name="twitter:description" content="Complete guide to implementing HubSpot for private equity firms. ROI calculator, platform comparisons, and proven implementation strategies." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta name="twitter:site" content="@dataops_group" />
      </Helmet>
      
      <BreadcrumbSchema items={[{
      name: "Home",
      url: "/"
    }, {
      name: "Guides",
      url: "/guides"
    }, {
      name: "HubSpot for Private Equity",
      url: "/guides/hubspot-private-equity"
    }]} />
      
      <ArticleSchema title="HubSpot for Private Equity: Beyond Spreadsheets to Strategic Advantage" description="Complete guide to implementing HubSpot for private equity firms with ROI calculator, platform comparisons, and proven implementation strategies." authorName="Geoff Tucker" publishDate="2025-01-08" url={`${baseUrl}/guides/hubspot-private-equity`} image={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />

      <main className="bg-white">
        <HubSpotPEHero />
        <WhyHubSpotFeatures />
        <StandardizationComparison />
        <CRMSelectionChecklist />
        <PlatformComparisonTable />
        <ROICalculatorWidget />
        <HubSpotPEFAQ />
        <FinalCTASection />
      </main>
    </SemanticLayout>;
};
export default HubSpotPEPage;