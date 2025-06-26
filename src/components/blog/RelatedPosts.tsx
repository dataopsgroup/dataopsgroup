
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';
import { BlogPost } from '@/types/blog';

interface RelatedPostsProps {
  relatedPosts: BlogPost[];
  currentPostId: string;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ relatedPosts, currentPostId }) => {
  // Filter out current post and limit to 3 related posts
  const filteredPosts = relatedPosts
    .filter(post => post.id !== currentPostId)
    .slice(0, 3);

  if (filteredPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Continue Reading
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/insights/${post.id}`}
                className="group block bg-white rounded-lg overflow-hidden hover:shadow-md border border-gray-200 hover:border-dataops-300 transition-all duration-200"
              >
                {/* Post Image */}
                {post.coverImage && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                )}

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    {post.category && (
                      <span className="inline-block px-3 py-1 text-xs font-medium text-dataops-700 bg-dataops-100 rounded-full">
                        {post.category}
                      </span>
                    )}
                    {post.readTime && (
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-dataops-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-2" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
