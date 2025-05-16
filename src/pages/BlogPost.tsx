
import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog';
import CTABanner from '@/components/CTABanner';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { BlogPost } from '@/types/blog';
import BlogHeader from '@/components/blog/BlogHeader';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import BlogPostSchema from '@/components/seo/BlogPostSchema';
import MetaHead from '@/components/seo/MetaHead';
import OptimizedImage from '@/components/ui/optimized-image';

const BlogPostPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const { toast } = useToast();
  const location = useLocation();
  
  // Make sure we have the canonical URL without query parameters
  const canonicalPath = `/insights/${postId}`;
  
  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === postId);
    
    if (foundPost) {
      setPost(foundPost);
      // Get other posts (excluding current one) for the slider
      const otherPosts = blogPosts.filter(p => p.id !== postId);
      setRelatedPosts(otherPosts.slice(0, 3)); // Take up to 3 posts
      
      // Track post view in analytics
      if (window.gtag) {
        window.gtag('event', 'view_item', {
          items: [{
            item_id: foundPost.id,
            item_name: foundPost.title,
            item_category: foundPost.category || 'Blog',
            item_variant: foundPost.author
          }]
        });
      }
      
      // Track in HubSpot
      if (window._hsq) {
        window._hsq.push(['setPath', window.location.pathname]);
        window._hsq.push(['trackPageView']);
      }
    } else {
      toast({
        title: "Post not found",
        description: "We couldn't find the blog post you're looking for.",
        variant: "destructive"
      });
    }
  }, [postId, toast]);
  
  // Handle anchor links when the component mounts or location changes
  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Remove the # from the hash
      const element = document.getElementById(location.hash.slice(1));
      
      // If the element exists, scroll to it
      if (element) {
        // Give a small delay to ensure the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location, post]); // Re-run when location or post changes

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-6">Sorry, we couldn't find the blog post you're looking for.</p>
            <Button asChild>
              <Link to="/insights">Return to Insights</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Define breadcrumbs for this post
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Insights', url: '/insights' },
    { name: post?.title || '', url: `/insights/${postId}` },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead
        title={post?.title || 'Blog Post'}
        description={post?.excerpt || ''}
        keywords={`${post?.category?.toLowerCase() || ''}, ${post?.title?.toLowerCase().replace(/[^\w\s]/gi, '').split(' ').join(', ') || ''}, dataops group, hubspot`}
        canonicalPath={canonicalPath}
        ogType="article"
        ogImage={post?.featuredImage || post?.coverImage || ''}
        ogTitle={post?.title || ''}
        ogDescription={post?.excerpt || ''}
      />
      
      {/* Schema Markup */}
      {post && <BlogPostSchema post={post} />}
      <BreadcrumbSchema items={breadcrumbs} />
      
      <Navbar />
      <main className="flex-1">
        <article className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              {/* Back button to Insights with orange hover state */}
              <div className="mb-6">
                <Button 
                  variant="outline" 
                  className="bg-gray-700 text-white hover:bg-gray-800 hover:text-orange-500 transition-colors" 
                  asChild
                >
                  <Link to="/insights">Back to Insights</Link>
                </Button>
              </div>
              
              <BlogHeader 
                title={post.title}
                date={post.date}
                author={post.author}
                category={post.category}
                coverImage={post.coverImage}
              />

              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />
              
              <style jsx global>{`
                .blog-image-container {
                  margin: 2rem 0;
                  width: 100%;
                }
                .blog-post-image {
                  width: 100%;
                  border-radius: 8px;
                  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                figcaption {
                  text-align: center;
                  color: #666;
                  font-size: 0.9rem;
                  margin-top: 0.5rem;
                  font-style: italic;
                }
              `}</style>
              
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Ready to Fix Your HubSpot Ordeal?</h3>
                <p className="mb-6">
                  Stop throwing money at new leads when your existing contacts could be paying customers. 
                  Schedule a consultation to see how we can convert your HubSpot portal into a revenue engine.
                </p>
                <Button asChild className="bg-dataops-600 hover:bg-dataops-700">
                  <Link 
                    to="/contact"
                    onClick={() => {
                      // Track CTA click
                      if (window.gtag) {
                        window.gtag('event', 'cta_click', {
                          'event_category': 'Engagement',
                          'event_label': 'Blog Post Bottom CTA',
                        });
                      }
                    }}
                  >
                    Schedule a Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts Section */}
        <RelatedPosts relatedPosts={relatedPosts} currentPostId={post.id} />
        
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
