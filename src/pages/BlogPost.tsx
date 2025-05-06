
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '@/data/blog'; // Updated import path
import CTABanner from '@/components/CTABanner';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { BlogPost } from '@/types/blog';
import BlogHeader from '@/components/blog/BlogHeader';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import BlogPostSchema from '@/components/seo/BlogPostSchema';

const BlogPostPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === postId);
    
    if (foundPost) {
      setPost(foundPost);
      // Get other posts (excluding current one) for the slider
      const otherPosts = blogPosts.filter(p => p.id !== postId);
      setRelatedPosts(otherPosts.slice(0, 3)); // Take up to 3 posts
    } else {
      toast({
        title: "Post not found",
        description: "We couldn't find the blog post you're looking for.",
        variant: "destructive"
      });
    }
  }, [postId, toast]);

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
    { name: post.title, url: `/insights/${post.id}` },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{post.title} | DataOps Group</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category.toLowerCase()}, ${post.title.toLowerCase().replace(/[^\w\s]/gi, '').split(' ').join(', ')}, dataops group, hubspot`} />
        <meta name="author" content={post.author} />
        <link rel="canonical" href={`/insights/${post.id}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:url" content={`${window.location.origin}/insights/${post.id}`} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.coverImage} />
      </Helmet>
      
      {/* Schema Markup */}
      <BlogPostSchema post={post} />
      <BreadcrumbSchema items={breadcrumbs} />
      
      <Navbar />
      <main className="flex-1">
        <article className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              {/* Back button to Insights */}
              <div className="mb-6">
                <Button variant="outline" className="bg-gray-700 text-white hover:bg-gray-800" asChild>
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
              
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Ready to Fix Your HubSpot Ordeal?</h3>
                <p className="mb-6">
                  Stop throwing money at new leads when your existing contacts could be paying customers. 
                  Schedule a consultation to see how we can convert your HubSpot portal into a revenue engine.
                </p>
                <Button asChild className="bg-dataops-600 hover:bg-dataops-700">
                  <Link to="/contact">Schedule a Consultation</Link>
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
