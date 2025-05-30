
import { createRoot, hydrateRoot } from 'react-dom/client';
import { renderToString } from 'react-dom/server';
import { StrictMode } from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import './styles/font-face.css';

/**
 * SSG Entry Point
 * Handles server-side rendering for static site generation
 */

// SSG render function for static generation
export function render(url: string) {
  const helmetContext = {};
  
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );
  
  return {
    html,
    head: helmetContext
  };
}

// Client-side hydration for interactivity
if (typeof window !== 'undefined') {
  const container = document.getElementById("root");
  if (container) {
    // Use hydrateRoot for SSG pages, createRoot for CSR fallback
    if (container.hasChildNodes()) {
      hydrateRoot(container,
        <StrictMode>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </StrictMode>
      );
    } else {
      const root = createRoot(container);
      root.render(
        <StrictMode>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </StrictMode>
      );
    }
  }
}
