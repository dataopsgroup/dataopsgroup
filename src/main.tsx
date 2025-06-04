
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializeAllOptimizations } from "./lib/performance-optimizations";
import { initWebVitals } from "./utils/performance/core-vitals";

// Initialize performance optimizations as early as possible
if (typeof window !== 'undefined') {
  // Initialize Core Web Vitals monitoring
  initWebVitals();
  
  // Initialize performance optimizations
  initializeAllOptimizations();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
