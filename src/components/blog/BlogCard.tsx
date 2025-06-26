
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
  // Add debugging for the specific post we're tracking
  if (post.id === "marketing-dashboards-fail") {
    console.log('🔍 BlogCard rendering marketing-dashboards-fail:', {
      id: post.id,
      title: post.title,
      coverImage: post.coverImage,
      hasCoverImage: !!post.coverImage
    });
  }

  // Format date for time element and display
  const publishDate = new Date(post.date);
  const formattedPublishDate = publishDate.toISOString();
  // Use consistent format: "January 5, 2025" (no leading zero for single-digit days)
  const displayDate = format(publishDate, 'MMMM d, yyyy');
  const readingTime = calculateReadingTime(post.content);

  // Check if post has a cover image
  const hasCoverImage = !!post.coverImage;

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
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                  width={400} 
                  height={200} 
                  loading="lazy" 
                  objectFit="cover" 
                  aspectRatio={2 / 1} 
                  placeholder="/placeholder.svg" 
                  componentType="card"
                />
                {/* Only show badge if category exists - remove any duplicate badge elements */}
                {post.category && (
                  <Badge 
                    category={post.category}
                    className="absolute top-3 left-3 z-10"
                  >
                    {post.category.toUpperCase()}
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
            <div className="flex items-center justify-between text-sm text-gray-500 w-full">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <time dateTime={formattedPublishDate}>
                  {displayDate}
                </time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="read-time">{readingTime} min read</span>
              </div>
            </div>
          </CardFooter>
        </Link>
      </Card>
    </article>
  );
};

export default BlogCard;
