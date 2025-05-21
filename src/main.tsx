
import { createRoot } from 'react-dom/client';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, Suspense, lazy } from 'react';
import router from './routes';
import { validateCriticalRoutes, reportRouteValidationIssues } from './utils/route-monitoring';

// Lazy load App component to reduce initial bundle size
const App = lazy(() => import('./App'));

// Critical rendering path - Fast initial paint
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

// Validation and non-critical operations - executed during idle time
const deferredInit = () => {
  // Validate routes
  if (router && 'routes' in router) {
    const missingRoutes = validateCriticalRoutes(router.routes);
    if (missingRoutes.length > 0) {
      reportRouteValidationIssues(missingRoutes);
    }
  }

  // Track initial page view
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
      send_page_view: true
    });
  }

  // Setup performance monitoring
  if ('PerformanceObserver' in window) {
    try {
      // Monitor LCP (Largest Contentful Paint)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            metric_name: 'LCP',
            metric_value: lastEntry.startTime,
            metric_rating: lastEntry.startTime < 2500 ? 'good' : 'poor'
          });
        }
      }).observe({type: 'largest-contentful-paint', buffered: true});

      // Monitor CLS (Cumulative Layout Shift)
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
      }).observe({type: 'layout-shift', buffered: true});

      // Monitor FID (First Input Delay)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const value = (entry as any).processingStart - (entry as any).startTime;
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              metric_name: 'FID',
              metric_value: value,
              metric_rating: value < 100 ? 'good' : 'poor'
            });
          }
        }
      }).observe({type: 'first-input', buffered: true});
    } catch (e) {
      console.error('Error setting up performance observers:', e);
    }
  }

  // Setup route tracking
  if (typeof window !== 'undefined') {
    const pushState = history.pushState;
    history.pushState = function() {
      pushState.apply(history, arguments);
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
    };
    
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

// Execute critical rendering path immediately
renderApp();

// Defer non-critical operations
if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(deferredInit, { timeout: 2000 });
  } else {
    setTimeout(deferredInit, 200);
  }
}

// Type definitions for global objects
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    _hsq?: any[];
  }
}
