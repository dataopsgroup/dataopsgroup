
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, Suspense } from 'react';
import { throttle } from './lib/optimization';
import { setupPerformanceMonitoring } from './utils/performance-monitoring';
import { trackInitialPageView, setupRouteChangeTracking } from './utils/analytics';
import { validateRoutes, initializeApp } from './utils/app-initialization';

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

// Immediately render the app for fast initial paint
renderApp();

// Defer non-critical operations
if (typeof window !== 'undefined') {
  const setupAnalyticsAndMonitoring = throttle(() => {
    validateRoutes();
    trackInitialPageView();
    setupRouteChangeTracking();
    setupPerformanceMonitoring();
  }, 5000);
  
  // Initialize app features when browser is idle
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(setupAnalyticsAndMonitoring, { timeout: 2000 });
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    setTimeout(setupAnalyticsAndMonitoring, 200);
  }
  
  // Initialize remaining app features
  initializeApp();
}
