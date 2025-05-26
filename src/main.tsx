
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/font-face.css';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, Suspense } from 'react';

// Simplified version setup
if (typeof window !== 'undefined') {
  window.APP_VERSION = '1.7.1';
}

// Optimized render function
const renderApp = () => {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(
      <StrictMode>
        <HelmetProvider>
          <Suspense fallback={
            <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white mb-2"></div>
                <p className="text-white text-sm font-medium">Loading...</p>
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

// Immediate render
renderApp();

// Simplified deferred loading with better error handling
const loadDeferredModules = async () => {
  try {
    const isMobile = window.innerWidth < 768;
    
    // Basic performance initialization
    try {
      const { initializePerformanceOptimizations } = await import('./utils/performance/initialization');
      initializePerformanceOptimizations();
    } catch (error) {
      console.warn('Performance optimization failed to load:', error);
    }
    
    // Web vitals monitoring
    try {
      const { initWebVitals } = await import('./utils/web-vitals');
      initWebVitals();
    } catch (error) {
      console.warn('Web vitals failed to load:', error);
    }
    
    // Device-specific features with fallback
    if (isMobile) {
      try {
        const { initMobileOptimizations } = await import('./utils/performance/mobile-optimization');
        initMobileOptimizations();
      } catch (error) {
        console.warn('Mobile optimizations failed to load:', error);
      }
    } else {
      // Simplified analytics for desktop
      setTimeout(() => {
        if (window.gtag) {
          try {
            window.gtag('config', 'AW-16996265146', {
              'send_page_view': false,
              'cookie_flags': 'samesite=none;secure'
            });
          } catch (error) {
            console.warn('Analytics setup failed:', error);
          }
        }
      }, 2000);
    }
    
  } catch (error) {
    console.error('Error loading deferred modules:', error);
    // Continue without deferred modules if they fail
  }
};

// Use standard timeout for compatibility
if (typeof window !== 'undefined') {
  setTimeout(loadDeferredModules, 500);
}
