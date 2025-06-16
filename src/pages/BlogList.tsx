
import React, { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import SemanticLayout from '@/components/layout/SemanticLayout';
import { blogPosts } from '@/data/blog';
import CTABanner from '@/components/CTABanner';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import MetaHead from '@/components/seo/MetaHead';
import BlogListHero from '@/components/blog/BlogListHero';
import BlogListGrid from '@/components/blog/BlogListGrid';
import { Helmet } from 'react-helmet-async';
import { performanceMonitor } from '@/lib/performance-monitor';
import { buildAbsoluteUrl } from '@/utils/url-builder';

const BlogList = () => {
  const location = useLocation();
  const endTimer = performanceMonitor.startTimer('BlogList', 'render');

  // Define breadcrumbs for the insights page
  const breadcrumbs = [{
    name: 'Home',
    url: '/'
  }, {
    name: 'Insights',
    url: '/insights'
  }];

  // Memoize filtered posts to avoid recalculation on every render
  const filteredBlogPosts = useMemo(() => {
    const endFilterTimer = performanceMonitor.startTimer('BlogList', 'filterPosts');
    
    const filtered = blogPosts.filter(post => 
      post.category?.toLowerCase() !== 'case study' && 
      post.category?.toLowerCase() !== 'case studies'
    );
    
    endFilterTimer();
    return filtered;
  }, []);

  // Memoize schema data to avoid recalculation
  const schemaData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Insights | DataOps Group",
    "description": "Expert insights on HubSpot data management, marketing analytics, and revenue generation from DataOps Group.",
    "publisher": {
      "@type": "Organization",
      "name": "DataOps Group",
      "logo": {
        "@type": "ImageObject",
        "url": buildAbsoluteUrl("/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png")
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": filteredBlogPosts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": buildAbsoluteUrl(`/insights/${post.id}`),
        "name": post.title
      }))
    }
  }), [filteredBlogPosts]);

  useEffect(() => {
    // Defer analytics tracking to avoid blocking render
    const trackingTimer = setTimeout(() => {
      try {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'view_item_list', {
            item_list_name: 'Blog Posts',
            items: filteredBlogPosts.slice(0, 10).map((post, index) => ({
              item_id: post.id,
              item_name: post.title,
              item_category: post.category || 'Blog',
              index: index + 1
            }))
          });
        }

        // Track in HubSpot - use path without query params - with safety checks
        if (typeof window !== 'undefined' && window._hsq) {
          window._hsq.push(['setPath', location.pathname]);
          window._hsq.push(['trackPageView']);
        }
      } catch (error) {
        console.warn('Analytics tracking failed:', error);
      }
    }, 200);

    return () => clearTimeout(trackingTimer);
  }, [filteredBlogPosts, location.pathname]);

  // Add debugging for blog posts
  console.log('BlogList component rendering');
  console.log('Available blog posts:', filteredBlogPosts.length);
  
  endTimer();

  return (
    <SemanticLayout>
      <MetaHead 
        title="Insights | DataOps Group" 
        description="Expert insights on HubSpot data management, marketing analytics, and revenue generation from DataOps Group." 
        keywords="hubspot insights, marketing data, marketing analytics, sales analytics, data management, revenue generation" 
        canonicalPath="/insights" 
        ogType="website" 
        ogTitle="Expert HubSpot Insights | DataOps Group" 
        ogDescription="Discover actionable insights on HubSpot data management, marketing analytics, and revenue generation strategies." 
        ogImage="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
        siteName="DataOps Group"
      />
      
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbs} />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      
      <div className="insights-page">
        <BlogListHero />
        <BlogListGrid posts={filteredBlogPosts} />

        <section aria-label="Call to Action">
          <CTABanner />
        </section>
      </div>
    </SemanticLayout>
  );
};

export default BlogList;
