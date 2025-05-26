import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/font-face.css';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';

// Basic version setup
if (typeof window !== 'undefined') {
  window.APP_VERSION = '1.7.2';
}

// Simple render function - removed StrictMode temporarily
const renderApp = () => {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(
      <HelmetProvider>
        <App />
        <Analytics />
      </HelmetProvider>
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
