
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/font-face.css';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, Suspense } from 'react';
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
import { monitorRouteChanges } from './utils/route-monitoring';
import { applyCriticalCSS, loadFonts } from './lib/critical-css';

// Define app version globally
if (typeof window !== 'undefined') {
  window.APP_VERSION = '1.0.8'; // Incremented for performance optimizations
}

// Performance-first initialization
if (typeof window !== 'undefined') {
  // Initialize web vitals monitoring early
  initWebVitals();
  
  // Mark navigation start for performance measurements
  performance.mark('app-init-start');
  performance.mark('navigation-start');
  
  // Apply critical CSS for initial route immediately
  applyCriticalCSS(window.location.pathname);
  
  // Setup critical resource hints immediately
  setupResourceHints();
}

// Optimized application rendering with performance focus
const renderApp = () => {
  const container = document.getElementById("root");
  if (container) {
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
    
    // Monitor route changes for performance tracking
    monitorRouteChanges();
  }
};

// Immediately render the app for fast initial paint
renderApp();

// Performance-optimized task scheduling
if (typeof window !== 'undefined') {
  // Defer font loading to after critical render
  setTimeout(() => {
    loadFonts();
  }, 100);
  
  scheduleTasks([
    // Critical tasks - run immediately after render
    { 
      task: optimizeAssetLoading, 
      priority: 'high' 
    },
    
    // Important tasks - run soon but yield to interaction
    { 
      task: () => setupClientCaching(),
      priority: 'medium'
    },
    { 
      task: () => prefetchCriticalRoutes([
        '/contact',
        '/insights',
        '/services'
      ]),
      priority: 'medium' 
    },
    
    // Background tasks - run during idle time only
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
    }
  ]);
  
  // Optimize visibility handling for performance
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      performance.mark('page-visible');
      // Only optimize when page becomes visible to save resources
      requestIdleCallback(() => {
        optimizeAssetLoading();
      });
    } else {
      performance.mark('page-hidden');
    }
  });
  
  // Initialize remaining app features during idle time
  runWhenIdle(initializeApp);
  
  // Performance reporting - deferred to not impact loading
  window.addEventListener('load', () => {
    performance.mark('app-loaded');
    performance.measure('app-startup-time', 'app-init-start', 'app-loaded');
    performance.measure('navigation-to-load', 'navigation-start', 'app-loaded');
    
    // Report performance data after a delay to ensure all metrics are captured
    setTimeout(() => {
      if (window.gtag) {
        const startupTiming = performance.getEntriesByName('app-startup-time')[0];
        const renderTiming = performance.getEntriesByName('total-render-time')[0];
        const navigationToRenderTiming = performance.getEntriesByName('navigation-to-render')[0];
        const navigationToLoadTiming = performance.getEntriesByName('navigation-to-load')[0];
        
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
      
      // Clean up performance marks to prevent memory leaks
      performance.clearMarks();
      performance.clearMeasures();
    }, 1000); // Increased delay to capture all metrics
  });
}
