
/**
 * Font optimization utilities for better FCP
 */

// Optimize font loading for better FCP
export const optimizeFontLoading = () => {
  if (typeof document === 'undefined') return;

  // Add font-display: swap to improve font loading performance
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'Roboto';
      font-display: swap;
    }
    @font-face {
      font-family: 'Rubik';
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
};
