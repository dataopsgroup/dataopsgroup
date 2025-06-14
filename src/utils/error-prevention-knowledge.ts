/**
 * Knowledge Base: Common Build Error Prevention
 * 
 * This file documents learnings from build errors to prevent future occurrences
 */

export const buildErrorLearnings = {
  imageOptimization: {
    title: "Image Optimization Utility Build Errors",
    date: "2025-01-27",
    errors: [
      "Module has no exported member 'isLargeImage'",
      "Expected 1 arguments, but got 2",
      "Type signature mismatches between files"
    ],
    rootCause: "Inconsistent function signatures and missing exports across image optimization utilities",
    solution: [
      "1. Always export all public functions from utility modules",
      "2. Keep function signatures consistent across all files that use them",
      "3. Use TypeScript types/interfaces to ensure consistency",
      "4. When adding optional parameters, make them truly optional with defaults",
      "5. Test import/export relationships before committing changes"
    ],
    prevention: [
      "Create type definitions first, then implement functions",
      "Use a single source of truth for function signatures",
      "Export types alongside functions to prevent mismatches",
      "Use barrel exports (index.ts) to manage complex utility modules"
    ],
    codePattern: `
      // GOOD: Consistent exports with proper types
      export type ImageContext = 'hero' | 'content' | 'logo';
      export const processImage = (src: string, context?: ImageContext): string => {
        // implementation
      };
      
      // BAD: Inconsistent signatures across files
      // File A: processImage(src: string, context: ImageContext)
      // File B: processImage(src: string) - different signature
    `
  },
  
  canonicalOpenGraphMismatch: {
    title: "Canonical/OpenGraph URL Mismatch - Ahrefs SEO Warning",
    date: "2025-06-14",
    issue: "Ahrefs reports 'URL specified in og:url Open Graph tag and in rel=canonical tag is mismatched'",
    impact: "Non-canonical versions of pages get shared on social networks, hurting SEO and social media performance",
    rootCauses: [
      "FAQ pages explicitly setting canonicalPath to URLs that redirect (e.g., '/faqs/hubspot-experts' which redirects to '/faqs/experts')",
      "Circular logic in MetaHead component trying to resolve redirects after canonicalPath is already set",
      "OpenGraph URL not exactly matching the canonical URL due to complex resolution logic"
    ],
    symptoms: [
      "Ahrefs warnings about canonical/OG URL mismatches",
      "Social media shares pointing to redirect URLs instead of canonical URLs",
      "Development console showing canonical/OG URL mismatch errors"
    ],
    solution: {
      step1: "Fix FAQ pages to use correct canonical paths",
      step2: "Simplify MetaHead logic to ensure og:url matches canonical exactly", 
      step3: "Update SEO config with proper canonical URLs",
      step4: "Add development validation component to catch future mismatches"
    },
    implementationDetails: [
      "Updated FAQ pages to use canonical paths from CANONICAL_URLS constant",
      "Removed circular redirect resolution logic from MetaHead component",
      "Ensured og:url always exactly matches the canonical URL",
      "Added CanonicalOGValidator component for development-time validation",
      "Updated seo-config.ts with correct canonical FAQ URLs"
    ],
    preventionRules: [
      "NEVER set canonicalPath prop to a URL that redirects to another URL",
      "ALWAYS use URLs from CANONICAL_URLS constant for canonical paths",
      "ENSURE og:url exactly matches the canonical URL with no deviation", 
      "USE explicit canonical paths rather than auto-resolution logic",
      "VALIDATE in development that canonical and OG URLs match",
      "CHECK seo-config.ts before setting any canonical paths"
    ],
    codePatterns: {
      correct: `
        // CORRECT: Use canonical URL that doesn't redirect
        <CategoryPageLayout
          canonicalPath="/faqs/experts"  // Points to final destination
          // ... other props
        />
        
        // CORRECT: MetaHead ensures exact match
        const ogUrl = fullCanonicalUrl; // og:url exactly matches canonical
      `,
      incorrect: `
        // WRONG: Setting canonical to a redirecting URL
        <CategoryPageLayout
          canonicalPath="/faqs/hubspot-experts"  // This redirects to /faqs/experts
          // ... other props
        />
        
        // WRONG: Complex logic that can cause mismatches
        const ogUrl = someComplexResolution !== fullCanonicalUrl;
      `
    },
    validationSteps: [
      "Check CanonicalOGValidator output in development console",
      "Verify no 'CANONICAL/OG URL MISMATCH' errors in browser console", 
      "Test that canonical <link> and og:url <meta> tags match exactly",
      "Run Ahrefs audit to confirm no more mismatch warnings",
      "Validate that all FAQ pages use correct canonical paths"
    ],
    relatedFiles: [
      "src/components/seo/MetaHead.tsx - Main component handling canonical/OG URLs",
      "src/utils/seo-config.ts - Central source of truth for canonical URLs", 
      "src/components/seo/CanonicalOGValidator.tsx - Development validation",
      "src/pages/FAQ*.tsx - Pages that need correct canonical paths"
    ],
    criticalNote: "This issue was persistent because it required fixing BOTH the pages setting wrong canonical paths AND the MetaHead component logic. Fixing only one side would not resolve the Ahrefs warnings completely."
  },
  
  generalPatterns: {
    title: "General Build Error Prevention Patterns",
    patterns: [
      "Always check TypeScript errors before implementing complex changes",
      "Use consistent naming conventions across related files",
      "Export types alongside implementation functions",
      "Test imports/exports in isolation before integration",
      "Use optional parameters with defaults rather than function overloads",
      "Document SEO-critical fixes in this knowledge base to prevent regression",
      "Add development-time validation for SEO-critical functionality"
    ]
  }
};

export default buildErrorLearnings;
