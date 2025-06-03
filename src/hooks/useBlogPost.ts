
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
  
  console.log('useBlogPost hook called');
  console.log('postId from URL params:', postId);
  console.log('Available blog posts:', blogPosts?.length || 0);
  
  useEffect(() => {
    console.log('useBlogPost useEffect triggered');
    console.log('postId from params:', postId);
    console.log('Available blog posts:', blogPosts.map(p => p.id));
    
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
      console.log('Found post:', foundPost ? foundPost.title : 'Not found');
      
      if (foundPost) {
        setPost(foundPost);
        const otherPosts = blogPosts.filter(p => p.id !== postId);
        setRelatedPosts(otherPosts.slice(0, 3));
        setError(null);
      } else {
        console.error('Post not found for ID:', postId);
        setError(`Blog post with ID "${postId}" not found`);
        if (toast) {
          toast({
            title: "Post not found",
            description: "We couldn't find the blog post you're looking for.",
            variant: "destructive"
          });
        }
      }
    } catch (err) {
      console.error('Error in useBlogPost useEffect:', err);
      setError('An error occurred while loading the blog post');
    } finally {
      setLoading(false);
    }
  }, [postId, toast]);

  return { post, relatedPosts, loading, error };
};
