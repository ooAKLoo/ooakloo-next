import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.resolve(root, '../../public/rova');
await mkdir(output, { recursive: true });
const source = (view) => path.join(root, `renders/device-reference-${view}.png`);
await sharp(source('hero')).trim().resize({ height: 1400, withoutEnlargement: true }).webp({ quality: 90, alphaQuality: 100 }).toFile(path.join(output, 'device-reference-hero.webp'));

const front = await sharp(source('front')).trim().resize({ width: 335, height: 495, fit: 'inside' }).png().toBuffer();
const side = await sharp(source('side')).trim().resize({ width: 650, height: 135, fit: 'inside' }).png().toBuffer();
const bottom = await sharp(source('bottom')).trim().resize({ width: 650, height: 180, fit: 'inside' }).png().toBuffer();
const labels = Buffer.from(`<svg width="1280" height="800" xmlns="http://www.w3.org/2000/svg">
<g fill="#30342b" font-family="Helvetica, Arial, sans-serif">
<text x="65" y="65" font-size="26" letter-spacing="-1">Rova / Form study</text>
<text x="65" y="97" font-size="12" fill="#777e70">R11 plan · R6.5 continuous side profile · 13 mm thickness</text>
<text x="65" y="692" font-size="14">01 / Front</text><text x="65" y="720" font-size="12" fill="#777e70">80 × 100 mm — visual proportion</text>
<text x="500" y="190" font-size="14">02 / Side</text><text x="500" y="365" font-size="12" fill="#777e70">Full-round edge / R6.5 / 13 mm</text>
<text x="500" y="458" font-size="14">03 / Bottom</text><text x="500" y="691" font-size="12" fill="#777e70">Recessed USB-C / four amber indicators</text>
</g><path d="M65 755H1215" stroke="#d4d8ce"/>
<text x="65" y="780" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#838a7b">Built from reference / editable Blender + GLB geometry</text></svg>`);
await sharp({ create: { width: 1280, height: 800, channels: 4, background: '#eaece4' } }).composite([
  { input: front, left: 65, top: 160 },
  { input: side, left: 500, top: 215 },
  { input: bottom, left: 500, top: 480 },
  { input: labels, left: 0, top: 0 },
]).png().toFile(path.join(root, 'reference-views.png'));
console.log('Prepared website hero and orthographic reference sheet.');
