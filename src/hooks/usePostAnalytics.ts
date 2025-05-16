
import { useEffect } from 'react';
import { BlogPost } from '@/types/blog';

export const usePostAnalytics = (post: BlogPost | null) => {
  useEffect(() => {
    if (!post) return;
    
    // Track post view in analytics
    if (window.gtag) {
      window.gtag('event', 'view_item', {
        items: [{
          item_id: post.id,
          item_name: post.title,
          item_category: post.category || 'Blog',
          item_variant: post.author
        }]
      });
    }
    
    // Track in HubSpot
    if (window._hsq) {
      window._hsq.push(['setPath', window.location.pathname]);
      window._hsq.push(['trackPageView']);
    }
  }, [post]);
};

export default usePostAnalytics;
