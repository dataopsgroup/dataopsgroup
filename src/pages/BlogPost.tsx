
import React, { Suspense } from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import { useBlogPost } from '@/hooks/useBlogPost';
import BlogPostNotFound from '@/components/blog/BlogPostNotFound';
import useScrollToAnchor from '@/hooks/useScrollToAnchor';
import usePostAnalytics from '@/hooks/usePostAnalytics';
import { performanceMonitor } from '@/lib/performance-monitor';

// Lazy load SEO and layout components to improve initial render time
const BlogPostSEO = React.lazy(() => import('@/components/blog/BlogPostSEO'));
const BlogPostLayout = React.lazy(() => import('@/components/blog/BlogPostLayout'));
const CaseStudyLayout = React.lazy(() => import('@/components/blog/CaseStudyLayout'));

const BlogPostPage = () => {
  const endTimer = performanceMonitor.startTimer('BlogPostPage', 'render');
  
  console.log('BlogPostPage component rendering');
  
  // Add safety check for React hooks
  if (typeof React.useState !== 'function' || typeof React.useEffect !== 'function') {
    console.error('React hooks not available - React may not be loaded properly');
    endTimer();
    return <BlogPostNotFound />;
  }

  const { post, relatedPosts, loading, error } = useBlogPost();
  
  console.log('BlogPostPage state:', { 
    hasPost: !!post, 
    postTitle: post?.title, 
    loading, 
    error,
    relatedPostsCount: relatedPosts.length 
  });
  
  // Use our custom hooks with safety checks
  try {
    useScrollToAnchor([post]);
    // Defer analytics to avoid blocking initial render
    React.useEffect(() => {
      if (post) {
        const timer = setTimeout(() => {
          usePostAnalytics(post);
        }, 100);
        return () => clearTimeout(timer);
      }
    }, [post]);
  } catch (hookError) {
    console.error('Error in custom hooks:', hookError);
  }

  if (loading) {
    console.log('Rendering loading state');
    endTimer();
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
    endTimer();
    return <BlogPostNotFound />;
  }

  const isCaseStudy = post.category === 'Case Study';
  console.log('Rendering blog post:', post.title, 'isCaseStudy:', isCaseStudy);
  
  endTimer();

  return (
    <SemanticLayout>
      <Suspense fallback={<div>Loading SEO...</div>}>
        <BlogPostSEO post={post} postId={post.id} />
      </Suspense>
      
      <Suspense fallback={
        <div className="py-16 px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
          </div>
        </div>
      }>
        {isCaseStudy ? (
          <CaseStudyLayout post={post} />
        ) : (
          <BlogPostLayout post={post} relatedPosts={relatedPosts} />
        )}
      </Suspense>
    </SemanticLayout>
  );
};

export default BlogPostPage;
