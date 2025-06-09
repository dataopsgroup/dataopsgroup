
import React from 'react';
import { BlogPost } from '@/types/blog';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import RelatedPosts from '@/components/blog/RelatedPosts';
import CTABanner from '@/components/CTABanner';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface BlogPostLayoutProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const BlogPostLayout = ({ post, relatedPosts }: BlogPostLayoutProps) => {
  return (
    <>
      <article className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
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
              <h1 className="blog-post-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
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

      <aside aria-labelledby="related-posts-heading">
        <RelatedPosts relatedPosts={relatedPosts} currentPostId={post.id} />
      </aside>
      
      <section aria-label="Call to Action">
        <CTABanner />
      </section>
    </>
  );
};

export default BlogPostLayout;
