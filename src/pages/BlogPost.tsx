
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '@/data/blogPosts';
import CTABanner from '@/components/CTABanner';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { BlogPost } from '@/types/blog';

const BlogPostPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === postId);
    
    if (foundPost) {
      setPost(foundPost);
    } else {
      toast({
        title: "Post not found",
        description: "We couldn't find the blog post you're looking for.",
        variant: "destructive"
      });
    }
  }, [postId, toast]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-6">Sorry, we couldn't find the blog post you're looking for.</p>
            <Button asChild>
              <Link to="/blog">Return to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{post.title} | DataOps Group</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <Navbar />
      <main className="flex-1">
        <article className="py-12 md:py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-dataops-600 hover:text-dataops-800 mb-8 font-medium">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
              
              <header className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center text-gray-600 mb-6">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg" 
                />
              </header>

              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />
              
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Ready to Fix Your HubSpot Ordeal?</h3>
                <p className="mb-6">
                  Stop throwing money at new leads when your existing contacts could be paying customers. 
                  Schedule a consultation to see how we can convert your HubSpot portal into a revenue engine.
                </p>
                <Button asChild className="bg-dataops-600 hover:bg-dataops-700">
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
        
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
