
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/font-face.css';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, Suspense } from 'react';

// Define app version globally
if (typeof window !== 'undefined') {
  window.APP_VERSION = '1.0.9'; // Incremented for performance optimizations
}

// Optimized application rendering with performance focus
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
    
    // Mark render completion
    performance.mark('render-complete');
    performance.measure('total-render-time', 'render-start', 'render-complete');
  }
};

// Immediately render the app for fast initial paint
renderApp();

// Defer all non-critical initialization to after page load
if (typeof window !== 'undefined') {
  // Load remaining functionality after initial render
  window.addEventListener('load', async () => {
    // Dynamically import and initialize non-critical modules
    const [
      { initWebVitals },
      { setupAnalyticsAndMonitoring, initializeApp },
      { setupResourceHints, optimizeAssetLoading, setupClientCaching }
    ] = await Promise.all([
      import('./utils/web-vitals'),
      import('./utils/app-initialization'),
      import('./lib/performance-optimizations')
    ]);
    
    // Initialize in order of priority
    initWebVitals();
    setupResourceHints();
    
    // Use requestIdleCallback for non-critical tasks
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        optimizeAssetLoading();
        setupClientCaching();
      });
      
      requestIdleCallback(() => {
        setupAnalyticsAndMonitoring();
        initializeApp();
      }, { timeout: 5000 });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        optimizeAssetLoading();
        setupClientCaching();
        setupAnalyticsAndMonitoring();
        initializeApp();
      }, 100);
    }
    
    performance.mark('app-loaded');
    performance.measure('app-startup-time', 'render-start', 'app-loaded');
  });
}
