
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
