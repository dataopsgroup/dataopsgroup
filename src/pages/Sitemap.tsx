
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import CTABanner from '@/components/CTABanner';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import WebsiteSchema from '@/components/seo/WebsiteSchema';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import { useIsMobile } from '@/hooks/use-mobile';

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

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  const { isMobile } = useIsMobile();
  
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
        <title>Site Map | DataOps Group</title>
        <meta name="description" content="DataOps Group sitemap and page directory." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={`${baseUrl}/sitemap`} />
        
        {/* Enhanced viewport meta tag for better mobile experience */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5, minimum-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Site Map | DataOps Group" />
        <meta property="og:description" content="DataOps Group sitemap and page directory." />
        <meta property="og:url" content={`${baseUrl}/sitemap`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Site Map | DataOps Group" />
        <meta name="twitter:description" content="DataOps Group sitemap and page directory." />
        
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
      <SitemapSchema baseUrl={baseUrl} />
      
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
