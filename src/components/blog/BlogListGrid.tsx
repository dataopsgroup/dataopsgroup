
import React from 'react';
import BlogCard from './BlogCard';
import { BlogPost } from '@/types/blog';

interface BlogListGridProps {
  posts: BlogPost[];
}

const BlogListGrid = ({ posts }: BlogListGridProps) => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListGrid;
