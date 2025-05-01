
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode } from 'react';

// Use requestIdleCallback to defer non-critical initialization
const renderApp = () => {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(
      <StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </StrictMode>
    );
  }
};

// Use requestIdleCallback for deferred initialization when browser is idle
// Fall back to setTimeout if requestIdleCallback is not available
if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
  window.requestIdleCallback(renderApp, { timeout: 1000 });
} else {
  // Fallback for browsers that don't support requestIdleCallback
  setTimeout(renderApp, 0);
}
