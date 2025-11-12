import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const images = [
  'gold-assurance.png',
  'nathalie-allemand.png',
  'jf-donny.png'
];

async function convertImages() {
  for (const img of images) {
    const inputPath = join(__dirname, 'public', 'images', img);
    const outputPath = join(__dirname, 'public', 'images', img.replace('.png', '.webp'));

    try {
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);

      console.log(`✓ ${img} → ${img.replace('.png', '.webp')}`);
    } catch (error) {
      console.error(`✗ Erreur avec ${img}:`, error.message);
    }
  }

  console.log('✅ Conversion terminée!');
}

convertImages();
