
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, Suspense } from 'react';

// Simple version setup
if (typeof window !== 'undefined') {
  window.APP_VERSION = '1.8.0';
}

// Simple loading fallback
const LoadingFallback = () => (
  <div className="loading-container">
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <div className="loading-spinner"></div>
      <p style={{marginTop:'1rem',color:'#4F46E5',fontSize:'1.125rem',fontWeight:500,fontFamily:'Inter,system-ui,sans-serif'}}>Loading...</p>
    </div>
  </div>
);

// Simple render function
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

// Immediate render
renderApp();

// Simple deferred loading without aggressive optimizations
const loadDeferredModules = async () => {
  try {
    // Only load basic web vitals after a reasonable delay
    setTimeout(async () => {
      try {
        const { initWebVitals } = await import('./utils/web-vitals');
        initWebVitals();
      } catch (error) {
        console.warn('Web vitals failed to load:', error);
      }
    }, 2000);
  } catch (error) {
    console.error('Error loading deferred modules:', error);
  }
};

// Simple timing for module loading
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(loadDeferredModules, 500);
    });
  } else {
    setTimeout(loadDeferredModules, 500);
  }
}
