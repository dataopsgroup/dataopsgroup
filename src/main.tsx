
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/font-face.css'; // Import the new font face definitions
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, Suspense, lazy } from 'react';
import { initWebVitals } from './utils/web-vitals';
import { setupAnalyticsAndMonitoring, initializeApp } from './utils/app-initialization';
import { 
  setupResourceHints, 
  optimizeAssetLoading, 
  setupClientCaching,
  prefetchCriticalRoutes,
  optimizeResourceOrder,
  setupInteractionBasedLoading,
  prerenderNextLikelyPage
} from './lib/performance-optimizations';
import { scheduleTasks, runWhenIdle } from './lib/task-scheduler';

// Define app version globally
if (typeof window !== 'undefined') {
  window.APP_VERSION = '1.0.2';
  
  // Add performance API endpoint if needed
  // window.PERFORMANCE_API_ENDPOINT = 'https://your-analytics-api.com/collect';
}

// Initialize essential monitoring right away
if (typeof window !== 'undefined') {
  // Initialize web vitals monitoring early
  initWebVitals();
  
  // Mark navigation start for performance measurements
  performance.mark('app-init-start');
  performance.mark('navigation-start');
}

// Initialize application
const renderApp = () => {
  const container = document.getElementById("root");
  if (container) {
    // Report First Paint to performance monitoring
    performance.mark('render-start');
    
    const root = createRoot(container);
    root.render(
      <StrictMode>
        <HelmetProvider>
          <Suspense fallback={
            <div className="w-full h-screen flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-dataops-600 mb-4"></div>
                <p className="text-dataops-600 text-lg">Loading DataOps Group...</p>
              </div>
            </div>
          }>
            <App />
          </Suspense>
        </HelmetProvider>
      </StrictMode>
    );
    
    // Mark render completion
    performance.mark('render-complete');
    performance.measure('total-render-time', 'render-start', 'render-complete');
    performance.measure('navigation-to-render', 'navigation-start', 'render-complete');
  }
};

// Apply critical performance optimizations immediately
setupResourceHints();

// Immediately render the app for fast initial paint
renderApp();

// Schedule remaining initializations based on priority
if (typeof window !== 'undefined') {
  scheduleTasks([
    // High priority tasks - run immediately but non-blocking
    { 
      task: optimizeAssetLoading, 
      priority: 'high' 
    },
    
    // Medium priority tasks - run soon but yield to user interaction
    { 
      task: () => setupClientCaching(),
      priority: 'medium'
    },
    { 
      task: () => prefetchCriticalRoutes([
        '/contact',
        '/insights',
        '/services',
        '/approach',
        '/faqs'
      ]),
      priority: 'medium' 
    },
    
    // Low priority tasks - run during idle time
    { 
      task: setupAnalyticsAndMonitoring, 
      priority: 'low' 
    },
    {
      task: optimizeResourceOrder,
      priority: 'low'
    },
    {
      task: setupInteractionBasedLoading,
      priority: 'low'
    },
    {
      task: prerenderNextLikelyPage,
      priority: 'low'
    }
  ]);
  
  // Handle page visibility changes to optimize for foreground/background
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      // Prioritize responsiveness when page is visible
      performance.mark('page-visible');
      
      // When page becomes visible again, check for resources to prioritize
      optimizeAssetLoading();
    } else {
      // Cancel unnecessary work when page is hidden
      performance.mark('page-hidden');
    }
  });
  
  // Initialize remaining app features
  runWhenIdle(initializeApp);
  
  // Report performance metrics when the page is fully loaded
  window.addEventListener('load', () => {
    performance.mark('app-loaded');
    performance.measure('app-startup-time', 'app-init-start', 'app-loaded');
    performance.measure('navigation-to-load', 'navigation-start', 'app-loaded');
    
    // Report performance data after load
    setTimeout(() => {
      const startupTiming = performance.getEntriesByName('app-startup-time')[0];
      const renderTiming = performance.getEntriesByName('total-render-time')[0];
      const navigationToRenderTiming = performance.getEntriesByName('navigation-to-render')[0];
      const navigationToLoadTiming = performance.getEntriesByName('navigation-to-load')[0];
      
      if (window.gtag) {
        window.gtag('event', 'performance', {
          startup_time: Math.round(startupTiming?.duration || 0),
          render_time: Math.round(renderTiming?.duration || 0),
          navigation_to_render: Math.round(navigationToRenderTiming?.duration || 0),
          navigation_to_load: Math.round(navigationToLoadTiming?.duration || 0),
          user_agent: navigator.userAgent,
          viewport_width: window.innerWidth,
          viewport_height: window.innerHeight
        });
      }
      
      // Clear marks and measures to avoid memory leaks
      performance.clearMarks();
      performance.clearMeasures();
    }, 0);
  });
}
