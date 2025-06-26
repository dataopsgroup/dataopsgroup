
import React from 'react';
import { format } from 'date-fns';
import { Calendar, User } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';
import { Badge } from '@/components/ui/badge';
import ShareButtons from '@/components/ui/ShareButtons';

interface BlogHeaderProps {
  title: string;
  date: string;
  author: string;
  category: string;
  coverImage?: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  date,
  author,
  category,
  coverImage,
}) => {
  // Use 'd' instead of 'dd' in the format string to get single digits for days < 10
  const formattedDate = format(new Date(date), 'MMMM d, yyyy');
  const isoDate = new Date(date).toISOString();
  
  return (
    <div className="blog-post-header-enhanced">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Category and Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {category && (
              <Badge className="category-tag-enhanced text-sm">
                {category}
              </Badge>
            )}
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={isoDate}>{formattedDate}</time>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By {author}</span>
              </div>
              <ShareButtons title={title} className="flex-row space-x-2 space-y-0" variant="white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="blog-post-title-enhanced mb-8">
            {title}
          </h1>
        </div>
      </div>

      {/* Hero Image - Only render if coverImage exists */}
      {coverImage && (
        <div className="relative mt-8">
          <figure className="relative overflow-hidden">
            <OptimizedImage
              src={coverImage}
              alt={title}
              className="w-full h-auto"
              width={1200}
              height={630}
              objectFit="cover"
              priority={true}
              aspectRatio={1200/630}
              placeholder="/placeholder.svg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </figure>
        </div>
      )}
    </div>
  );
};

export default BlogHeader;
