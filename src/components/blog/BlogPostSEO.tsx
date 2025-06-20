
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

    // Use custom SEO metadata if available, otherwise fall back to defaults
    const metaDescription = post.seo?.metaDescription || post.excerpt;
    const keywords = post.seo?.keywords || [
      post.category?.toLowerCase() || '',
      ...(post.tags || []).map(tag => tag.toLowerCase()),
      ...post.title.toLowerCase().replace(/[^\w\s]/gi, '').split(' ')
    ].filter(Boolean).join(', ');

    const ogTitle = post.seo?.ogTitle || post.title;
    const ogDescription = post.seo?.ogDescription || post.excerpt;
    
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
