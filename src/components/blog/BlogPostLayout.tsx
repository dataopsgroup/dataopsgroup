
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';
import BlogPostContent from './BlogPostContent';
import RelatedPosts from './RelatedPosts';
import { BlogPost } from '@/types/blog';

interface BlogPostLayoutProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({ post, relatedPosts }) => {
  // Use consistent date format: "January 5, 2025" (no leading zero for single-digit days)
  const formattedDate = format(new Date(post.date), 'MMMM d, yyyy');
  
  return (
    <div className="min-h-screen bg-white">
      {/* Back navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/insights" 
            className="inline-flex items-center text-dataops-600 hover:text-dataops-800 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Insights
          </Link>
        </div>
      </div>

      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article header with proper H1 */}
            <header className="mb-8">
              {post.category && (
                <span className="inline-block px-3 py-1 text-sm font-medium text-dataops-700 bg-dataops-100 rounded-full mb-4">
                  {post.category}
                </span>
              )}
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              {post.excerpt && (
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              )}
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formattedDate}</span>
                </div>
                
                {post.readTime && (
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                )}
              </div>
            </header>

            {/* Article content */}
            <div className="prose prose-lg max-w-none">
              <BlogPostContent content={post.content} />
            </div>

            {/* Call to action section with internal links */}
            <div className="mt-12 p-6 bg-dataops-50 border border-dataops-200 rounded-lg">
              <h3 className="text-xl font-semibold text-dataops-900 mb-4">
                Ready to Transform Your Operations?
              </h3>
              <p className="text-dataops-700 mb-4">
                Get expert guidance to implement the strategies discussed in this article.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/data-operations-assessment"
                  className="inline-flex items-center px-4 py-2 bg-dataops-600 text-white font-medium rounded hover:bg-dataops-700 transition-colors"
                >
                  Take Free Assessment
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-4 py-2 border border-dataops-600 text-dataops-600 font-medium rounded hover:bg-dataops-50 transition-colors"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts from same system */}
      {relatedPosts.length > 0 && (
        <RelatedPosts 
          relatedPosts={relatedPosts} 
          currentPostId={post.id} 
        />
      )}
    </div>
  );
};

export default BlogPostLayout;
