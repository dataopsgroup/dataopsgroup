
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Critical path optimization
const initializeApp = async () => {
  try {
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
    
    // Defer non-critical performance monitoring
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        import('./utils/performance/core-vitals').then(({ initWebVitals }) => {
          initWebVitals();
        }).catch(() => {
          // Fail silently for performance monitoring
        });
      }, 3000); // Increased delay to prioritize critical rendering
    }
  } catch (error) {
    console.error('Failed to initialize app:', error);
    
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

initializeApp();
