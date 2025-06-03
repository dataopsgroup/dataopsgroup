
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import { useBlogPost } from '@/hooks/useBlogPost';
import BlogPostNotFound from '@/components/blog/BlogPostNotFound';
import BlogPostSEO from '@/components/blog/BlogPostSEO';
import BlogPostLayout from '@/components/blog/BlogPostLayout';
import CaseStudyLayout from '@/components/blog/CaseStudyLayout';
import useScrollToAnchor from '@/hooks/useScrollToAnchor';
import usePostAnalytics from '@/hooks/usePostAnalytics';

const BlogPostPage = () => {
  console.log('BlogPostPage component rendering');
  
  // Add safety check for React hooks
  if (typeof React.useState !== 'function' || typeof React.useEffect !== 'function') {
    console.error('React hooks not available - React may not be loaded properly');
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
    usePostAnalytics(post);
  } catch (hookError) {
    console.error('Error in custom hooks:', hookError);
  }

  if (loading) {
    console.log('Rendering loading state');
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

  const isCaseStudy = post.category === 'Case Study';
  console.log('Rendering blog post:', post.title, 'isCaseStudy:', isCaseStudy);

  return (
    <SemanticLayout>
      <BlogPostSEO post={post} postId={post.id} />
      
      {isCaseStudy ? (
        <CaseStudyLayout post={post} />
      ) : (
        <BlogPostLayout post={post} relatedPosts={relatedPosts} />
      )}
    </SemanticLayout>
  );
};

export default BlogPostPage;
