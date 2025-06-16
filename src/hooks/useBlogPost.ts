
import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { blogPosts } from '@/data/blog';
import { BlogPost } from '@/types/blog';
import { performanceMonitor } from '@/lib/performance-monitor';

// Create a Map for O(1) blog post lookups instead of O(n) array searches
const blogPostsMap = new Map(blogPosts.map(post => [post.id, post]));

export const useBlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  
  console.log('useBlogPost hook called with postId:', postId);
  
  // Memoize related posts calculation to avoid recalculation
  const memoizedRelatedPosts = useMemo(() => {
    if (!post) return [];
    
    const endTimer = performanceMonitor.startTimer('useBlogPost', 'calculateRelatedPosts');
    
    // Get related posts more efficiently - limit to first 3 matches
    const related = blogPosts
      .filter(p => p.id !== post.id)
      .slice(0, 3);
    
    endTimer();
    return related;
  }, [post]);
  
  useEffect(() => {
    const endTimer = performanceMonitor.startTimer('useBlogPost', 'loadBlogPost');
    
    try {
      setLoading(true);
      setError(null);
      
      if (!postId) {
        console.error('No postId provided in URL params');
        setError('No blog post ID provided');
        setLoading(false);
        endTimer();
        return;
      }

      // Use Map for O(1) lookup instead of array.find()
      const foundPost = blogPostsMap.get(postId);
      console.log('Search result for postId', postId, ':', foundPost ? 'FOUND' : 'NOT FOUND');
      
      if (foundPost) {
        console.log('Successfully found post:', foundPost.title);
        setPost(foundPost);
        setError(null);
      } else {
        console.error('Post not found for ID:', postId);
        setError(`Blog post with ID "${postId}" not found`);
        
        // Defer toast notification to avoid blocking render
        setTimeout(() => {
          if (toast) {
            toast({
              title: "Post not found",
              description: `We couldn't find the blog post "${postId}".`,
              variant: "destructive"
            });
          }
        }, 0);
      }
    } catch (err) {
      console.error('Error in useBlogPost useEffect:', err);
      setError('An error occurred while loading the blog post');
      
      // Defer toast notification
      setTimeout(() => {
        if (toast) {
          toast({
            title: "Error loading post",
            description: "There was an error loading the blog post.",
            variant: "destructive"
          });
        }
      }, 0);
    } finally {
      setLoading(false);
      endTimer();
    }
  }, [postId, toast]);

  // Update related posts when memoized calculation changes
  useEffect(() => {
    setRelatedPosts(memoizedRelatedPosts);
  }, [memoizedRelatedPosts]);

  return { post, relatedPosts, loading, error };
};
