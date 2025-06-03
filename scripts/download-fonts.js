
import fs from 'fs';
import path from 'path';
import https from 'https';
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

// Font URLs for Google Fonts
const getFontUrls = () => {
  return {
    roboto: {
      '300': 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCRc4AMP6lbBP.woff2',
      '400': 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
      '500': 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCRc4AMP6lbBP.woff2',
      '700': 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCRc4AMP6lbBP.woff2'
    },
    rubik: {
      '300': 'https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4i1UE8.woff2',
      '400': 'https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4i1UA.woff2',
      '500': 'https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4i1VE8.woff2',
      '700': 'https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4i1dU8.woff2'
    }
  };
};

// Download and optimize fonts
const downloadAndOptimizeFonts = async () => {
  const fontsDir = path.join(__dirname, '../public/fonts');
  const robotoDir = path.join(fontsDir, 'roboto-subset');
  const rubikDir = path.join(fontsDir, 'rubik-subset');

  // Create directories
  createDir(robotoDir);
  createDir(rubikDir);

  const fontUrls = getFontUrls();

  console.log('Downloading Roboto fonts...');
  // Download Roboto fonts
  for (const weight of weights) {
    if (fontUrls.roboto[weight]) {
      const robotoUrl = fontUrls.roboto[weight];
      const robotoDest = path.join(robotoDir, `roboto-latin-${weight}-normal.woff2`);
      console.log(`Downloading Roboto ${weight}...`);
      await downloadFile(robotoUrl, robotoDest);
    }
  }

  console.log('Downloading Rubik fonts...');
  // Download Rubik fonts
  for (const weight of weights) {
    if (fontUrls.rubik[weight]) {
      const rubikUrl = fontUrls.rubik[weight];
      const rubikDest = path.join(rubikDir, `rubik-latin-${weight}-normal.woff2`);
      console.log(`Downloading Rubik ${weight}...`);
      await downloadFile(rubikUrl, rubikDest);
    }
  }

  console.log('All fonts downloaded successfully!');
};

// Run the script
downloadAndOptimizeFonts().catch(console.error);
