
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlogPostNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the blog post you're looking for.</p>
          <Button asChild>
            <Link to="/insights">Return to Insights</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostNotFound;
