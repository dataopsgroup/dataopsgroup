
/**
 * Performance budget utilities to monitor and enforce asset size limits
 */

interface BudgetItem {
  type: 'script' | 'stylesheet' | 'image' | 'font' | 'other';
  label: string;
  size: number;
  limit: number;
  url: string;
}

// Type definition for resource timing entry to handle initiatorType property
interface EnhancedPerformanceEntry extends PerformanceEntry {
  initiatorType?: string;
  encodedBodySize?: number;
}

// Budget limits in bytes
export const BUDGET_LIMITS = {
  SCRIPT: 170 * 1024, // 170KB for JavaScript
  STYLE: 50 * 1024,   // 50KB for CSS
  IMAGE: 300 * 1024,  // 300KB for images
  FONT: 100 * 1024,   // 100KB for fonts
  TOTAL: 1000 * 1024, // 1MB total
  MAX_REQUESTS: 30    // Maximum number of requests
};

// Calculate current usage against budget
export const calculateBudgetUsage = (): BudgetItem[] => {
  if (typeof window === 'undefined' || !('performance' in window)) {
    return [];
  }
  
  try {
    // Get all resource entries
    const resources = window.performance.getEntriesByType('resource');
    const budgetItems: BudgetItem[] = [];
    
    resources.forEach(resource => {
      // Cast to our enhanced interface to access initiatorType
      const resourceEntry = resource as EnhancedPerformanceEntry;
      const url = resource.name;
      const size = resourceEntry.encodedBodySize || 0;
      
      // Skip tiny resources or those with invalid size
      if (size < 100) return;
      
      let type: BudgetItem['type'] = 'other';
      let limit = BUDGET_LIMITS.TOTAL;
      
      // Determine resource type and applicable limit
      if (url.endsWith('.js') || url.includes('.js?') || resourceEntry.initiatorType === 'script') {
        type = 'script';
        limit = BUDGET_LIMITS.SCRIPT;
      } else if (url.endsWith('.css') || url.includes('.css?') || resourceEntry.initiatorType === 'css') {
        type = 'stylesheet';
        limit = BUDGET_LIMITS.STYLE;
      } else if (
        /\.(jpg|jpeg|png|gif|webp|avif|svg)/.test(url) || 
        resourceEntry.initiatorType === 'img'
      ) {
        type = 'image';
        limit = BUDGET_LIMITS.IMAGE;
      } else if (/\.(woff|woff2|ttf|eot)/.test(url)) {
        type = 'font';
        limit = BUDGET_LIMITS.FONT;
      }
      
      // Extract filename for label
      const urlParts = url.split('/');
      const label = urlParts[urlParts.length - 1].split('?')[0];
      
      budgetItems.push({
        type,
        label,
        size,
        limit,
        url
      });
    });
    
    // Sort by size (largest first)
    return budgetItems.sort((a, b) => b.size - a.size);
  } catch (e) {
    console.error('Error calculating budget usage:', e);
    return [];
  }
};

// Check if we're exceeding our budget
export const checkBudget = (): { 
  exceededItems: BudgetItem[], 
  totalSize: number,
  totalRequests: number,
  withinBudget: boolean
} => {
  const items = calculateBudgetUsage();
  const totalSize = items.reduce((sum, item) => sum + item.size, 0);
  const totalRequests = items.length;
  const exceededItems = items.filter(item => item.size > item.limit);
  
  // Check if we're within our overall budget
  const withinBudget = 
    totalSize <= BUDGET_LIMITS.TOTAL && 
    totalRequests <= BUDGET_LIMITS.MAX_REQUESTS &&
    exceededItems.length === 0;
  
  return {
    exceededItems,
    totalSize,
    totalRequests,
    withinBudget
  };
};

// Report budget violations to analytics
export const reportBudgetViolations = () => {
  const { exceededItems, totalSize, totalRequests, withinBudget } = checkBudget();
  
  if (!withinBudget && window.gtag) {
    window.gtag('event', 'performance_budget_exceeded', {
      totalSize: Math.round(totalSize / 1024),
      totalRequests,
      exceededItemsCount: exceededItems.length,
      exceededItems: exceededItems.map(item => `${item.label}: ${Math.round(item.size / 1024)}KB`)
    });
  }
  
  return { exceededItems, totalSize, totalRequests, withinBudget };
};
