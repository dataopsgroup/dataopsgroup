
import React, { useMemo } from 'react';
import { BlogPost } from '@/types/blog';
import MetaHead from '@/components/seo/MetaHead';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import BlogPostSchema from '@/components/seo/BlogPostSchema';
import { performanceMonitor } from '@/lib/performance-monitor';

interface BlogPostSEOProps {
  post: BlogPost;
  postId: string;
}

const BlogPostSEO = ({ post, postId }: BlogPostSEOProps) => {
  // Memoize expensive SEO calculations
  const seoData = useMemo(() => {
    const endTimer = performanceMonitor.startTimer('BlogPostSEO', 'calculateSEOData');
    
    const cleanPostId = postId || post?.id || '';
    const canonicalPath = `/insights/${cleanPostId}`;
    
    const breadcrumbs = [
      { name: 'Home', url: '/' },
      { name: 'Insights', url: '/insights' },
      { name: post?.title || '', url: canonicalPath },
    ];

    // Enhanced meta description generation with better fallbacks
    let metaDescription = '';
    
    if (post.seo?.metaDescription) {
      metaDescription = post.seo.metaDescription;
    } else if (post.excerpt) {
      metaDescription = post.excerpt;
    } else if (post.content) {
      // Extract first 150 characters from content as fallback
      const cleanContent = post.content
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();
      metaDescription = cleanContent.length > 150 
        ? cleanContent.substring(0, 147) + '...'
        : cleanContent;
    } else {
      // Final fallback based on title and category
      const category = post.category || 'Marketing Operations';
      metaDescription = `Expert insights on ${category.toLowerCase()} from DataOps Group. Learn proven strategies to optimize your operations and drive business growth.`;
    }

    const keywords = post.seo?.keywords || [
      post.category?.toLowerCase() || '',
      ...(post.tags || []).map(tag => tag.toLowerCase()),
      ...post.title.toLowerCase().replace(/[^\w\s]/gi, '').split(' ')
    ].filter(Boolean).join(', ');

    const ogTitle = post.seo?.ogTitle || post.title;
    const ogDescription = post.seo?.ogDescription || metaDescription;
    
    endTimer();
    
    return {
      canonicalPath,
      breadcrumbs,
      metaDescription,
      keywords,
      ogTitle,
      ogDescription
    };
  }, [post, postId]);

  return (
    <>
      <MetaHead
        title={`${post.title} | DataOps Group`}
        description={seoData.metaDescription}
        keywords={seoData.keywords}
        canonicalPath={seoData.canonicalPath}
        ogType="article"
        ogImage={post.featuredImage || post.coverImage}
        ogTitle={seoData.ogTitle}
        ogDescription={seoData.ogDescription}
        author={post.author}
        publishDate={post.date}
        blogPost={post}
        isArticle={true}
      />
      
      {post && <BlogPostSchema post={post} />}
      <BreadcrumbSchema items={seoData.breadcrumbs} />
    </>
  );
};

export default BlogPostSEO;
