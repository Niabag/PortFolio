#!/bin/bash

echo "🔧 Ajout des composants WhatsApp et Tawk.to dans tous les articles..."

# Liste tous les fichiers article-*.jsx
for file in src/article-*.jsx; do
  if [ -f "$file" ]; then
    echo "   Traitement de $file..."

    # Vérifie si WhatsAppButton est déjà importé
    if grep -q "import WhatsAppButton" "$file"; then
      echo "   ⏭️  Déjà modifié, on passe"
      continue
    fi

    # Ajoute les imports après LanguageProvider
    sed -i "/import { LanguageProvider } from '.\/LanguageContext';/a\\
import WhatsAppButton from './components/WhatsAppButton';\\
import TawkToChat from './components/TawkToChat';" "$file"

    # Ajoute les composants après <LanguageProvider>
    sed -i "/<LanguageProvider>/a\\      <WhatsAppButton />\\
      <TawkToChat />" "$file"

    echo "   ✅ $file modifié"
  fi
done

echo ""
echo "✨ Tous les articles ont été mis à jour!"
