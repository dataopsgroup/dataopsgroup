
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Simple initialization with error handling
const initializeApp = async () => {
  try {
    console.log('Starting app initialization...');
    
    const rootElement = document.getElementById("root");
    if (!rootElement) {
      throw new Error('Root element not found');
    }

    const root = createRoot(rootElement);
    
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    
    console.log('App rendered successfully');
    
    // Initialize performance features after render
    if (typeof window !== 'undefined') {
      // Non-blocking performance initialization
      setTimeout(() => {
        Promise.all([
          import('./utils/performance/core-vitals').then(({ initWebVitals }) => {
            initWebVitals();
          }).catch(error => {
            console.warn('Failed to initialize Web Vitals:', error);
          })
        ]).catch(error => {
          console.warn('Failed to initialize performance features:', error);
        });
      }, 100);
    }
  } catch (error) {
    console.error('Failed to initialize app:', error);
    
    // Show error message in the loading div
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; height: 100vh; flex-direction: column;">
          <div style="color: #dc2626; font-size: 1.25rem; margin-bottom: 1rem;">
            Failed to load application
          </div>
          <div style="color: #6b7280; font-size: 0.875rem;">
            Please refresh the page or contact support
          </div>
        </div>
      `;
    }
  }
};

// Initialize the app
initializeApp();
