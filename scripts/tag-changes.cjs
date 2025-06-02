const { execSync } = require('child_process');
const path = require('path');

// Files we're modifying
const modifiedFiles = [
  'src/main.tsx',
  'src/App.tsx',
  'vite.config.ts',
  'src/lib/performance/',
  'src/services/performance-monitoring.ts',
  'src/types/performance.ts',
  'src/utils/performance/',
  'src/services/api.ts'
];

// Tag each file for Lovable
modifiedFiles.forEach(file => {
  try {
    const filePath = path.resolve(process.cwd(), file);
    execSync(`npx lovable-tagger tag "${filePath}" --message "Performance optimization changes"`, {
      stdio: 'inherit'
    });
    console.log(`Tagged ${file} for Lovable`);
  } catch (error) {
    console.error(`Failed to tag ${file}:`, error.message);
  }
}); 