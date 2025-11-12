#!/bin/bash

echo "🌐 Ajout des balises hreflang aux articles de blog..."
echo ""

# Compteur
count=0
total=24

# Pour chaque article FR dans blog/
for file in blog/*.html; do
  ((count++))
  filename=$(basename "$file")

  echo "[$count/$total] Traitement de blog/$filename..."

  # Ajouter les hreflang tags après la ligne canonical
  sed -i "/rel=\"canonical\"/a\\    <link rel=\"alternate\" hreflang=\"fr\" href=\"https://www.siteonweb.fr/blog/$filename\" />\n    <link rel=\"alternate\" hreflang=\"en\" href=\"https://www.siteonweb.fr/en/blog/$filename\" />\n    <link rel=\"alternate\" hreflang=\"x-default\" href=\"https://www.siteonweb.fr/blog/$filename\" />" "blog/$filename"
done

echo ""
echo "🌐 Ajout des balises hreflang aux articles EN..."
echo ""

# Réinitialiser le compteur
count=0

# Pour chaque article EN dans en/blog/
for file in en/blog/*.html; do
  ((count++))
  filename=$(basename "$file")

  echo "[$count/$total] Traitement de en/blog/$filename..."

  # Ajouter les hreflang tags après la ligne canonical
  sed -i "/rel=\"canonical\"/a\\    <link rel=\"alternate\" hreflang=\"fr\" href=\"https://www.siteonweb.fr/blog/$filename\" />\n    <link rel=\"alternate\" hreflang=\"en\" href=\"https://www.siteonweb.fr/en/blog/$filename\" />\n    <link rel=\"alternate\" hreflang=\"x-default\" href=\"https://www.siteonweb.fr/blog/$filename\" />" "en/blog/$filename"
done

echo ""
echo "✅ $total articles FR traités"
echo "✅ $total articles EN traités"
echo "✅ Balises hreflang ajoutées avec succès"
