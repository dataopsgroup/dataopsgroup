
import React, { useState } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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
      <div className="mb-4">
        <Button variant="outline" className="text-white bg-gray-400 hover:bg-gray-500 hover:text-white" asChild>
          <Link to="/insights">Back to Insights</Link>
        </Button>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      <div className="flex items-center text-gray-600 mb-6">
        <span>{formattedDate}</span>
        <span className="mx-2">•</span>
        <span>{author || 'Geoff Tucker'}</span>
        <span className="mx-2">•</span>
        <span>{category}</span>
      </div>
      <div 
        className={`w-full h-64 md:h-80 lg:h-96 bg-gray-100 rounded-lg overflow-hidden relative ${!imageLoaded ? 'animate-pulse' : ''}`}
      >
        <img 
          src={coverImage} 
          alt={title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
          decoding="async"
        />
      </div>
    </header>
  );
};

export default BlogHeader;
