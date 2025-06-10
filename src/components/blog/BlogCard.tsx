
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import OptimizedImage from '@/components/ui/optimized-image';
import DynamicThumbnail from '@/components/blog/DynamicThumbnail';
import { calculateReadingTime } from '@/utils/thumbnail-generator';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  // Format date for time element
  const publishDate = new Date(post.date);
  const formattedPublishDate = publishDate.toISOString();
  const readingTime = calculateReadingTime(post.content);

  // Check if post has a cover image
  const hasCoverImage = !!post.coverImage;
  
  // Special case for the post that has a specific image
  const coverImage = post.id === "hidden-cost-of-failed-hubspot-implementations" 
    ? "/lovable-uploads/dc1dbbad-be41-4dbb-8dd8-381cc59a869c.png" 
    : post.coverImage;

  const handleCardClick = () => {
    // Track blog post click with safety checks
    try {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'select_content', {
          content_type: 'blog_post',
          content_id: post.id,
          item_list_name: 'Blog Posts',
          index: index
        });
      }
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
    }
  };

  return (
    <article className="h-full">
      <Card className="blog-card-enhanced h-full flex flex-col group">
        <Link 
          to={`/insights/${post.id}`} 
          className="flex flex-col h-full" 
          onClick={handleCardClick}
          aria-label={`Read article: ${post.title}`}
        >
          <CardHeader className="pb-4 relative overflow-hidden">
            {/* Conditionally render either existing image or dynamic thumbnail */}
            {hasCoverImage ? (
              <figure className="relative overflow-hidden rounded-t-lg mb-4">
                <OptimizedImage 
                  src={coverImage} 
                  alt={post.title} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                  width={400} 
                  height={200} 
                  loading="lazy" 
                  objectFit="cover" 
                  aspectRatio={2 / 1} 
                  placeholder="/placeholder.svg" 
                />
                {post.category && (
                  <Badge className="category-tag-enhanced absolute top-3 left-3">
                    {post.category}
                  </Badge>
                )}
              </figure>
            ) : (
              <DynamicThumbnail
                title={post.title}
                category={post.category}
                readingTime={readingTime}
                className="mb-4"
              />
            )}
            <CardTitle className="text-xl font-semibold group-hover:text-dataops-600 transition-colors leading-tight">
              {post.title}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-grow px-6">
            <CardDescription className="text-gray-700 leading-relaxed blog-excerpt">
              {post.excerpt}
            </CardDescription>
          </CardContent>
          
          <CardFooter className="px-6 pb-6">
            <div className="w-full">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={formattedPublishDate}>
                      {format(new Date(post.date), 'MMM dd, yyyy')}
                    </time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="read-time">{readingTime} min read</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">By {post.author}</span>
                <span className="text-dataops-600 group-hover:text-dataops-800 font-medium text-sm transition-colors">
                  Read More →
                </span>
              </div>
            </div>
          </CardFooter>
        </Link>
      </Card>
    </article>
  );
};

export default BlogCard;
