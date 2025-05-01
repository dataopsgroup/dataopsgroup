
import React from 'react';
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
  return (
    <header className="mb-10">
      <div className="mb-4">
        <Button variant="outline" className="text-gray-600" asChild>
          <Link to="/insights">Back to Insights</Link>
        </Button>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      <div className="flex items-center text-gray-600 mb-6">
        <span>{format(new Date(date), 'MMMM d, yyyy')}</span>
        <span className="mx-2">•</span>
        <span>{author}</span>
        <span className="mx-2">•</span>
        <span>{category}</span>
      </div>
      <img 
        src={coverImage} 
        alt={title} 
        className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg" 
      />
    </header>
  );
};

export default BlogHeader;
