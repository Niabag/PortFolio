// Script pour convertir les images JPG en WebP (ES Module)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images', 'articles');

console.log('📦 Conversion des images en WebP...');
console.log('Ce script nécessite le package "sharp".\n');

// Fonction principale asynchrone
async function convertImages() {
  try {
    const { default: sharp } = await import('sharp');
    
    console.log('🚀 Début de la conversion...\n');

    const files = fs.readdirSync(imagesDir);
    const jpgFiles = files.filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg'));
    
    if (jpgFiles.length === 0) {
      console.log('❌ Aucune image JPG à convertir');
      console.log('Exécutez d\'abord: node download-images.js');
      return;
    }

    let converted = 0;
    
    for (const file of jpgFiles) {
      const input = path.join(imagesDir, file);
      const output = path.join(imagesDir, file.replace(/\.jpe?g$/, '.webp'));
      
      // Ne pas convertir si déjà existe
      if (fs.existsSync(output)) {
        console.log(`⏭️  ${file} → déjà converti`);
        continue;
      }

      try {
        await sharp(input)
          .webp({ quality: 85 })
          .toFile(output);
        
        converted++;
        console.log(`✅ ${file} → ${path.basename(output)}`);
        
        // Supprimer le JPG original
        fs.unlinkSync(input);
      } catch (err) {
        console.error(`❌ Erreur ${file}:`, err.message);
      }
    }

    console.log(`\n✨ ${converted} image(s) convertie(s) en WebP!`);
    console.log(`📁 Dossier: ${imagesDir}`);

  } catch (e) {
    console.log('\n⚠️  Le package "sharp" n\'est pas installé.');
    console.log('\n📦 Installation requise:');
    console.log('   npm install sharp --save-dev');
    console.log('\nPuis relancez:');
    console.log('   node convert-webp.js');
  }
}

// Exécuter la fonction
convertImages();
