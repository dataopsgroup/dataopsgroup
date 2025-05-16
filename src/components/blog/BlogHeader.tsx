
import React, { useState } from 'react';
import { format } from 'date-fns';
import OptimizedImage from '@/components/ui/optimized-image';

interface BlogHeaderProps {
  title: string;
  date: string;
  author: string;
  category: string;
  coverImage: string;
}

const BlogHeader = ({ title, date, author, category, coverImage }: BlogHeaderProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Format the date as per Geoff Tucker's requirement (Month DD, YYYY)
  const formattedDate = format(new Date(date), 'MMMM d, yyyy');
  
  return (
    <header className="mb-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      <div className="flex items-center text-gray-600 mb-6">
        <span>{formattedDate}</span>
        <span className="mx-2">•</span>
        <span>{author || 'Geoff Tucker'}</span>
        <span className="mx-2">•</span>
        <span>{category}</span>
      </div>
      
      {/* Re-add the image that was previously removed */}
      <div className="mb-8">
        <OptimizedImage 
          src={coverImage} 
          alt={title}
          className="w-full rounded-lg shadow-md" 
          width={800}
          height={400}
          aspectRatio={2}
          priority={true}
        />
      </div>
    </header>
  );
};

export default BlogHeader;
