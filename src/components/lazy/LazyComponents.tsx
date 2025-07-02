
import { lazy } from 'react';

// Lazy load non-critical components to reduce initial bundle size
export const LazyServices = lazy(() => import('@/components/Services'));
export const LazyApproach = lazy(() => import('@/components/Approach'));
export const LazyBookCTA = lazy(() => import('@/components/BookCTA'));
export const LazyChatbotSection = lazy(() => import('@/components/ChatbotSection'));

// Lazy load heavy analytics and monitoring components
export const LazyMobilePerformanceMonitor = lazy(() => import('@/components/performance/MobilePerformanceMonitor'));
