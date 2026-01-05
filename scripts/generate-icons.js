#!/usr/bin/env node

/**
 * 图标生成脚本
 * 使用方法: npm run generate-icons
 *
 * 需要先安装 sharp: npm install sharp --save-dev
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputSvg = path.join(__dirname, '../public/assets/logo.svg');
const publicDir = path.join(__dirname, '../public');

const icons = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'og-image.png', size: 1200, height: 630, isOG: true },
];

async function generateIcons() {
  console.log('Generating icons from:', inputSvg);

  if (!fs.existsSync(inputSvg)) {
    console.error('Logo SVG not found at:', inputSvg);
    process.exit(1);
  }

  for (const icon of icons) {
    const outputPath = path.join(publicDir, icon.name);

    try {
      if (icon.isOG) {
        // OG image: 1200x630 with logo centered
        const logoSize = 400;
        const logo = await sharp(inputSvg)
          .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .toBuffer();

        await sharp({
          create: {
            width: icon.size,
            height: icon.height,
            channels: 4,
            background: { r: 255, g: 255, b: 255, alpha: 1 }
          }
        })
        .composite([{
          input: logo,
          top: Math.floor((icon.height - logoSize) / 2),
          left: Math.floor((icon.size - logoSize) / 2)
        }])
        .png()
        .toFile(outputPath);
      } else {
        await sharp(inputSvg)
          .resize(icon.size, icon.size)
          .png()
          .toFile(outputPath);
      }

      console.log(`Generated: ${icon.name}`);
    } catch (err) {
      console.error(`Failed to generate ${icon.name}:`, err.message);
    }
  }

  // Generate favicon.ico (copy 32x32 as ICO)
  // For proper .ico, you'd need a specialized library
  console.log('\nNote: For a proper favicon.ico with multiple sizes,');
  console.log('consider using https://realfavicongenerator.net/ or similar tool.');

  console.log('\nDone! Icons generated in public/ directory.');
}

generateIcons();
