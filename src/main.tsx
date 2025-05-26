
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, Suspense } from 'react';
import { injectCriticalCSS } from './utils/critical-css-enhanced';

// Enhanced version setup with performance monitoring
if (typeof window !== 'undefined') {
  window.APP_VERSION = '1.8.0';
  
  // Inject critical CSS immediately to prevent render blocking
  injectCriticalCSS();
}

// Ultra-lightweight loading fallback for mobile performance
const LoadingFallback = () => (
  <div className="loading-container">
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <div className="loading-spinner"></div>
      <p style={{marginTop:'1rem',color:'#4F46E5',fontSize:'1.125rem',fontWeight:500,fontFamily:'Inter,system-ui,sans-serif'}}>Loading...</p>
    </div>
  </div>
);

// Optimized render function
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

// Immediate render for fastest Time to Interactive
renderApp();

// Ultra-aggressive deferred loading for mobile optimization
const loadDeferredModules = async () => {
  try {
    const isMobile = window.innerWidth < 768;
    
    // Only load performance monitoring on desktop or after significant delay on mobile
    if (!isMobile) {
      setTimeout(async () => {
        try {
          const { initEnhancedWebVitals } = await import('./utils/core-web-vitals-enhanced');
          initEnhancedWebVitals();
        } catch (error) {
          console.warn('Web vitals failed to load:', error);
        }
      }, 1000);
    } else {
      // Mobile: delay everything significantly
      setTimeout(async () => {
        try {
          const { initWebVitals } = await import('./utils/web-vitals');
          initWebVitals();
        } catch (error) {
          console.warn('Basic web vitals failed:', error);
        }
      }, 5000);
    }
    
    // Mobile-specific ultra-light optimizations
    if (isMobile) {
      setTimeout(async () => {
        try {
          const { initMobileOptimizations } = await import('./utils/performance/mobile-optimization');
          initMobileOptimizations();
        } catch (error) {
          console.warn('Mobile optimizations failed:', error);
        }
      }, 8000);
    }
    
  } catch (error) {
    console.error('Error loading deferred modules:', error);
  }
};

// Use optimized timing for module loading
if (typeof window !== 'undefined') {
  // On mobile, delay everything significantly
  const isMobile = window.innerWidth < 768;
  const delay = isMobile ? 3000 : 100;
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(loadDeferredModules, delay);
    });
  } else {
    setTimeout(loadDeferredModules, delay);
  }
}
