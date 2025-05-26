
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/font-face.css';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, Suspense } from 'react';

// Critical performance setup
if (typeof window !== 'undefined') {
  window.APP_VERSION = '1.4.0'; // Incremented for final PageSpeed optimizations
}

// Optimized render function with performance monitoring
const renderApp = () => {
  const container = document.getElementById("root");
  if (container) {
    // Mark render start for performance monitoring
    if (window.performance && 'mark' in window.performance) {
      window.performance.mark('react-render-start');
    }
    
    const root = createRoot(container);
    root.render(
      <StrictMode>
        <HelmetProvider>
          <Suspense fallback={
            <div className="w-full h-screen flex items-center justify-center bg-gray-50">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mb-2"></div>
                <p className="text-blue-600 text-sm font-medium">Loading...</p>
              </div>
            </div>
          }>
            <App />
          </Suspense>
        </HelmetProvider>
      </StrictMode>
    );
    
    // Mark render complete for performance tracking
    if (window.performance && 'mark' in window.performance) {
      window.performance.mark('react-render-complete');
    }
  }
};

// Immediate render for fast FCP
renderApp();

// Enhanced deferred module loading for final PageSpeed optimization
const loadDeferredModules = async () => {
  try {
    // Load advanced optimizations first (highest impact)
    const { initAdvancedOptimizations } = await import('./utils/performance/advanced-optimization');
    initAdvancedOptimizations();
    
    // Load existing performance optimizations
    const { initializePerformanceOptimizations } = await import('./utils/performance/initialization');
    initializePerformanceOptimizations();
    
    // Load web vitals monitoring when idle
    const { initWebVitals } = await import('./utils/web-vitals');
    initWebVitals();
    
    // Load analytics last (lowest priority)
    const { setupAnalyticsAndMonitoring } = await import('./utils/app-initialization');
    setupAnalyticsAndMonitoring();
  } catch (error) {
    console.error('Error loading deferred modules:', error);
  }
};

// Use requestIdleCallback for better performance
if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadDeferredModules, { timeout: 2000 });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(loadDeferredModules, 500);
  }
}
