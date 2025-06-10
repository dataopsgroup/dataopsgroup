
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Initialize performance optimizations with error handling
if (typeof window !== 'undefined') {
  try {
    // Initialize Core Web Vitals monitoring
    import('./utils/performance/core-vitals').then(({ initWebVitals }) => {
      initWebVitals();
    }).catch(error => {
      console.warn('Failed to initialize Web Vitals:', error);
    });
    
    // Initialize performance optimizations
    import('./lib/performance-optimizations').then(({ initializeAllOptimizations }) => {
      initializeAllOptimizations();
    }).catch(error => {
      console.warn('Failed to initialize performance optimizations:', error);
    });
  } catch (error) {
    console.warn('Failed to initialize performance features:', error);
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
