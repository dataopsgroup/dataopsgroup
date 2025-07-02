
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { loadDeferredCSS, preloadCriticalFonts } from "./utils/deferred-css-loader";

// Initialize deferred loading
loadDeferredCSS();
preloadCriticalFonts();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
