# Vercel Configuration Management

This directory contains organized configuration files that are combined to generate the final `vercel.json`.

## Structure

- **`vercel-base.json`** - Base configuration (rewrites, headers, etc.)
- **`redirects/`** - Categorized redirect rules:
  - `cleanup-redirects.json` - URL cleanup (AMP, UTM parameters)
  - `guides-redirects.json` - Guide and pillar content redirects
  - `faq-redirects.json` - FAQ page redirects
  - `assessment-redirects.json` - Assessment tool redirects
  - `content-redirects.json` - Blog/content redirects
  - `calculator-redirects.json` - Calculator tool redirects
  - `service-redirects.json` - Service page redirects
  - `catch-all-redirects.json` - Catch-all patterns for truncated URLs
  - `misc-redirects.json` - Miscellaneous redirects

## Building vercel.json

Run the build script to combine all configurations:

```bash
# Manual build
node scripts/build-vercel-config.cjs

# Or use the shell script
bash scripts/generate-vercel-config.sh
```

## Adding New Redirects

1. Add redirects to the appropriate category file
2. Run the build script to regenerate `vercel.json`
3. Test that redirects work as expected

## Priority Order

Redirects are processed in this order (first match wins):
1. URL cleanup (AMP, UTM parameters)
2. Miscellaneous redirects
3. Guide redirects
4. FAQ redirects
5. Assessment redirects
6. Content redirects
7. Calculator redirects
8. Service redirects
9. Catch-all patterns

This organization prevents the main `vercel.json` from becoming unmanageable while maintaining the same functionality.