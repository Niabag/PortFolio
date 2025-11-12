#!/bin/bash

# Add SocialButtons import to all article-*.jsx files
for file in src/article-*.jsx; do
  echo "Processing $file..."

  # Add import for SocialButtons after LanguageProvider import
  sed -i "/import { LanguageProvider } from '.\/LanguageContext';/a\\
import SocialButtons from './components/SocialButtons';" "$file"

  # Add SocialButtons component after LanguageProvider opening tag
  sed -i "/<LanguageProvider>/a\\      <SocialButtons />" "$file"

  echo "✓ Added SocialButtons to $file"
done

echo ""
echo "✓ All article files updated with SocialButtons component"
