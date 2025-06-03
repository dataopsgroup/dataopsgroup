
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SemanticLayout from '@/components/layout/SemanticLayout';
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
import CaseStudyPage from '@/components/case-study/CaseStudyPage';
import useScrollToAnchor from '@/hooks/useScrollToAnchor';
import usePostAnalytics from '@/hooks/usePostAnalytics';

const BlogPostPage = () => {
  // Add safety check for React hooks
  if (typeof useState !== 'function' || typeof useEffect !== 'function') {
    console.error('React hooks not available - React may not be loaded properly');
    return <BlogPostNotFound />;
  }

  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  
  // Add debugging
  console.log('BlogPost component rendering');
  console.log('postId from URL params:', postId);
  console.log('Available blog posts:', blogPosts?.length || 0);
  
  // Make sure we have the canonical URL without query parameters
  const canonicalPath = `/insights/${postId}`;
  
  useEffect(() => {
    console.log('BlogPost useEffect triggered');
    console.log('postId from params:', postId);
    console.log('Available blog posts:', blogPosts.map(p => p.id));
    
    try {
      setLoading(true);
      setError(null);
      
      if (!postId) {
        console.error('No postId provided in URL params');
        setError('No blog post ID provided');
        setLoading(false);
        return;
      }

      if (!blogPosts || !Array.isArray(blogPosts)) {
        console.error('Blog posts data not available or invalid');
        setError('Blog posts data not available');
        setLoading(false);
        return;
      }
      
      const foundPost = blogPosts.find(p => p.id === postId);
      console.log('Found post:', foundPost ? foundPost.title : 'Not found');
      
      if (foundPost) {
        setPost(foundPost);
        // Get other posts (excluding current one) for the slider
        const otherPosts = blogPosts.filter(p => p.id !== postId);
        setRelatedPosts(otherPosts.slice(0, 3)); // Take up to 3 posts
        setError(null);
      } else {
        console.error('Post not found for ID:', postId);
        setError(`Blog post with ID "${postId}" not found`);
        if (toast) {
          toast({
            title: "Post not found",
            description: "We couldn't find the blog post you're looking for.",
            variant: "destructive"
          });
        }
      }
    } catch (err) {
      console.error('Error in BlogPost useEffect:', err);
      setError('An error occurred while loading the blog post');
    } finally {
      setLoading(false);
    }
  }, [postId, toast]);
  
  // Use our custom hooks with safety checks
  try {
    useScrollToAnchor([post]);
    usePostAnalytics(post);
  } catch (hookError) {
    console.error('Error in custom hooks:', hookError);
  }

  if (loading) {
    return (
      <SemanticLayout>
        <div className="py-16 px-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading blog post...</p>
        </div>
      </SemanticLayout>
    );
  }

  if (error || !post) {
    console.log('Rendering BlogPostNotFound because:', error || 'post is null');
    return <BlogPostNotFound />;
  }

  // Check if this is a case study
  const isCaseStudy = post.category === 'Case Study';

  // Define breadcrumbs for this post
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Insights', url: '/insights' },
    { name: post?.title || '', url: `/insights/${postId}` },
  ];

  // Prepare keywords from tags and title
  const keywordsList = [
    post.category?.toLowerCase() || '',
    ...(post.tags || []).map(tag => tag.toLowerCase()),
    ...post.title.toLowerCase().replace(/[^\w\s]/gi, '').split(' ')
  ].filter(Boolean).join(', ');

  return (
    <SemanticLayout>
      <MetaHead
        title={post.title}
        description={post.excerpt}
        keywords={keywordsList}
        canonicalPath={canonicalPath}
        ogType="article"
        ogImage={post.featuredImage || post.coverImage}
        ogTitle={post.title}
        ogDescription={post.excerpt}
        author={post.author}
        publishDate={post.date}
        blogPost={post}
        isArticle={true}
      />
      
      {/* Schema Markup */}
      {post && <BlogPostSchema post={post} />}
      <BreadcrumbSchema items={breadcrumbs} />
      
      {isCaseStudy ? (
        // Render case study with visual layout
        <>
          <div className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <Button 
                variant="outline" 
                className="bg-gray-700 text-white hover:bg-gray-800 hover:text-orange-500 transition-colors" 
                asChild
              >
                <Link to="/case-studies">Back to Case Studies</Link>
              </Button>
            </div>
          </div>
          <CaseStudyPage post={post} />
        </>
      ) : (
        // Render regular blog post
        <>
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
                
                <header>
                  <BlogHeader 
                    title={post.title}
                    date={post.date}
                    author={post.author}
                    category={post.category || ''}
                    coverImage={post.coverImage}
                  />
                </header>

                <div className="blog-content">
                  <BlogPostContent content={post.content} />
                </div>
              </div>
            </div>
          </article>

          {/* Related Posts Section */}
          <aside aria-labelledby="related-posts-heading">
            <RelatedPosts relatedPosts={relatedPosts} currentPostId={post.id} />
          </aside>
          
          <section aria-label="Call to Action">
            <CTABanner />
          </section>
        </>
      )}
    </SemanticLayout>
  );
};

export default BlogPostPage;
