
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
  
  generalPatterns: {
    title: "General Build Error Prevention Patterns",
    patterns: [
      "Always check TypeScript errors before implementing complex changes",
      "Use consistent naming conventions across related files",
      "Export types alongside implementation functions",
      "Test imports/exports in isolation before integration",
      "Use optional parameters with defaults rather than function overloads"
    ]
  }
};

export default buildErrorLearnings;
