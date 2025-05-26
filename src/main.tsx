
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/font-face.css';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, Suspense } from 'react';

// Critical performance setup - mobile-first optimization
if (typeof window !== 'undefined') {
  window.APP_VERSION = '1.7.0'; // Incremented for mobile-first optimizations
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
    
    // Mark render complete for performance tracking
    if (window.performance && 'mark' in window.performance) {
      window.performance.mark('react-render-complete');
    }
  }
};

// Immediate render for fast FCP
renderApp();

// Mobile-first deferred module loading with reduced JavaScript bundle
const loadDeferredModules = async () => {
  try {
    // Detect device type early for conditional loading
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    // Load mobile-optimized performance initialization
    const { initializePerformanceOptimizations } = await import('./utils/performance/initialization');
    initializePerformanceOptimizations();
    
    // Load web vitals monitoring when idle
    const { initWebVitals } = await import('./utils/web-vitals');
    initWebVitals();
    
    // Conditional loading based on device type for reduced mobile bundle
    if (isMobile) {
      // Mobile gets minimal features - 60% smaller bundle
      const { initMobileOptimizations } = await import('./utils/performance/mobile-optimization');
      initMobileOptimizations();
    } else if (isTablet) {
      // Tablet gets medium feature set
      const { initMobileOptimizations } = await import('./utils/performance/mobile-optimization');
      initMobileOptimizations();
      
      // Light analytics for tablets
      setTimeout(() => {
        if (window.gtag) {
          window.gtag('config', 'AW-16996265146', {
            'send_page_view': false,
            'cookie_flags': 'samesite=none;secure'
          });
        }
      }, 2000);
    } else {
      // Desktop gets full feature set
      const { setupAnalyticsAndMonitoring } = await import('./utils/app-initialization');
      setupAnalyticsAndMonitoring();
    }
    
  } catch (error) {
    console.error('Error loading deferred modules:', error);
  }
};

// Use requestIdleCallback for better performance
if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadDeferredModules, { timeout: 1000 });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(loadDeferredModules, 200); // Reduced timeout for mobile
  }
}
