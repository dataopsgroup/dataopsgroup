
# SSG Scripts to Add to package.json

Add these scripts to your package.json file manually:

```json
{
  "scripts": {
    "backup": "node scripts/backup-current-site.js",
    "check-ssg": "node scripts/ssg-compatibility-check.js",
    "test-ssg": "node scripts/test-ssg-build.js",
    "build:ssg": "vite build --config vite.config.ssg.ts",
    "preview:ssg": "vite preview --config vite.config.ssg.ts"
  }
}
```

## Next Steps:

1. **Manual step**: Add the above scripts to your package.json
2. Run: `npm run backup` (create backup)
3. Run: `npm run check-ssg` (compatibility check)
4. Run: `npm run build:ssg` (test SSG build)
5. Run: `npm run preview:ssg` (preview SSG build)

## Rollback Plan:
If issues arise, restore files from the backup directory created in step 2.
