// Script pour convertir les images JPG en WebP
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images', 'articles');

console.log('📦 Installation de Sharp pour conversion WebP...');
console.log('Exécutez: npm install sharp --save-dev');
console.log('\nCe script nécessite le package "sharp".');

// Fonction principale asynchrone
async function convertImages() {
  // Vérifier si sharp est installé
  try {
    const { default: sharp } = await import('sharp');
  
  console.log('\n🚀 Conversion des images en WebP...\n');

  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      console.error('Erreur lecture dossier:', err);
      return;
    }

    const jpgFiles = files.filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg'));
    
    if (jpgFiles.length === 0) {
      console.log('Aucune image JPG à convertir');
      return;
    }

    let converted = 0;
    jpgFiles.forEach(file => {
      const input = path.join(imagesDir, file);
      const output = path.join(imagesDir, file.replace(/\.jpe?g$/, '.webp'));
      
      // Ne pas convertir si déjà existe
      if (fs.existsSync(output)) {
        console.log(`✓ ${file} → déjà converti`);
        return;
      }

      sharp(input)
        .webp({ quality: 85 })
        .toFile(output)
        .then(() => {
          converted++;
          console.log(`✓ ${file} → ${path.basename(output)}`);
          
          // Supprimer le JPG original
          fs.unlink(input, (err) => {
            if (err) console.error(`Erreur suppression ${file}:`, err);
          });
        })
        .catch(err => console.error(`✗ Erreur ${file}:`, err));
    });

    setTimeout(() => {
      console.log(`\n✅ ${converted} images converties en WebP!`);
      console.log(`📁 Dossier: ${imagesDir}`);
    }, 2000);
  });

  } catch (e) {
    console.log('\n⚠️  Le package "sharp" n\'est pas installé.');
    console.log('\n📦 Installation requise:');
    console.log('   npm install sharp --save-dev');
    console.log('\nPuis relancez:');
    console.log('   node convert-to-webp.js');
  }
}

// Exécuter la fonction
convertImages();
