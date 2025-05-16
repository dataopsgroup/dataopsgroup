
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogPostNotFound from '@/components/blog/BlogPostNotFound';
import useScrollToAnchor from '@/hooks/useScrollToAnchor';
import usePostAnalytics from '@/hooks/usePostAnalytics';

const BlogPostPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const { toast } = useToast();
  
  // Make sure we have the canonical URL without query parameters
  const canonicalPath = `/insights/${postId}`;
  
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
  
  // Use our custom hooks
  useScrollToAnchor([post]);
  usePostAnalytics(post);

  if (!post) {
    return <BlogPostNotFound />;
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

              <BlogPostContent content={post.content} />
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
