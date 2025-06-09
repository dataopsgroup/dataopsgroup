
import React from 'react';
import { BlogPost } from '@/types/blog';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BlogPostContent from '@/components/blog/BlogPostContent';
import CTABanner from '@/components/CTABanner';

interface CaseStudyLayoutProps {
  post: BlogPost;
}

const CaseStudyLayout = ({ post }: CaseStudyLayoutProps) => {
  return (
    <>
      <article className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button 
                variant="outline" 
                className="bg-gray-700 text-white hover:bg-gray-800 hover:text-orange-500 transition-colors" 
                asChild
              >
                <Link to="/insights">Back to Insights</Link>
              </Button>
            </div>
            
            <header className="text-center mb-12">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                Case Study
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-4 text-gray-600 mb-8">
                <span>{post.author}</span>
                <span>•</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              
              {post.coverImage && (
                <div className="mb-8">
                  <img 
                    src={post.coverImage} 
                    alt={`Case study: ${post.title}`}
                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}
            </header>

            <div className="blog-content">
              <BlogPostContent content={post.content} />
            </div>
          </div>
        </div>
      </article>
      
      <section aria-label="Call to Action">
        <CTABanner />
      </section>
    </>
  );
};

export default CaseStudyLayout;
