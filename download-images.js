// Script pour télécharger et convertir les images des articles en WebP
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Créer le dossier si nécessaire
const imagesDir = path.join(__dirname, 'public', 'images', 'articles');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// URLs Unsplash de haute qualité pour chaque article
const images = {
  // Articles existants
  'wordpress-react.jpg': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=675&fit=crop&q=80',
  'ecommerce.jpg': 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&h=675&fit=crop&q=80',
  'seo-checklist.jpg': 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&h=675&fit=crop&q=80',
  'refonte-web.jpg': 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=675&fit=crop&q=80',
  'responsive.jpg': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=675&fit=crop&q=80',
  
  // Nouveaux articles Web Dev
  'ia-dev.jpg': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop&q=80',
  'webassembly.jpg': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=675&fit=crop&q=80',
  'jamstack.jpg': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=675&fit=crop&q=80',
  'accessibilite.jpg': 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=675&fit=crop&q=80',
  'pwa.jpg': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=675&fit=crop&q=80',
  'cybersecurite.jpg': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=675&fit=crop&q=80',
  'api-first.jpg': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=675&fit=crop&q=80',
  
  // Nouveaux articles Marketing
  'ia-marketing.jpg': 'https://images.unsplash.com/photo-1675557009874-5cd21bb35072?w=1200&h=675&fit=crop&q=80',
  'tiktok.jpg': 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&h=675&fit=crop&q=80',
  'influenceurs.jpg': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=675&fit=crop&q=80',
  'email-marketing.jpg': 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=675&fit=crop&q=80',
  'analytics-ga4.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop&q=80',
  'video-marketing.jpg': 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&h=675&fit=crop&q=80',
  'seo-local.jpg': 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&h=675&fit=crop&q=80',
  'linkedin-b2b.jpg': 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=1200&h=675&fit=crop&q=80',
  'automation-tools.jpg': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop&q=80',
  'content-marketing.jpg': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop&q=80',
  'meta-ads.jpg': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=675&fit=crop&q=80',
  'voice-search.jpg': 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1200&h=675&fit=crop&q=80'
};

// Fonction pour télécharger une image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename);
    
    // Vérifier si le fichier existe déjà
    if (fs.existsSync(filepath)) {
      console.log(`✓ ${filename} existe déjà`);
      resolve();
      return;
    }

    console.log(`Téléchargement de ${filename}...`);
    
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ ${filename} téléchargé`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      console.error(`✗ Erreur pour ${filename}:`, err.message);
      reject(err);
    });
  });
}

// Télécharger toutes les images
async function downloadAll() {
  console.log('🚀 Début du téléchargement des images...\n');
  
  for (const [filename, url] of Object.entries(images)) {
    try {
      await downloadImage(url, filename);
    } catch (err) {
      console.error(`Erreur: ${filename}`);
    }
  }
  
  console.log('\n✅ Téléchargement terminé !');
  console.log(`📁 Images sauvegardées dans: ${imagesDir}`);
  console.log('\n📝 Note: Les images sont au format JPG.');
  console.log('Pour convertir en WebP, utilisez: npm install sharp');
  console.log('Puis lancez: node convert-to-webp.js');
}

downloadAll();
