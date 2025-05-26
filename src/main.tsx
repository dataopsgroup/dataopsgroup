
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/font-face.css';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, Suspense } from 'react';
import { injectCriticalCSS } from './utils/critical-css-enhanced';

// Enhanced version setup with performance monitoring
if (typeof window !== 'undefined') {
  window.APP_VERSION = '1.7.2';
  
  // Inject critical CSS immediately to prevent render blocking
  injectCriticalCSS();
  
  // Register enhanced service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw-enhanced.js')
        .then((registration) => {
          console.log('Enhanced SW registered:', registration.scope);
        })
        .catch((error) => {
          console.log('SW registration failed:', error);
        });
    });
  }
}

// Enhanced loading fallback with better UX
const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        <div className="absolute inset-0 animate-ping rounded-full h-12 w-12 border border-white opacity-20"></div>
      </div>
      <div className="text-white text-center">
        <p className="text-lg font-semibold">DataOps Group</p>
        <p className="text-sm opacity-90">Loading your experience...</p>
      </div>
    </div>
  </div>
);

// Optimized render function with error boundaries
const renderApp = () => {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(
      <StrictMode>
        <HelmetProvider>
          <Suspense fallback={<LoadingFallback />}>
            <App />
          </Suspense>
        </HelmetProvider>
      </StrictMode>
    );
  }
};

// Immediate render for faster Time to Interactive
renderApp();

// Enhanced deferred loading with comprehensive error handling and performance monitoring
const loadDeferredModules = async () => {
  try {
    const isMobile = window.innerWidth < 768;
    
    // Performance monitoring initialization
    try {
      const { initEnhancedWebVitals } = await import('./utils/core-web-vitals-enhanced');
      initEnhancedWebVitals();
    } catch (error) {
      console.warn('Enhanced web vitals failed to load:', error);
      
      // Fallback to basic web vitals
      try {
        const { initWebVitals } = await import('./utils/web-vitals');
        initWebVitals();
      } catch (fallbackError) {
        console.warn('Basic web vitals also failed:', fallbackError);
      }
    }
    
    // Enhanced performance initialization
    try {
      const { initializePerformanceOptimizations } = await import('./utils/performance/initialization-enhanced');
      initializePerformanceOptimizations();
    } catch (error) {
      console.warn('Enhanced performance optimization failed:', error);
      
      // Fallback to basic performance optimization
      try {
        const { initializePerformanceOptimizations } = await import('./utils/performance/initialization');
        initializePerformanceOptimizations();
      } catch (fallbackError) {
        console.warn('Basic performance optimization also failed:', fallbackError);
      }
    }
    
    // Device-specific optimizations with enhanced error handling
    if (isMobile) {
      try {
        const { initMobileOptimizations } = await import('./utils/performance/mobile-optimization');
        initMobileOptimizations();
      } catch (error) {
        console.warn('Mobile optimizations failed:', error);
      }
    } else {
      // Desktop-specific enhancements
      setTimeout(() => {
        try {
          if (window.gtag) {
            window.gtag('config', 'AW-16996265146', {
              'send_page_view': false,
              'cookie_flags': 'samesite=none;secure'
            });
          }
        } catch (error) {
          console.warn('Analytics setup failed:', error);
        }
      }, 1000);
    }
    
    // Performance budget monitoring
    try {
      const { reportBudgetViolations } = await import('./utils/performance-budget');
      setTimeout(() => {
        reportBudgetViolations();
      }, 3000);
    } catch (error) {
      console.warn('Performance budget monitoring failed:', error);
    }
    
  } catch (error) {
    console.error('Error loading deferred modules:', error);
    // Continue without deferred modules if they fail - no user impact
  }
};

// Use optimized timing for module loading
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(loadDeferredModules, 100);
    });
  } else {
    setTimeout(loadDeferredModules, 100);
  }
}
