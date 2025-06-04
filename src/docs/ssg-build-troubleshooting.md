
# SSG Build Troubleshooting Guide

## Current Status
This project has SSG (Static Site Generation) configuration but requires manual script execution since package.json is read-only.

## How to Run SSG Build Commands

Since package.json cannot be modified, run scripts directly:

### Test SSG Build
```bash
node scripts/test-ssg-build.cjs
```

### Build with SSG
```bash
npx vite-ssg build --config vite.config.ssg.ts
```

### Preview SSG Build
```bash
npx vite preview --config vite.config.ssg.ts
```

## Common Issues and Solutions

### 1. "Module not found" errors
- **Cause**: Missing vite-ssg dependency or incorrect config file
- **Solution**: Ensure vite-ssg is installed and vite.config.ssg.ts exists

### 2. Build fails with "Cannot resolve module"
- **Cause**: Incorrect import paths or missing files
- **Solution**: Check all import statements and ensure referenced files exist

### 3. "Routes not found" during pre-rendering
- **Cause**: Routes listed in config don't match actual routes
- **Solution**: Update routesToPrerender array in vite.config.ssg.ts

### 4. Browser APIs used during SSR
- **Cause**: Components using window, document, or other browser-only APIs
- **Solution**: Add guards like `if (typeof window !== 'undefined')`

### 5. Script execution errors
- **Cause**: Shebang or syntax issues in Node.js scripts
- **Solution**: Remove shebang lines and ensure proper CommonJS syntax

## Files Created/Modified for SSG Support

1. **vite.config.ssg.ts** - SSG-specific Vite configuration
2. **src/main.ssg.tsx** - SSG entry point with server-side rendering
3. **scripts/test-ssg-build.cjs** - Test script for validating SSG build

## Next Steps

1. Run `node scripts/test-ssg-build.cjs` to test current setup
2. If successful, SSG build will generate static HTML files in `dist/`
3. If errors occur, check console output and address issues step by step

## Package.json Note

Since package.json is read-only in this project, all SSG commands must be run directly using npx or node, rather than through npm scripts.

## Error Resolution Log

- **Fixed**: Removed shebang from test-ssg-build.cjs to prevent syntax errors
- **Fixed**: Updated script to use proper CommonJS syntax without ES modules
