
import { useEffect } from 'react';
import { BlogPost } from '@/types/blog';

export const usePostAnalytics = (post: BlogPost | null) => {
  useEffect(() => {
    if (!post) return;
    
    try {
      // Track post view in analytics with safety checks
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'view_item', {
          items: [{
            item_id: post.id,
            item_name: post.title,
            item_category: post.category || 'Blog',
            item_variant: post.author
          }]
        });
      }
      
      // Track in HubSpot with safety checks
      if (typeof window !== 'undefined' && window._hsq) {
        window._hsq.push(['setPath', window.location.pathname]);
        window._hsq.push(['trackPageView']);
      }
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
    }
  }, [post]);
};

export default usePostAnalytics;
