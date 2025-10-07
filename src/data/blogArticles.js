// Liste complète des articles de blog avec métadonnées
export const getAllArticles = (lang) => [
  // Articles existants
  {
    id: 'wordpress-vs-react',
    title: lang === 'fr'
      ? 'Comment choisir entre WordPress et React pour créer son site web ?'
      : 'How to choose between WordPress and React for your website?',
    excerpt: lang === 'fr'
      ? 'Découvrez les avantages et limites de WordPress et React pour faire le meilleur choix selon vos besoins et votre budget.'
      : 'Discover the advantages and limitations of WordPress and React to make the best choice for your needs and budget.',
    image: '/images/articles/wordpress-react.webp',
    date: lang === 'fr' ? '15 Mars 2025' : 'March 15, 2025',
    category: 'web-dev',
    categoryLabel: lang === 'fr' ? 'Développement Web' : 'Web Development'
  },
  {
    id: 'cout-site-ecommerce',
    title: lang === 'fr'
      ? 'Combien coûte un site e-commerce en 2025 ? Décryptage complet'
      : 'How much does an e-commerce site cost in 2025? Complete breakdown',
    excerpt: lang === 'fr'
      ? 'Analyse détaillée des coûts de création d\'une boutique en ligne : de la solution simple aux projets sur mesure.'
      : 'Detailed analysis of the costs of creating an online store: from simple solutions to custom projects.',
    image: '/images/articles/ecommerce.webp',
    date: lang === 'fr' ? '10 Mars 2025' : 'March 10, 2025',
    category: 'web-dev',
    categoryLabel: lang === 'fr' ? 'E-commerce' : 'E-commerce'
  },
  {
    id: 'checklist-seo',
    title: lang === 'fr'
      ? 'Checklist SEO technique avant de lancer votre site web'
      : 'Technical SEO checklist before launching your website',
    excerpt: lang === 'fr'
      ? 'Tous les points essentiels à vérifier pour optimiser le référencement de votre site avant sa mise en ligne.'
      : 'All essential points to check to optimize your site\'s SEO before going live.',
    image: '/images/articles/seo-checklist.webp',
    date: lang === 'fr' ? '5 Mars 2025' : 'March 5, 2025',
    category: 'marketing',
    categoryLabel: 'SEO'
  },
  {
    id: 'erreurs-refonte',
    title: lang === 'fr'
      ? '5 erreurs fréquentes à éviter lors de la refonte d\'un site internet'
      : '5 common mistakes to avoid when redesigning a website',
    excerpt: lang === 'fr'
      ? 'Évitez les pièges courants lors de la refonte de votre site web et assurez le succès de votre projet.'
      : 'Avoid common pitfalls when redesigning your website and ensure the success of your project.',
    image: '/images/articles/refonte-web.webp',
    date: lang === 'fr' ? '1 Mars 2025' : 'March 1, 2025',
    category: 'web-dev',
    categoryLabel: lang === 'fr' ? 'Refonte Web' : 'Web Redesign'
  },
  {
    id: 'site-responsive',
    title: lang === 'fr'
      ? 'Pourquoi un site web responsive est indispensable en 2025 ?'
      : 'Why is a responsive website essential in 2025?',
    excerpt: lang === 'fr'
      ? 'L\'importance d\'un site adapté aux mobiles et son impact sur le SEO et les conversions en 2025.'
      : 'The importance of a mobile-friendly site and its impact on SEO and conversions in 2025.',
    image: '/images/articles/responsive.webp',
    date: lang === 'fr' ? '25 Février 2025' : 'February 25, 2025',
    category: 'web-dev',
    categoryLabel: lang === 'fr' ? 'Design Web' : 'Web Design'
  },

  // Nouveaux articles Web Development
  {
    id: 'ia-developpement-web',
    title: lang === 'fr'
      ? 'IA et développement web : Comment l\'intelligence artificielle transforme la création de sites'
      : 'AI and web development: How artificial intelligence is transforming website creation',
    excerpt: lang === 'fr'
      ? 'Découvrez comment l\'IA révolutionne le développement web avec des outils comme GitHub Copilot, ChatGPT et les générateurs de code automatiques.'
      : 'Discover how AI is revolutionizing web development with tools like GitHub Copilot, ChatGPT and automatic code generators.',
    image: '/images/articles/ia-dev.webp',
    date: lang === 'fr' ? '20 Mars 2025' : 'March 20, 2025',
    category: 'web-dev',
    categoryLabel: lang === 'fr' ? 'Intelligence Artificielle' : 'Artificial Intelligence'
  },
  {
    id: 'webassembly-2025',
    title: lang === 'fr'
      ? 'WebAssembly en 2025 : Le futur du développement web haute performance'
      : 'WebAssembly in 2025: The future of high-performance web development',
    excerpt: lang === 'fr'
      ? 'WebAssembly permet d\'exécuter du code proche du natif dans le navigateur. Découvrez ses cas d\'usage et comment l\'intégrer.'
      : 'WebAssembly enables near-native code execution in the browser. Discover its use cases and how to integrate it.',
    image: '/images/articles/webassembly.webp',
    date: lang === 'fr' ? '18 Mars 2025' : 'March 18, 2025',
    category: 'web-dev',
    categoryLabel: lang === 'fr' ? 'Performance' : 'Performance'
  },
  {
    id: 'jamstack-vs-traditionnel',
    title: lang === 'fr'
      ? 'Jamstack vs Architecture traditionnelle : Quel choix en 2025 ?'
      : 'Jamstack vs Traditional Architecture: Which choice in 2025?',
    excerpt: lang === 'fr'
      ? 'Comparaison approfondie entre Jamstack et architectures traditionnelles : performances, coûts, SEO et cas d\'usage.'
      : 'In-depth comparison between Jamstack and traditional architectures: performance, costs, SEO and use cases.',
    image: '/images/articles/jamstack.webp',
    date: lang === 'fr' ? '16 Mars 2025' : 'March 16, 2025',
    category: 'web-dev',
    categoryLabel: lang === 'fr' ? 'Architecture' : 'Architecture'
  },
  {
    id: 'accessibilite-wcag',
    title: lang === 'fr'
      ? 'Accessibilité web (WCAG 2.2) : Guide complet pour des sites inclusifs'
      : 'Web Accessibility (WCAG 2.2): Complete guide for inclusive websites',
    excerpt: lang === 'fr'
      ? 'Rendez votre site accessible à tous avec ce guide pratique des normes WCAG 2.2 : techniques, outils et bonnes pratiques.'
      : 'Make your site accessible to everyone with this practical guide to WCAG 2.2 standards: techniques, tools and best practices.',
    image: '/images/articles/accessibilite.webp',
    date: lang === 'fr' ? '14 Mars 2025' : 'March 14, 2025',
    category: 'web-dev',
    categoryLabel: lang === 'fr' ? 'Accessibilité' : 'Accessibility'
  },
  {
    id: 'progressive-web-apps',
    title: lang === 'fr'
      ? 'Progressive Web Apps (PWA) : Pourquoi votre site devrait en être une'
      : 'Progressive Web Apps (PWA): Why your site should be one',
    excerpt: lang === 'fr'
      ? 'Les PWA offrent une expérience app mobile depuis le navigateur. Découvrez leurs avantages et comment en créer une.'
      : 'PWAs offer a mobile app experience from the browser. Discover their benefits and how to create one.',
    image: '/images/articles/pwa.webp',
    date: lang === 'fr' ? '12 Mars 2025' : 'March 12, 2025',
    category: 'web-dev',
    categoryLabel: lang === 'fr' ? 'Mobile' : 'Mobile'
  },
  {
    id: 'cybersecurite-web-2025',
    title: lang === 'fr'
      ? 'Cybersécurité web en 2025 : Les menaces et protections essentielles'
      : 'Web cybersecurity in 2025: Essential threats and protections',
    excerpt: lang === 'fr'
      ? 'Protégez votre site des cyberattaques : injections SQL, XSS, CSRF, DDoS. Guide pratique des meilleures pratiques de sécurité.'
      : 'Protect your site from cyberattacks: SQL injections, XSS, CSRF, DDoS. Practical guide to security best practices.',
    image: '/images/articles/cybersecurite.webp',
    date: lang === 'fr' ? '8 Mars 2025' : 'March 8, 2025',
    category: 'web-dev',
    categoryLabel: lang === 'fr' ? 'Sécurité' : 'Security'
  },
  {
    id: 'api-first-development',
    title: lang === 'fr'
      ? 'API-first development : Construire des applications web modernes et évolutives'
      : 'API-first development: Building modern and scalable web applications',
    excerpt: lang === 'fr'
      ? 'L\'approche API-first révolutionne le développement web. Découvrez ses avantages et comment l\'implémenter avec REST et GraphQL.'
      : 'The API-first approach is revolutionizing web development. Discover its benefits and how to implement it with REST and GraphQL.',
    image: '/images/articles/api-first.webp',
    date: lang === 'fr' ? '6 Mars 2025' : 'March 6, 2025',
    category: 'web-dev',
    categoryLabel: lang === 'fr' ? 'API & Backend' : 'API & Backend'
  },

  // Nouveaux articles Marketing Digital
  {
    id: 'ia-marketing-digital',
    title: lang === 'fr'
      ? 'IA dans le marketing digital : ChatGPT et automatisation en 2025'
      : 'AI in digital marketing: ChatGPT and automation in 2025',
    excerpt: lang === 'fr'
      ? 'Comment utiliser l\'IA pour créer du contenu, automatiser vos campagnes et personnaliser l\'expérience client en 2025.'
      : 'How to use AI to create content, automate campaigns and personalize customer experience in 2025.',
    image: '/images/articles/automation-tools.webp',
    date: lang === 'fr' ? '22 Mars 2025' : 'March 22, 2025',
    category: 'marketing',
    categoryLabel: lang === 'fr' ? 'Intelligence Artificielle' : 'Artificial Intelligence'
  },
  {
    id: 'tiktok-marketing-entreprises',
    title: lang === 'fr'
      ? 'TikTok Marketing : Stratégies gagnantes pour les entreprises en 2025'
      : 'TikTok Marketing: Winning strategies for businesses in 2025',
    excerpt: lang === 'fr'
      ? 'TikTok n\'est plus réservé aux jeunes. Découvrez comment les entreprises utilisent TikTok pour générer des ventes et de la notoriété.'
      : 'TikTok is no longer just for young people. Discover how businesses use TikTok to generate sales and brand awareness.',
    image: '/images/articles/tiktok.webp',
    date: lang === 'fr' ? '21 Mars 2025' : 'March 21, 2025',
    category: 'marketing',
    categoryLabel: lang === 'fr' ? 'Réseaux Sociaux' : 'Social Media'
  },
  {
    id: 'marketing-influence-2025',
    title: lang === 'fr'
      ? 'Marketing d\'influence en 2025 : Comment choisir les bons partenaires'
      : 'Influencer marketing in 2025: How to choose the right partners',
    excerpt: lang === 'fr'
      ? 'Micro-influenceurs vs macro-influenceurs : stratégies, coûts, ROI et comment éviter les faux influenceurs.'
      : 'Micro-influencers vs macro-influencers: strategies, costs, ROI and how to avoid fake influencers.',
    image: '/images/articles/influenceurs.webp',
    date: lang === 'fr' ? '19 Mars 2025' : 'March 19, 2025',
    category: 'marketing',
    categoryLabel: lang === 'fr' ? 'Influence' : 'Influence'
  },
  {
    id: 'email-marketing-automation',
    title: lang === 'fr'
      ? 'Email marketing automation : Séquences qui convertissent en 2025'
      : 'Email marketing automation: Sequences that convert in 2025',
    excerpt: lang === 'fr'
      ? 'Créez des séquences d\'emails automatisées qui génèrent des ventes : welcome series, abandon de panier, nurturing.'
      : 'Create automated email sequences that generate sales: welcome series, cart abandonment, nurturing.',
    image: '/images/articles/email-marketing.webp',
    date: lang === 'fr' ? '17 Mars 2025' : 'March 17, 2025',
    category: 'marketing',
    categoryLabel: lang === 'fr' ? 'Email Marketing' : 'Email Marketing'
  },
  {
    id: 'google-analytics-4-guide',
    title: lang === 'fr'
      ? 'Google Analytics 4 (GA4) : Guide complet pour débutants'
      : 'Google Analytics 4 (GA4): Complete guide for beginners',
    excerpt: lang === 'fr'
      ? 'Maîtrisez GA4 : installation, configuration, rapports essentiels et analyses avancées pour optimiser votre site.'
      : 'Master GA4: installation, configuration, essential reports and advanced analytics to optimize your site.',
    image: '/images/articles/analytics-ga4.webp',
    date: lang === 'fr' ? '15 Mars 2025' : 'March 15, 2025',
    category: 'marketing',
    categoryLabel: lang === 'fr' ? 'Analytics' : 'Analytics'
  },
  {
    id: 'marketing-video-viral',
    title: lang === 'fr'
      ? 'Marketing vidéo : Créer du contenu viral sur les réseaux sociaux'
      : 'Video marketing: Creating viral content on social media',
    excerpt: lang === 'fr'
      ? 'Les secrets pour créer des vidéos qui cartonnent sur YouTube, Instagram Reels, TikTok et Facebook.'
      : 'The secrets to creating videos that blow up on YouTube, Instagram Reels, TikTok and Facebook.',
    image: '/images/articles/video-marketing.webp',
    date: lang === 'fr' ? '13 Mars 2025' : 'March 13, 2025',
    category: 'marketing',
    categoryLabel: lang === 'fr' ? 'Vidéo' : 'Video'
  },
  {
    id: 'seo-local-strategies',
    title: lang === 'fr'
      ? 'SEO local : Dominer les recherches géolocalisées en 2025'
      : 'Local SEO: Dominating geolocated searches in 2025',
    excerpt: lang === 'fr'
      ? 'Google My Business, avis clients, citations locales : le guide complet du référencement local pour attirer plus de clients.'
      : 'Google My Business, customer reviews, local citations: the complete local SEO guide to attract more customers.',
    image: '/images/articles/seo-local.webp',
    date: lang === 'fr' ? '11 Mars 2025' : 'March 11, 2025',
    category: 'marketing',
    categoryLabel: 'SEO Local'
  },
  {
    id: 'linkedin-b2b-marketing',
    title: lang === 'fr'
      ? 'LinkedIn B2B Marketing : Stratégies pour générer des leads qualifiés'
      : 'LinkedIn B2B Marketing: Strategies to generate qualified leads',
    excerpt: lang === 'fr'
      ? 'LinkedIn est le réseau B2B par excellence. Découvrez comment créer une stratégie efficace pour générer des leads qualifiés.'
      : 'LinkedIn is the B2B network par excellence. Discover how to create an effective strategy to generate qualified leads.',
    image: '/images/articles/linkedin-b2b.webp',
    date: lang === 'fr' ? '9 Mars 2025' : 'March 9, 2025',
    category: 'marketing',
    categoryLabel: lang === 'fr' ? 'LinkedIn' : 'LinkedIn'
  },
  {
    id: 'marketing-automation-tools',
    title: lang === 'fr'
      ? 'Marketing automation : Les meilleurs outils en 2025'
      : 'Marketing automation: The best tools in 2025',
    excerpt: lang === 'fr'
      ? 'Comparatif des meilleures plateformes de marketing automation : HubSpot, Mailchimp, ActiveCampaign, Brevo.'
      : 'Comparison of the best marketing automation platforms: HubSpot, Mailchimp, ActiveCampaign, Brevo.',
    image: '/images/articles/automation-tools.webp',
    date: lang === 'fr' ? '7 Mars 2025' : 'March 7, 2025',
    category: 'marketing',
    categoryLabel: lang === 'fr' ? 'Automation' : 'Automation'
  },
  {
    id: 'content-marketing-strategie',
    title: lang === 'fr'
      ? 'Content Marketing : Créer une stratégie de contenu performante'
      : 'Content Marketing: Creating a high-performance content strategy',
    excerpt: lang === 'fr'
      ? 'De la recherche de mots-clés à la création de contenu : comment élaborer une stratégie de content marketing qui génère du trafic.'
      : 'From keyword research to content creation: how to develop a content marketing strategy that generates traffic.',
    image: '/images/articles/content-marketing.webp',
    date: lang === 'fr' ? '4 Mars 2025' : 'March 4, 2025',
    category: 'marketing',
    categoryLabel: lang === 'fr' ? 'Content Marketing' : 'Content Marketing'
  },
  {
    id: 'meta-ads-optimisation',
    title: lang === 'fr'
      ? 'Publicité Meta Ads : Optimiser vos campagnes Facebook et Instagram'
      : 'Meta Ads advertising: Optimize your Facebook and Instagram campaigns',
    excerpt: lang === 'fr'
      ? 'Ciblage, budget, créatifs, A/B testing : le guide complet pour des campagnes Meta Ads rentables en 2025.'
      : 'Targeting, budget, creatives, A/B testing: the complete guide to profitable Meta Ads campaigns in 2025.',
    image: '/images/articles/meta-ads.webp',
    date: lang === 'fr' ? '2 Mars 2025' : 'March 2, 2025',
    category: 'marketing',
    categoryLabel: lang === 'fr' ? 'Publicité' : 'Advertising'
  },
  {
    id: 'voice-search-seo',
    title: lang === 'fr'
      ? 'Voice Search SEO : Optimiser pour la recherche vocale en 2025'
      : 'Voice Search SEO: Optimizing for voice search in 2025',
    excerpt: lang === 'fr'
      ? 'Avec Alexa, Siri et Google Assistant, la recherche vocale explose. Adaptez votre SEO pour ces nouvelles requêtes.'
      : 'With Alexa, Siri and Google Assistant, voice search is exploding. Adapt your SEO for these new queries.',
    image: '/images/articles/voice-search.webp',
    date: lang === 'fr' ? '28 Février 2025' : 'February 28, 2025',
    category: 'marketing',
    categoryLabel: lang === 'fr' ? 'SEO Vocal' : 'Voice SEO'
  }
];

export const getCategories = (lang) => [
  {
    id: 'all',
    label: lang === 'fr' ? 'Tous les articles' : 'All articles'
  },
  {
    id: 'web-dev',
    label: lang === 'fr' ? 'Développement Web' : 'Web Development'
  },
  {
    id: 'marketing',
    label: lang === 'fr' ? 'Marketing Digital' : 'Digital Marketing'
  }
];
