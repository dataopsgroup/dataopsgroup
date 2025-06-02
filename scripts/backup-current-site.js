
#!/usr/bin/env node

/**
 * Backup Current Site Configuration
 * Creates a complete backup before SSG migration
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const backupDir = './backup-' + new Date().toISOString().replace(/[:.]/g, '-');

console.log('🔄 Creating backup of current site...');

try {
  // Create backup directory
  fs.mkdirSync(backupDir, { recursive: true });

  // Files to backup
  const filesToBackup = [
    'vite.config.ts',
    'src/main.tsx',
    'src/App.tsx',
    'src/routes/index.tsx',
    'vercel.json'
  ];

  filesToBackup.forEach(file => {
    if (fs.existsSync(file)) {
      const backupPath = path.join(backupDir, file);
      fs.mkdirSync(path.dirname(backupPath), { recursive: true });
      fs.copyFileSync(file, backupPath);
      console.log(`✅ Backed up: ${file}`);
    }
  });

  console.log(`✅ Backup completed in: ${backupDir}`);
  console.log('🚀 Ready to proceed with SSG migration!');

} catch (error) {
  console.error('❌ Backup failed:', error);
  process.exit(1);
}
