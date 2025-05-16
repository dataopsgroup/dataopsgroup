import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, Suspense } from 'react';

// Define types for web vitals performance entries
interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

// Initialize application with performance optimization
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

// Track initial page view after analytics has loaded
const trackInitialPageView = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
      send_page_view: true
    });
  }
};

// Enhanced performance monitoring function
const trackWebVitals = () => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    // Create performance observer for LCP
    try {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        // Report LCP to analytics if available
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            metric_name: 'LCP',
            metric_value: lastEntry.startTime,
            metric_delta: 0,
            metric_rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs-improvement' : 'poor'
          });
        }
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      
      // Create performance observer for CLS
      const clsObserver = new PerformanceObserver((entryList) => {
        let clsValue = 0;
        for (const entry of entryList.getEntries()) {
          const layoutShift = entry as LayoutShiftEntry;
          if (!layoutShift.hadRecentInput) {
            clsValue += layoutShift.value;
          }
        }
        // Report CLS to analytics
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            metric_name: 'CLS',
            metric_value: clsValue,
            metric_delta: 0,
            metric_rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor'
          });
        }
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
      
      // Create performance observer for FID/INP
      const fidObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const firstInput = entry as FirstInputEntry;
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              metric_name: entry.name === 'first-input' ? 'FID' : 'INP',
              metric_value: firstInput.processingStart - firstInput.startTime,
              metric_delta: 0,
              metric_rating: (firstInput.processingStart - firstInput.startTime) < 100 ? 'good' : 
                (firstInput.processingStart - firstInput.startTime) < 300 ? 'needs-improvement' : 'poor'
            });
          }
        }
      });
      fidObserver.observe({ type: 'first-input', buffered: true });
      
      return () => {
        lcpObserver.disconnect();
        clsObserver.disconnect();
        fidObserver.disconnect();
      };
    } catch (e) {
      console.error('Error setting up performance observers:', e);
    }
  }
};

// Setup route change tracking for analytics
const setupRouteChangeTracking = () => {
  if (typeof window !== 'undefined') {
    // Listen for route changes to track in analytics
    const pushState = history.pushState;
    history.pushState = function() {
      pushState.apply(history, arguments);
      
      // Small timeout to ensure title and page have updated
      setTimeout(() => {
        // Track in Google Analytics
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
            send_page_view: true
          });
        }
        
        // If HubSpot tracking is loaded, track page view
        if (window._hsq) {
          window._hsq.push(['setPath', window.location.pathname + window.location.search]);
          window._hsq.push(['trackPageView']);
        }
      }, 100);
    };
    
    // Also capture browser back/forward navigation
    window.addEventListener('popstate', () => {
      setTimeout(() => {
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname
          });
        }
        
        if (window._hsq) {
          window._hsq.push(['setPath', window.location.pathname + window.location.search]);
          window._hsq.push(['trackPageView']);
        }
      }, 100);
    });
  }
};

// Defer non-critical operations
const deferredInit = () => {
  trackInitialPageView();
  setupRouteChangeTracking();
  trackWebVitals();
};

// Immediately render the app for fast initial paint
renderApp();

// Defer non-critical operations
if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(deferredInit, { timeout: 2000 });
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    setTimeout(deferredInit, 200);
  }
}

// Add gtag and HubSpot to window object type
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    _hsq?: any[];
  }
}
