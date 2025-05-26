
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/font-face.css';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, Suspense } from 'react';

// Basic version setup
if (typeof window !== 'undefined') {
  window.APP_VERSION = '1.7.2';
  
  // Basic service worker registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered:', registration.scope);
        })
        .catch((error) => {
          console.log('SW registration failed:', error);
        });
    });
  }
}

// Simple loading fallback
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

// Basic deferred initialization (simplified)
const loadBasicModules = async () => {
  try {
    // Only load basic analytics after a delay
    setTimeout(() => {
      if (window.gtag) {
        window.gtag('config', 'AW-16996265146', {
          'send_page_view': false,
          'cookie_flags': 'samesite=none;secure'
        });
      }
    }, 2000);
    
  } catch (error) {
    console.error('Error loading basic modules:', error);
    // Continue without modules if they fail
  }
};

// Simple timing for module loading
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(loadBasicModules, 500);
    });
  } else {
    setTimeout(loadBasicModules, 500);
  }
}
