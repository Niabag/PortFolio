const fs = require('fs');
const path = require('path');

// Métadonnées des articles
const articlesMetadata = {
  'accessibilite-wcag': {
    title: 'Accessibilité web (WCAG 2.2) : Guide complet pour des sites inclusifs',
    description: 'Rendez votre site accessible à tous avec ce guide pratique des normes WCAG 2.2 : techniques, outils et bonnes pratiques.',
    date: '2025-03-14',
    category: 'Accessibilité',
    keywords: 'accessibilité web, WCAG 2.2, site inclusif, normes accessibilité'
  },
  'api-first-development': {
    title: 'API-first development : Construire des applications web modernes et évolutives',
    description: 'L\'approche API-first révolutionne le développement web. Découvrez ses avantages et comment l\'implémenter avec REST et GraphQL.',
    date: '2025-03-06',
    category: 'API & Backend',
    keywords: 'API-first, REST, GraphQL, développement web moderne'
  },
  'checklist-seo': {
    title: 'Checklist SEO technique avant de lancer votre site web',
    description: 'Checklist SEO technique complète avant de lancer votre site web. Tous les points essentiels pour optimiser votre référencement.',
    date: '2025-03-05',
    category: 'SEO',
    keywords: 'checklist SEO site web, SEO technique, optimisation site internet, référencement'
  },
  'content-marketing-strategie': {
    title: 'Content Marketing : Créer une stratégie de contenu performante',
    description: 'De la recherche de mots-clés à la création de contenu : comment élaborer une stratégie de content marketing qui génère du trafic.',
    date: '2025-03-04',
    category: 'Content Marketing',
    keywords: 'content marketing, stratégie contenu, marketing digital'
  },
  'cout-site-ecommerce': {
    title: 'Combien coûte un site e-commerce en 2025 ? Décryptage complet',
    description: 'Analyse détaillée des coûts de création d\'une boutique en ligne : de la solution simple aux projets sur mesure.',
    date: '2025-03-10',
    category: 'E-commerce',
    keywords: 'coût site e-commerce, prix boutique en ligne, budget e-commerce'
  },
  'cybersecurite-web-2025': {
    title: 'Cybersécurité web en 2025 : Les menaces et protections essentielles',
    description: 'Protégez votre site des cyberattaques : injections SQL, XSS, CSRF, DDoS. Guide pratique des meilleures pratiques de sécurité.',
    date: '2025-03-08',
    category: 'Sécurité',
    keywords: 'cybersécurité web, sécurité site internet, protection cyberattaques'
  },
  'email-marketing-automation': {
    title: 'Email marketing automation : Séquences qui convertissent en 2025',
    description: 'Créez des séquences d\'emails automatisées qui génèrent des ventes : welcome series, abandon de panier, nurturing.',
    date: '2025-03-17',
    category: 'Email Marketing',
    keywords: 'email marketing, automation, séquences emails, marketing automation'
  },
  'erreurs-refonte': {
    title: '5 erreurs fréquentes à éviter lors de la refonte d\'un site internet',
    description: 'Évitez les pièges courants lors de la refonte de votre site web et assurez le succès de votre projet.',
    date: '2025-03-01',
    category: 'Refonte Web',
    keywords: 'refonte site web, erreurs refonte, erreurs site internet, bonnes pratiques refonte web'
  },
  'google-analytics-4-guide': {
    title: 'Google Analytics 4 (GA4) : Guide complet pour débutants',
    description: 'Maîtrisez GA4 : installation, configuration, rapports essentiels et analyses avancées pour optimiser votre site.',
    date: '2025-03-15',
    category: 'Analytics',
    keywords: 'Google Analytics 4, GA4, analytics web, analyse site internet'
  },
  'ia-developpement-web': {
    title: 'IA et développement web : Comment l\'intelligence artificielle transforme la création de sites',
    description: 'Découvrez comment l\'IA révolutionne le développement web avec des outils comme GitHub Copilot, ChatGPT et les générateurs de code automatiques.',
    date: '2025-03-20',
    category: 'Intelligence Artificielle',
    keywords: 'IA développement web, intelligence artificielle, GitHub Copilot, ChatGPT'
  },
  'ia-marketing-digital': {
    title: 'IA dans le marketing digital : ChatGPT et automatisation en 2025',
    description: 'Comment utiliser l\'IA pour créer du contenu, automatiser vos campagnes et personnaliser l\'expérience client en 2025.',
    date: '2025-03-22',
    category: 'Intelligence Artificielle',
    keywords: 'IA marketing digital, ChatGPT marketing, automatisation marketing'
  },
  'jamstack-vs-traditionnel': {
    title: 'Jamstack vs Architecture traditionnelle : Quel choix en 2025 ?',
    description: 'Comparaison approfondie entre Jamstack et architectures traditionnelles : performances, coûts, SEO et cas d\'usage.',
    date: '2025-03-16',
    category: 'Architecture',
    keywords: 'Jamstack, architecture web, performance site, développement web moderne'
  },
  'linkedin-b2b-marketing': {
    title: 'LinkedIn B2B Marketing : Stratégies pour générer des leads qualifiés',
    description: 'LinkedIn est le réseau B2B par excellence. Découvrez comment créer une stratégie efficace pour générer des leads qualifiés.',
    date: '2025-03-09',
    category: 'LinkedIn',
    keywords: 'LinkedIn B2B, génération leads, marketing B2B, LinkedIn marketing'
  },
  'marketing-automation-tools': {
    title: 'Marketing automation : Les meilleurs outils en 2025',
    description: 'Comparatif des meilleures plateformes de marketing automation : HubSpot, Mailchimp, ActiveCampaign, Brevo.',
    date: '2025-03-07',
    category: 'Automation',
    keywords: 'marketing automation, outils marketing, HubSpot, Mailchimp'
  },
  'marketing-influence-2025': {
    title: 'Marketing d\'influence en 2025 : Comment choisir les bons partenaires',
    description: 'Micro-influenceurs vs macro-influenceurs : stratégies, coûts, ROI et comment éviter les faux influenceurs.',
    date: '2025-03-19',
    category: 'Influence',
    keywords: 'marketing influence, influenceurs, micro-influenceurs, ROI influence'
  },
  'marketing-video-viral': {
    title: 'Marketing vidéo : Créer du contenu viral sur les réseaux sociaux',
    description: 'Les secrets pour créer des vidéos qui cartonnent sur YouTube, Instagram Reels, TikTok et Facebook.',
    date: '2025-03-13',
    category: 'Vidéo',
    keywords: 'marketing vidéo, contenu viral, YouTube, TikTok, Instagram Reels'
  },
  'meta-ads-optimisation': {
    title: 'Publicité Meta Ads : Optimiser vos campagnes Facebook et Instagram',
    description: 'Ciblage, budget, créatifs, A/B testing : le guide complet pour des campagnes Meta Ads rentables en 2025.',
    date: '2025-03-02',
    category: 'Publicité',
    keywords: 'Meta Ads, Facebook Ads, Instagram Ads, publicité en ligne'
  },
  'progressive-web-apps': {
    title: 'Progressive Web Apps (PWA) : Pourquoi votre site devrait en être une',
    description: 'Les PWA offrent une expérience app mobile depuis le navigateur. Découvrez leurs avantages et comment en créer une.',
    date: '2025-03-12',
    category: 'Mobile',
    keywords: 'PWA, Progressive Web Apps, application web, mobile web'
  },
  'seo-local-strategies': {
    title: 'SEO local : Dominer les recherches géolocalisées en 2025',
    description: 'Google My Business, avis clients, citations locales : le guide complet du référencement local pour attirer plus de clients.',
    date: '2025-03-11',
    category: 'SEO Local',
    keywords: 'SEO local, référencement local, Google My Business, avis clients'
  },
  'site-responsive': {
    title: 'Pourquoi un site web responsive est indispensable en 2025 ?',
    description: 'L\'importance d\'un site adapté aux mobiles et son impact sur le SEO et les conversions en 2025.',
    date: '2025-02-25',
    category: 'Design Web',
    keywords: 'site web responsive, mobile friendly, site adapté smartphone, design adaptatif'
  },
  'tiktok-marketing-entreprises': {
    title: 'TikTok Marketing : Stratégies gagnantes pour les entreprises en 2025',
    description: 'TikTok n\'est plus réservé aux jeunes. Découvrez comment les entreprises utilisent TikTok pour générer des ventes et de la notoriété.',
    date: '2025-03-21',
    category: 'Réseaux Sociaux',
    keywords: 'TikTok marketing, TikTok entreprises, marketing réseaux sociaux'
  },
  'voice-search-seo': {
    title: 'Voice Search SEO : Optimiser pour la recherche vocale en 2025',
    description: 'Avec Alexa, Siri et Google Assistant, la recherche vocale explose. Adaptez votre SEO pour ces nouvelles requêtes.',
    date: '2025-02-28',
    category: 'SEO Vocal',
    keywords: 'recherche vocale, voice search, SEO vocal, Alexa, Google Assistant'
  },
  'webassembly-2025': {
    title: 'WebAssembly en 2025 : Le futur du développement web haute performance',
    description: 'WebAssembly permet d\'exécuter du code proche du natif dans le navigateur. Découvrez ses cas d\'usage et comment l\'intégrer.',
    date: '2025-03-18',
    category: 'Performance',
    keywords: 'WebAssembly, performance web, WASM, développement web'
  },
  'wordpress-vs-react': {
    title: 'Comment choisir entre WordPress et React pour créer son site web ?',
    description: 'Découvrez les avantages et limites de WordPress et React pour faire le meilleur choix selon vos besoins et votre budget.',
    date: '2025-03-15',
    category: 'Développement Web',
    keywords: 'WordPress vs React, CMS, framework web, développement web'
  }
};

const blogDir = path.join(__dirname, 'blog');

// Fonction pour générer le JSON-LD
function generateStructuredData(articleId, metadata) {
  return `
    <!-- Données structurées Article -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "${metadata.title}",
      "description": "${metadata.description}",
      "image": "https://siteonweb.fr/images/articles/${articleId}.webp",
      "datePublished": "${metadata.date}",
      "dateModified": "${metadata.date}",
      "author": {
        "@type": "Person",
        "name": "Gabain Potelet Berry",
        "url": "https://siteonweb.fr"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SiteOnWeb",
        "logo": {
          "@type": "ImageObject",
          "url": "https://siteonweb.fr/images/logo.svg"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://siteonweb.fr/blog/${articleId}.html"
      },
      "keywords": "${metadata.keywords}",
      "articleSection": "${metadata.category}"
    }
    </script>`;
}

// Traiter tous les articles
fs.readdir(blogDir, (err, files) => {
  if (err) {
    console.error('Erreur lors de la lecture du dossier blog:', err);
    return;
  }

  const htmlFiles = files.filter(file => file.endsWith('.html'));

  htmlFiles.forEach(file => {
    const articleId = file.replace('.html', '');
    const metadata = articlesMetadata[articleId];

    if (!metadata) {
      console.log(`⚠ Pas de métadonnées pour ${articleId}`);
      return;
    }

    const filePath = path.join(blogDir, file);
    
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Erreur lors de la lecture de ${file}:`, err);
        return;
      }

      // Vérifier si les données structurées existent déjà
      if (data.includes('"@type": "BlogPosting"')) {
        console.log(`✓ ${file} contient déjà les données structurées`);
        return;
      }

      // Ajouter les données structurées avant </head>
      const structuredData = generateStructuredData(articleId, metadata);
      const updatedData = data.replace('  </head>', structuredData + '\n  </head>');

      // Vérifier si une modification a été effectuée
      if (updatedData === data) {
        console.log(`⚠ Impossible d'ajouter les données structurées à ${file}`);
        return;
      }

      // Écrire le fichier mis à jour
      fs.writeFile(filePath, updatedData, 'utf8', (err) => {
        if (err) {
          console.error(`Erreur lors de l'écriture de ${file}:`, err);
          return;
        }
        console.log(`✓ Données structurées ajoutées à ${file}`);
      });
    });
  });
});

console.log('Ajout des données structurées aux articles de blog...');
