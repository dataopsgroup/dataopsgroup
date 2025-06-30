
import React from 'react';
import BlogCard from './BlogCard';
import { BlogPost } from '@/types/blog';

interface BlogListGridProps {
  posts: BlogPost[];
}

const BlogListGrid = ({ posts }: BlogListGridProps) => {
  // Sort posts by publication date (newest first)
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {sortedPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListGrid;
