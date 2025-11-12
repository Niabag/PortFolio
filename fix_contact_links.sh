#!/bin/bash

echo "🔧 Correction des liens de contact dans les articles..."

# Liste des fichiers à corriger
files=(
  "src/pages/articles/ErreursRefonte.jsx"
  "src/pages/articles/ChecklistSEO.jsx"
  "src/pages/articles/CoutSiteEcommerce.jsx"
  "src/pages/articles/WordpressVsReact.jsx"
  "src/pages/articles/VoiceSearchSEO.jsx"
  "src/pages/articles/MetaAdsOptimisation.jsx"
  "src/pages/articles/ContentMarketingStrategie.jsx"
  "src/pages/articles/MarketingAutomationTools.jsx"
  "src/pages/articles/LinkedinB2BMarketing.jsx"
  "src/pages/articles/MarketingVideoViral.jsx"
  "src/pages/articles/EmailMarketingAutomation.jsx"
  "src/pages/articles/MarketingInfluence2025.jsx"
  "src/pages/articles/ApiFirstDevelopment.jsx"
  "src/pages/articles/CybersecuriteWeb2025.jsx"
  "src/pages/articles/AccessibiliteWCAG.jsx"
  "src/pages/articles/JamstackVsTraditionnel.jsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "✓ Correction de $file"
    # Remplacer href="/index.html#contact" par href={lang === 'fr' ? '/index.html#contact' : '/en/index.html#contact'}
    sed -i 's|href="/index\.html#contact"|href={lang === '\''fr'\'' ? '\''/index.html#contact'\'' : '\''/en/index.html#contact'\''}|g' "$file"
  else
    echo "✗ Fichier non trouvé: $file"
  fi
done

echo "✅ Correction terminée!"
