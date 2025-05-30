
import { createRoot } from 'react-dom/client';
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

// SSG render function
export function render(url: string, context: any = {}) {
  const helmetContext = {};
  
  return {
    html: `
      <div id="root">
        ${renderToString(
          <StrictMode>
            <HelmetProvider context={helmetContext}>
              <StaticRouter location={url} context={context}>
                <App />
              </StaticRouter>
            </HelmetProvider>
          </StrictMode>
        )}
      </div>
    `,
    head: helmetContext
  };
}

// Client-side hydration
if (typeof window !== 'undefined') {
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
}

// Helper function for rendering (would need react-dom/server in production)
function renderToString(element: React.ReactElement): string {
  // This is a placeholder - in real SSG we'd use ReactDOMServer.renderToString
  // For now, return empty string to avoid build errors
  return '';
}
