
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlogPostNotFound = () => {
  const { postId } = useParams<{ postId: string }>();
  
  // Log error information for debugging
  console.log('BlogPostNotFound component rendered');
  console.log('Failed postId:', postId);
  console.log('Current URL:', window.location.href);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the blog post you're looking for.</p>
          {postId && (
            <p className="text-sm text-gray-600 mb-4">
              Looking for: "{postId}"
            </p>
          )}
          <div className="space-y-3">
            <Button asChild>
              <Link to="/insights">Return to Insights</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">Go to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostNotFound;
