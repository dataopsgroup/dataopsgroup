
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/font-face.css';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, Suspense } from 'react';
import { initializePerformanceOptimizations } from './utils/performance-optimization';

// Critical performance setup
if (typeof window !== 'undefined') {
  window.APP_VERSION = '1.2.0'; // Incremented for performance optimizations
  
  // Initialize performance optimizations immediately
  initializePerformanceOptimizations();
}

// Optimized render function with error boundary
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
            <div className="w-full h-screen flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mb-2"></div>
                <p className="text-blue-600 text-sm">Loading...</p>
              </div>
            </div>
          }>
            <App />
          </Suspense>
        </HelmetProvider>
      </StrictMode>
    );
    
    // Mark render complete
    if (window.performance && 'mark' in window.performance) {
      window.performance.mark('react-render-complete');
    }
  }
};

// Immediate render for fast FCP
renderApp();

// Defer non-critical functionality
if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
  window.requestIdleCallback(async () => {
    try {
      // Load web vitals monitoring when idle
      const { initWebVitals } = await import('./utils/web-vitals');
      initWebVitals();
      
      // Load analytics when idle
      const { setupAnalyticsAndMonitoring } = await import('./utils/app-initialization');
      setupAnalyticsAndMonitoring();
    } catch (error) {
      console.error('Error loading deferred modules:', error);
    }
  }, { timeout: 5000 });
} else {
  // Fallback for browsers without requestIdleCallback
  setTimeout(async () => {
    try {
      const { initWebVitals } = await import('./utils/web-vitals');
      const { setupAnalyticsAndMonitoring } = await import('./utils/app-initialization');
      
      initWebVitals();
      setupAnalyticsAndMonitoring();
    } catch (error) {
      console.error('Error loading deferred modules:', error);
    }
  }, 2000);
}
