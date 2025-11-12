const fs = require('fs');
const path = require('path');

// Dossier contenant les articles de blog
const blogDir = path.join(__dirname, 'blog');

// Lire tous les fichiers HTML dans le dossier blog
fs.readdir(blogDir, (err, files) => {
  if (err) {
    console.error('Erreur lors de la lecture du dossier blog:', err);
    return;
  }

  const htmlFiles = files.filter(file => file.endsWith('.html'));

  htmlFiles.forEach(file => {
    const filePath = path.join(blogDir, file);
    
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Erreur lors de la lecture de ${file}:`, err);
        return;
      }

      // Vérifier si la balise robots existe déjà
      if (data.includes('<meta name="robots"')) {
        console.log(`✓ ${file} contient déjà la balise robots`);
        return;
      }

      // Ajouter la balise robots après la balise keywords
      const robotsTag = '    <meta name="robots" content="index, follow" />';
      const updatedData = data.replace(
        /(<meta name="keywords"[^>]*>)/,
        '$1\n' + robotsTag
      );

      // Vérifier si une modification a été effectuée
      if (updatedData === data) {
        console.log(`⚠ Impossible d'ajouter la balise robots à ${file}`);
        return;
      }

      // Écrire le fichier mis à jour
      fs.writeFile(filePath, updatedData, 'utf8', (err) => {
        if (err) {
          console.error(`Erreur lors de l'écriture de ${file}:`, err);
          return;
        }
        console.log(`✓ Balise robots ajoutée à ${file}`);
      });
    });
  });
});

console.log('Ajout de la balise robots aux articles de blog...');
