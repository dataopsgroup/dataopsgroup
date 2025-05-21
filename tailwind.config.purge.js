/**
 * Advanced content purging configuration for Tailwind CSS
 * This helps optimize the final CSS bundle by removing unused classes
 */
module.exports = {
  // Standard content paths
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  
  // Advanced purging options
  options: {
    safelist: [
      // Classes that might be used dynamically
      /^bg-dataops-/,
      /^text-dataops-/,
      /^border-dataops-/,
      /^hover:bg-dataops-/,
      /^hover:text-dataops-/,
      
      // Classes that might be used by third-party libraries
      /^rc-/,
      
      // Responsive classes we want to keep
      'sm:flex-row',
      'md:grid-cols-2',
      'lg:text-6xl',
      'md:text-5xl',
      'md:justify-start'
    ],
    
    // Process these attribute variants
    attributifyPseudo: true,
    
    // Remove redundant classes
    removeDeprecatedClasses: true,
  }
};
