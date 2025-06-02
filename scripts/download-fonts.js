import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Font weights to download
const weights = ['300', '400', '500', '700'];

// Create directories if they don't exist
const createDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Download file
const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

// Download and optimize fonts
const downloadAndOptimizeFonts = async () => {
  const fontsDir = path.join(__dirname, '../public/fonts');
  const robotoDir = path.join(fontsDir, 'roboto-subset');
  const rubikDir = path.join(fontsDir, 'rubik-subset');

  // Create directories
  createDir(robotoDir);
  createDir(rubikDir);

  // Download Roboto fonts
  for (const weight of weights) {
    const robotoUrl = `https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2`;
    const robotoDest = path.join(robotoDir, `roboto-latin-${weight}-normal.woff2`);
    await downloadFile(robotoUrl, robotoDest);
  }

  // Download Rubik fonts
  for (const weight of weights) {
    const rubikUrl = `https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4i1UA.woff2`;
    const rubikDest = path.join(rubikDir, `rubik-latin-${weight}-normal.woff2`);
    await downloadFile(rubikUrl, rubikDest);
  }

  console.log('Fonts downloaded successfully!');
};

// Run the script
downloadAndOptimizeFonts().catch(console.error); 