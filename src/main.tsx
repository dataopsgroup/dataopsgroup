
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, Suspense } from 'react';
import { throttle } from './lib/optimization';
import { setupAnalyticsAndMonitoring, initializeApp } from './utils/app-initialization';
import { 
  setupResourceHints, 
  optimizeAssetLoading, 
  setupClientCaching,
  prefetchCriticalRoutes
} from './lib/performance-optimizations';

// Initialize application
const renderApp = () => {
  const container = document.getElementById("root");
  if (container) {
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
  }
};

// Apply performance optimizations immediately
setupResourceHints();

// Immediately render the app for fast initial paint
renderApp();

// Defer non-critical operations
if (typeof window !== 'undefined') {
  // Process important performance operations with priority
  optimizeAssetLoading();
  setupClientCaching();
  
  // Prefetch critical routes for faster subsequent navigation
  prefetchCriticalRoutes([
    '/contact',
    '/insights',
    '/services',
    '/approach',
    '/faqs'
  ]);

  const setupDeferredOperations = throttle(() => {
    setupAnalyticsAndMonitoring();
  }, 5000);
  
  // Initialize app features when browser is idle
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(setupDeferredOperations, { timeout: 2000 });
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    setTimeout(setupDeferredOperations, 200);
  }
  
  // Initialize remaining app features
  initializeApp();
}
