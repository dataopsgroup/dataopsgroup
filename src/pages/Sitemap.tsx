
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import CTABanner from '@/components/CTABanner';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import WebsiteSchema from '@/components/seo/WebsiteSchema';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import { useIsMobile } from '@/hooks/use-mobile';
import { buildCanonicalUrl, buildOGUrl, buildAbsoluteUrl } from '@/utils/url-builder';

// Import refactored components
import SitemapHero from '@/components/sitemap/SitemapHero';
import SitemapGrid from '@/components/sitemap/SitemapGrid';
import SitemapHelp from '@/components/sitemap/SitemapHelp';
import SitemapSchema from '@/components/sitemap/SitemapSchema';

const SitemapPage = () => {
  // Define breadcrumbs for schema
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Sitemap', url: '/sitemap' },
  ];

  const { isMobile } = useIsMobile();
  const canonicalUrl = buildCanonicalUrl('/sitemap');
  const ogUrl = buildOGUrl('/sitemap');
  
  // Ensure links have proper tap target sizes on mobile
  useEffect(() => {
    if (isMobile) {
      const links = document.querySelectorAll('a, button');
      links.forEach(link => {
        const element = link as HTMLElement;
        const rect = element.getBoundingClientRect();
        
        // Ensure minimum tap target size of 48x48px for mobile
        if (rect.width < 48 || rect.height < 48) {
          element.style.minWidth = '48px';
          element.style.minHeight = '48px';
          element.style.display = 'inline-flex';
          element.style.alignItems = 'center';
          element.style.padding = '0.5rem';
        }
      });
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Sitemap - DataOps Group | Website Navigation Guide</title>
        <meta name="description" content="Navigate the DataOps Group website with ease using our comprehensive sitemap. Find all pages, resources, and services for HubSpot consulting and implementation." />
        <meta name="keywords" content="sitemap, DataOps Group navigation, HubSpot consulting pages, website map, marketing operations resources" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Enhanced viewport meta tag for better mobile experience */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5, minimum-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sitemap - DataOps Group | Website Navigation Guide" />
        <meta property="og:description" content="Navigate the DataOps Group website with ease using our comprehensive sitemap. Find all pages, resources, and services for HubSpot consulting and implementation." />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={buildAbsoluteUrl("/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png")} />
        <meta property="og:site_name" content="DataOps Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sitemap - DataOps Group | Website Navigation Guide" />
        <meta name="twitter:description" content="Navigate the DataOps Group website with ease using our comprehensive sitemap. Find all pages, resources, and services for HubSpot consulting and implementation." />
        <meta name="twitter:image" content={buildAbsoluteUrl("/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png")} />
        <meta name="twitter:site" content="@dataops_group" />
        
        {/* Mobile touch action for better tap targets */}
        <style type="text/css">{`
          a, button, .tap-target {
            touch-action: manipulation;
          }
          
          @media (max-width: 768px) {
            .mobile-link {
              min-height: 48px;
              min-width: 48px;
              display: flex;
              align-items: center;
              padding: 0.5rem;
            }
            .mobile-text {
              font-size: 16px !important;
              line-height: 1.5 !important;
            }
          }
        `}</style>
      </Helmet>
      
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbs} />
      <WebsiteSchema />
      <OrganizationSchema />
      <SitemapSchema baseUrl="https://dataopsgroup.com" />
      
      <Navbar />
      <main className="flex-1" role="main">
        <SitemapHero />
        <SitemapGrid />
        <SitemapHelp />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default SitemapPage;
