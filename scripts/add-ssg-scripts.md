
# SSG Scripts to Add to package.json

Add these scripts to your package.json for SSG testing:

```json
{
  "scripts": {
    "build:ssg": "vite build --config vite.config.ssg.ts",
    "test:ssg": "node scripts/test-ssg-build.js",
    "preview:ssg": "vite preview --config vite.config.ssg.ts"
  }
}
```

These scripts will:
- `build:ssg`: Build using SSG configuration
- `test:ssg`: Test the SSG build process
- `preview:ssg`: Preview the SSG build locally

Note: Add these manually to package.json or have your build system include them.
