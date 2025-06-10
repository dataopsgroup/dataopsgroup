
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { blogPosts } from '@/data/blog';
import { BlogPost } from '@/types/blog';

export const useBlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  
  console.log('useBlogPost hook called with postId:', postId);
  console.log('Available blog posts:', blogPosts?.length || 0);
  console.log('All blog post IDs:', blogPosts.map(p => p.id));
  
  useEffect(() => {
    console.log('useBlogPost useEffect triggered');
    console.log('Looking for postId:', postId);
    
    try {
      setLoading(true);
      setError(null);
      
      if (!postId) {
        console.error('No postId provided in URL params');
        setError('No blog post ID provided');
        setLoading(false);
        return;
      }

      if (!blogPosts || !Array.isArray(blogPosts)) {
        console.error('Blog posts data not available or invalid');
        setError('Blog posts data not available');
        setLoading(false);
        return;
      }
      
      const foundPost = blogPosts.find(p => p.id === postId);
      console.log('Search result for postId', postId, ':', foundPost ? 'FOUND' : 'NOT FOUND');
      
      if (foundPost) {
        console.log('Successfully found post:', foundPost.title);
        setPost(foundPost);
        
        // Get related posts (excluding current post)
        const otherPosts = blogPosts.filter(p => p.id !== postId);
        setRelatedPosts(otherPosts.slice(0, 3));
        setError(null);
      } else {
        console.error('Post not found for ID:', postId);
        console.error('Available IDs:', blogPosts.map(p => p.id));
        console.error('ERROR BOUNDARY TEST: Invalid blog post ID requested');
        setError(`Blog post with ID "${postId}" not found`);
        
        if (toast) {
          toast({
            title: "Post not found",
            description: `We couldn't find the blog post "${postId}".`,
            variant: "destructive"
          });
        }
      }
    } catch (err) {
      console.error('Error in useBlogPost useEffect:', err);
      console.error('ERROR BOUNDARY TEST: Exception in blog post loading');
      setError('An error occurred while loading the blog post');
      
      if (toast) {
        toast({
          title: "Error loading post",
          description: "There was an error loading the blog post.",
          variant: "destructive"
        });
      }
    } finally {
      setLoading(false);
    }
  }, [postId, toast]);

  // Additional debugging info
  useEffect(() => {
    console.log('Current state:', { 
      postId, 
      post: post?.title || 'null', 
      loading, 
      error,
      relatedPostsCount: relatedPosts.length 
    });
  }, [postId, post, loading, error, relatedPosts]);

  return { post, relatedPosts, loading, error };
};
