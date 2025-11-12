#!/bin/bash

# Script pour créer les versions anglaises des articles de blog
# Avec meta descriptions traduites en anglais

echo "🚀 Création des articles de blog en anglais..."
echo ""

# Associative array: filename => English meta description
declare -A descriptions=(
  ["accessibilite-wcag.html"]="Complete WCAG 2.2 Guide: Make your website accessible to everyone with web accessibility standards. Techniques, tools and SEO best practices."
  ["api-first-development.html"]="API-first development: Complete guide to building modern web applications with REST API and GraphQL. Microservices architecture and best practices."
  ["checklist-seo.html"]="Complete technical SEO checklist before launching your website. All essential points to optimize your SEO."
  ["content-marketing-strategie.html"]="Content Marketing 2025: Complete guide to create a powerful content strategy. Keyword research, editorial calendar, SEO and distribution."
  ["cout-site-ecommerce.html"]="How much does an e-commerce website cost in 2025? Complete breakdown of prices and costs for creating an online store."
  ["cybersecurite-web-2025.html"]="Web cybersecurity 2025: protect your site from cyberattacks with this complete guide to threats (SQL injection, XSS, CSRF, DDoS) and essential protections."
  ["email-marketing-automation.html"]="Email marketing automation 2025: Sequences that convert - welcome series, cart abandonment, lead nurturing. Tools and ROI strategies."
  ["erreurs-refonte.html"]="5 common mistakes to avoid when redesigning a website. Complete guide to successfully complete your web redesign project."
  ["google-analytics-4-guide.html"]="Google Analytics 4 (GA4): Complete guide for beginners. Installation, configuration, essential reports and custom events to master GA4 in 2025."
  ["ia-developpement-web.html"]="AI and web development 2025: GitHub Copilot, ChatGPT and code generators. How artificial intelligence is revolutionizing website creation."
  ["ia-marketing-digital.html"]="AI in digital marketing: ChatGPT and automation in 2025. Discover how to use AI to create content, automate campaigns and personalize customer experience."
  ["jamstack-vs-traditionnel.html"]="Jamstack vs Traditional Architecture in 2025: complete comparison of performance, costs, SEO and use cases to choose the best web architecture."
  ["linkedin-b2b-marketing.html"]="LinkedIn B2B Marketing 2025: Profile optimization, LinkedIn Ads, Sales Navigator and prospecting to generate qualified B2B leads."
  ["marketing-automation-tools.html"]="Marketing automation 2025: Comparison HubSpot, Mailchimp, ActiveCampaign, Brevo and Klaviyo. Features, pricing and selection guide."
  ["marketing-influence-2025.html"]="Influencer marketing 2025: Complete guide micro vs macro-influencers, strategies, costs, ROI and fake influencer detection. Succeed in your campaigns."
  ["marketing-video-viral.html"]="Video marketing 2025: Complete guide to create viral content on YouTube, TikTok, Instagram Reels. Formats, hooks, editing and strategies that work."
  ["meta-ads-optimisation.html"]="Meta Ads 2025: Complete guide to optimize your Facebook and Instagram campaigns. Targeting, budget, creatives, A/B testing, Pixel and ROAS."
  ["progressive-web-apps.html"]="Progressive Web Apps (PWA): Why your site should be one. Complete guide installation, service worker, manifest.json and PWA strategy 2025."
  ["seo-local-strategies.html"]="Local SEO 2025: Google My Business, customer reviews, local citations. Complete guide to local SEO to attract more customers."
  ["site-responsive.html"]="Why a responsive website is essential in 2025? Discover the importance of adaptive design for your site."
  ["tiktok-marketing-entreprises.html"]="TikTok Marketing: Winning strategies for businesses in 2025. TikTok Ads, TikTok Shop, and viral content to boost your sales."
  ["voice-search-seo.html"]="Voice Search SEO 2025: Complete guide to optimize your content for Alexa, Siri and Google Assistant. Featured Snippets, FAQ and conversational queries."
  ["webassembly-2025.html"]="WebAssembly 2025: High-performance web development. How Wasm is revolutionizing web applications with near-native performance."
  ["wordpress-vs-react.html"]="How to choose between WordPress and React to create your website? Complete guide to make the right choice according to your needs."
)

# Compteur
count=0
total=${#descriptions[@]}

# Pour chaque article
for filename in "${!descriptions[@]}"; do
  ((count++))
  description="${descriptions[$filename]}"
  
  echo "[$count/$total] Traitement de $filename..."
  
  # Copier l'article
  cp "blog/$filename" "en/blog/$filename"
  
  # Remplacer les éléments dans le fichier
  sed -i 's|lang="fr"|lang="en"|g' "en/blog/$filename"
  sed -i 's|og:locale" content="fr_FR"|og:locale" content="en_US"|g' "en/blog/$filename"
  sed -i "s|https://www.siteonweb.fr/blog/|https://www.siteonweb.fr/en/blog/|g" "en/blog/$filename"
  sed -i 's|<script type="module" src="../../src/|<script type="module" src="../../../src/|g' "en/blog/$filename"
  
  # Remplacer la meta description (échapper les caractères spéciaux)
  escaped_desc=$(echo "$description" | sed 's/[&/\]/\&/g')
  sed -i "/<meta name=\"description\"/c\    <meta name=\"description\" content=\"$escaped_desc\" />" "en/blog/$filename"
  
done

echo ""
echo "✅ $total articles créés dans en/blog/"
echo "✅ Meta tags en anglais"
echo "✅ URLs mises à jour vers /en/blog/"
echo "✅ Chemins des scripts React ajustés"
