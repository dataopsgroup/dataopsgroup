
/**
 * Knowledge Base: Common Build Error Prevention
 * 
 * This file documents learnings from build errors to prevent future occurrences
 */

export const buildErrorLearnings = {
  componentInterfaceMismatch: {
    title: "Component Interface Mismatch - TypeScript Props Errors",
    date: "2025-06-14",
    errors: [
      "Property 'title' does not exist on type 'IntrinsicAttributes & ComponentProps'",
      "Type 'object[]' is not assignable to type 'string[]'",
      "Type signature mismatches between component interface and usage"
    ],
    rootCause: "Components receiving props that don't match their TypeScript interface definitions",
    impact: "Build failures preventing deployment and development progress",
    solution: [
      "1. Update component interfaces to accept the intended prop types",
      "2. Add backward compatibility for existing usage patterns",
      "3. Use union types or type guards to handle multiple data structures",
      "4. Provide sensible defaults for optional props",
      "5. Test both old and new usage patterns after interface updates"
    ],
    prevention: [
      "Define component interfaces before implementing usage",
      "Use TypeScript strict mode to catch interface mismatches early",
      "Document expected prop types and provide examples",
      "Create type definitions for complex data structures",
      "Use generic types for flexible component interfaces"
    ],
    codePattern: `
      // GOOD: Flexible interface with union types
      interface ComponentProps {
        data: string[] | DataObject[];
        title?: string;
        description?: string;
      }
      
      // GOOD: Type guards for handling multiple data types
      const isObjectData = (data: string[] | DataObject[]): data is DataObject[] => {
        return data.length > 0 && typeof data[0] === 'object';
      };
      
      // BAD: Rigid interface that doesn't match usage
      interface ComponentProps {
        data: string[]; // Only accepts strings, but objects are passed
      }
    `
  },

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

  titleLengthOptimization: {
    title: "Page Title Length Optimization - Ahrefs SEO Warning",
    date: "2025-06-14",
    issue: "Ahrefs reports page titles that are too long (exceeding 50-60 character recommendation)",
    impact: "Long titles get truncated in search results, reducing click-through rates and SEO effectiveness",
    rootCause: "Page titles exceeding Google's recommended 50-60 character limit for optimal display in search results",
    symptoms: [
      "Ahrefs warnings about 'Title too long' for multiple pages",
      "Titles getting truncated with '...' in Google search results",
      "Reduced visibility of important keywords in search snippets"
    ],
    solution: [
      "1. Audit all page titles for length using character count tools",
      "2. Prioritize most important keywords at the beginning of titles",
      "3. Remove redundant words while maintaining meaning and SEO value",
      "4. Keep brand name but consider shortening format (e.g., '| Brand' vs 'Brand Name')",
      "5. Test titles to ensure they convey the same value proposition in fewer characters"
    ],
    optimizationExamples: [
      "BEFORE: 'HubSpot Analytics & Business Intelligence | DataOps Group' (65 chars)",
      "AFTER: 'Analytics & BI Services | DataOps Group' (42 chars)",
      "BEFORE: 'DataOps Implementation for HubSpot | DataOps Group' (55 chars)", 
      "AFTER: 'DataOps Implementation | DataOps Group' (38 chars)"
    ],
    preventionRules: [
      "ALWAYS check title length before finalizing page titles",
      "TARGET 50-60 characters maximum for all page titles",
      "PRIORITIZE primary keywords at the beginning of titles",
      "USE character counting tools during title creation",
      "MAINTAIN brand consistency while optimizing length",
      "TEST titles in search result simulators when possible"
    ],
    codePattern: `
      // GOOD: Concise, keyword-focused title under 60 characters
      <MetaHead
        title="Analytics & BI Services | DataOps Group"  // 42 characters
        description="Transform data into actionable insights..."
      />
      
      // BAD: Long, verbose title that will be truncated
      <MetaHead
        title="HubSpot Analytics & Business Intelligence Solutions for Portfolio Companies | DataOps Group"  // 95 characters
        description="..."
      />
    `,
    relatedFiles: [
      "src/pages/AnalyticsBI.tsx - Analytics & BI service page",
      "src/pages/DataOpsImplementation.tsx - DataOps implementation page",
      "src/pages/MarketingOperationsRevOps.tsx - Marketing operations page",
      "src/pages/TeamTraining.tsx - Team training page",
      "src/routes/services/AnalyticsBI.tsx - Alternative analytics route"
    ],
    seoImpact: [
      "Improved click-through rates from search results",
      "Better keyword visibility in search snippets", 
      "Enhanced user experience with clear, concise titles",
      "Compliance with Google's title display guidelines"
    ]
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
      "Add development-time validation for SEO-critical functionality",
      "Update component interfaces to match intended usage patterns",
      "Use union types and type guards for flexible component APIs",
      "Provide backward compatibility when updating component interfaces",
      "Optimize page titles to 50-60 characters for better search result display",
      "Validate meta descriptions stay within 150-160 character limits"
    ]
  }
};

export default buildErrorLearnings;
