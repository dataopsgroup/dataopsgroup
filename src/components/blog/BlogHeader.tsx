
import React from 'react';
import { format } from 'date-fns';
import OptimizedImage from '@/components/ui/optimized-image';

interface BlogHeaderProps {
  title: string;
  date: string;
  author: string;
  category: string;
  coverImage: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  date,
  author,
  category,
  coverImage,
}) => {
  const formattedDate = format(new Date(date), 'MMMM dd, yyyy');
  const isoDate = new Date(date).toISOString();
  
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      
      <div className="flex items-center text-sm text-gray-600 mb-6">
        <time dateTime={isoDate} className="mr-4">{formattedDate}</time>
        <span className="mr-4">·</span>
        <span>By {author}</span>
        {category && (
          <>
            <span className="mx-4">·</span>
            <span className="bg-dataops-100 text-dataops-800 px-2 py-1 rounded-full text-xs">
              {category}
            </span>
          </>
        )}
      </div>
      
      <figure className="mb-8">
        <OptimizedImage
          src={coverImage}
          alt={title}
          className="w-full h-auto rounded-lg"
          width={1200}
          height={630}
          objectFit="cover"
          priority={true}
          aspectRatio={1200/630}
        />
      </figure>
    </div>
  );
};

export default BlogHeader;
