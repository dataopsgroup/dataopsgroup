
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/font-face.css';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, Suspense } from 'react';

// Define app version globally
if (typeof window !== 'undefined') {
  window.APP_VERSION = '1.1.0'; // Incremented for LCP optimizations
}

// Critical rendering optimized for LCP and FCP
const renderApp = () => {
  const container = document.getElementById("root");
  if (container) {
    performance.mark('render-start');
    
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
    
    performance.mark('render-complete');
  }
};

// Immediately render for fast FCP
renderApp();

// Defer all non-critical functionality until after LCP
if (typeof window !== 'undefined') {
  // Use requestIdleCallback to defer non-critical work
  const deferNonCritical = () => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(async () => {
        // Load performance monitoring after initial render
        const { initWebVitals } = await import('./utils/web-vitals');
        initWebVitals();
        
        // Load analytics after LCP
        const { setupAnalyticsAndMonitoring } = await import('./utils/app-initialization');
        setupAnalyticsAndMonitoring();
      }, { timeout: 3000 });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(async () => {
        const { initWebVitals } = await import('./utils/web-vitals');
        const { setupAnalyticsAndMonitoring } = await import('./utils/app-initialization');
        
        initWebVitals();
        setupAnalyticsAndMonitoring();
      }, 1000);
    }
  };

  // Wait for LCP before loading non-critical scripts
  if (document.readyState === 'complete') {
    deferNonCritical();
  } else {
    window.addEventListener('load', deferNonCritical, { once: true });
  }
}
