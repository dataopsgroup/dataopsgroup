
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SemanticLayout from '@/components/layout/SemanticLayout';
import { blogPosts } from '@/data/blog';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import CTABanner from '@/components/CTABanner';
import { format } from 'date-fns';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import MetaHead from '@/components/seo/MetaHead';
import OptimizedImage from '@/components/ui/optimized-image';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar } from 'lucide-react';
import DynamicThumbnail from '@/components/blog/DynamicThumbnail';
import { calculateReadingTime } from '@/utils/thumbnail-generator';

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

  // Ensure canonical URL is without query parameters
  const canonicalPath = '/insights';

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
      
      <section className="bg-gradient-to-br from-white to-dataops-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Insights</span> & Resources
            </h1>
            <p className="text-lg text-gray-700">
              Expert advice on transforming your HubSpot ordeal into a revenue-generating machine
            </p>
          </header>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogPosts.map((post, index) => {
              // Format date for time element
              const publishDate = new Date(post.date);
              const formattedPublishDate = publishDate.toISOString();
              const readingTime = calculateReadingTime(post.content);

              // Check if post has a cover image
              const hasCoverImage = !!post.coverImage;
              
              // Special case for the post that has a specific image
              const coverImage = post.id === "hidden-cost-of-failed-hubspot-implementations" 
                ? "/lovable-uploads/dc1dbbad-be41-4dbb-8dd8-381cc59a869c.png" 
                : post.coverImage;

              return (
                <article key={post.id} className="h-full">
                  <Card className="blog-card-enhanced h-full flex flex-col group">
                    <Link 
                      to={`/insights/${post.id}`} 
                      className="flex flex-col h-full" 
                      onClick={() => {
                        // Track blog post click
                        if (window.gtag) {
                          window.gtag('event', 'select_content', {
                            content_type: 'blog_post',
                            content_id: post.id,
                            item_list_name: 'Blog Posts',
                            index: index
                          });
                        }
                      }} 
                      aria-label={`Read article: ${post.title}`}
                    >
                      <CardHeader className="pb-4 relative overflow-hidden">
                        {/* Conditionally render either existing image or dynamic thumbnail */}
                        {hasCoverImage ? (
                          <figure className="relative overflow-hidden rounded-t-lg mb-4">
                            <OptimizedImage 
                              src={coverImage} 
                              alt={post.title} 
                              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                              width={400} 
                              height={200} 
                              loading="lazy" 
                              objectFit="cover" 
                              aspectRatio={2 / 1} 
                              placeholder="/placeholder.svg" 
                            />
                            {post.category && (
                              <Badge className="category-tag-enhanced absolute top-3 left-3">
                                {post.category}
                              </Badge>
                            )}
                          </figure>
                        ) : (
                          <DynamicThumbnail
                            title={post.title}
                            category={post.category}
                            readingTime={readingTime}
                            className="mb-4"
                          />
                        )}
                        <CardTitle className="text-xl font-semibold group-hover:text-dataops-600 transition-colors leading-tight">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="flex-grow px-6">
                        <CardDescription className="text-gray-700 leading-relaxed blog-excerpt">
                          {post.excerpt}
                        </CardDescription>
                      </CardContent>
                      
                      <CardFooter className="px-6 pb-6">
                        <div className="w-full">
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <time dateTime={formattedPublishDate}>
                                  {format(new Date(post.date), 'MMM dd, yyyy')}
                                </time>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span className="read-time">{readingTime} min read</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-600">By {post.author}</span>
                            <span className="text-dataops-600 group-hover:text-dataops-800 font-medium text-sm transition-colors">
                              Read More →
                            </span>
                          </div>
                        </div>
                      </CardFooter>
                    </Link>
                  </Card>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-label="Call to Action">
        <CTABanner />
      </section>
    </SemanticLayout>
  );
};

export default BlogList;
