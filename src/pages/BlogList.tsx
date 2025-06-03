
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SemanticLayout from '@/components/layout/SemanticLayout';
import { blogPosts } from '@/data/blog';
import CTABanner from '@/components/CTABanner';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import MetaHead from '@/components/seo/MetaHead';
import BlogListHero from '@/components/blog/BlogListHero';
import BlogListGrid from '@/components/blog/BlogListGrid';

const BlogList = () => {
  const location = useLocation();

  // Define breadcrumbs for the insights page
  const breadcrumbs = [{
    name: 'Home',
    url: '/'
  }, {
    name: 'Insights',
    url: '/insights'
  }];

  // Filter out posts tagged as "Case Study"
  const filteredBlogPosts = blogPosts.filter(post => post.category?.toLowerCase() !== 'case study' && post.category?.toLowerCase() !== 'case studies');

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  useEffect(() => {
    // Track page view with blog post count - with safety checks
    try {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'view_item_list', {
          item_list_name: 'Blog Posts',
          items: filteredBlogPosts.map((post, index) => ({
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
  }, [filteredBlogPosts, location.pathname]);

  // Add debugging for blog posts
  console.log('BlogList component rendering');
  console.log('Available blog posts:', filteredBlogPosts.length);
  console.log('Blog post IDs:', filteredBlogPosts.map(p => p.id));

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
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Insights | DataOps Group",
          "description": "Expert insights on HubSpot data management, marketing analytics, and revenue generation from DataOps Group.",
          "publisher": {
            "@type": "Organization",
            "name": "DataOps Group",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`
            }
          },
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": filteredBlogPosts.map((post, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "url": `${baseUrl}/insights/${post.id}`,
              "name": post.title
            }))
          }
        })}
      </script>
      
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
