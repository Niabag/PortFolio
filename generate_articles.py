#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script pour générer automatiquement les articles manquants du blog
"""

import os

# Liste des articles à créer avec leurs métadonnées
articles_data = [
    {
        'id': 'api-first-development',
        'component': 'ApiFirstDevelopment',
        'category_fr': 'API & Backend',
        'category_en': 'API & Backend',
        'date_fr': '6 Mars 2025',
        'date_en': 'March 6, 2025',
        'title_fr': 'API-first development : Construire des applications web modernes et évolutives',
        'title_en': 'API-first development: Building modern and scalable web applications',
        'excerpt_fr': 'L\'approche API-first révolutionne le développement web. Découvrez comment concevoir des APIs REST et GraphQL évolutives, découpler frontend/backend et accélérer vos projets.',
        'excerpt_en': 'The API-first approach revolutionizes web development. Discover how to design scalable REST and GraphQL APIs, decouple frontend/backend and accelerate your projects.',
        'image': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&q=80',
        'keywords': 'API-first, REST API, GraphQL, architecture microservices, backend development, API design'
    },
    {
        'id': 'marketing-influence-2025',
        'component': 'MarketingInfluence2025',
        'category_fr': 'Influence',
        'category_en': 'Influence',
        'date_fr': '19 Mars 2025',
        'date_en': 'March 19, 2025',
        'title_fr': 'Marketing d\'influence en 2025 : Comment choisir les bons partenaires',
        'title_en': 'Influencer marketing in 2025: How to choose the right partners',
        'excerpt_fr': 'Micro vs macro-influenceurs : stratégies, coûts, ROI et comment éviter les faux influenceurs. Guide complet pour réussir votre marketing d\'influence.',
        'excerpt_en': 'Micro vs macro-influencers: strategies, costs, ROI and how to avoid fake influencers. Complete guide to succeed in influencer marketing.',
        'image': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop&q=80',
        'keywords': 'marketing influence, influenceurs, micro-influenceurs, Instagram, TikTok, ROI influence, stratégie influence'
    },
    {
        'id': 'email-marketing-automation',
        'component': 'EmailMarketingAutomation',
        'category_fr': 'Email Marketing',
        'category_en': 'Email Marketing',
        'date_fr': '17 Mars 2025',
        'date_en': 'March 17, 2025',
        'title_fr': 'Email marketing automation : Séquences qui convertissent en 2025',
        'title_en': 'Email marketing automation: Sequences that convert in 2025',
        'excerpt_fr': 'Créez des séquences d\'emails automatisées performantes : welcome series, abandon de panier, lead nurturing. Stratégies, outils et exemples concrets.',
        'excerpt_en': 'Create high-performing automated email sequences: welcome series, cart abandonment, lead nurturing. Strategies, tools and concrete examples.',
        'image': 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=500&fit=crop&q=80',
        'keywords': 'email marketing, automation email, séquences emails, abandon panier, lead nurturing, Mailchimp, Brevo'
    },
    {
        'id': 'marketing-video-viral',
        'component': 'MarketingVideoViral',
        'category_fr': 'Vidéo',
        'category_en': 'Video',
        'date_fr': '13 Mars 2025',
        'date_en': 'March 13, 2025',
        'title_fr': 'Marketing vidéo : Créer du contenu viral sur les réseaux sociaux',
        'title_en': 'Video marketing: Creating viral content on social media',
        'excerpt_fr': 'Les secrets pour créer des vidéos qui cartonnent sur YouTube, Instagram Reels, TikTok et Facebook. Formats, hooks, montage et distribution.',
        'excerpt_en': 'The secrets to creating videos that blow up on YouTube, Instagram Reels, TikTok and Facebook. Formats, hooks, editing and distribution.',
        'image': 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=500&fit=crop&q=80',
        'keywords': 'marketing vidéo, contenu viral, YouTube, TikTok, Instagram Reels, vidéo sociale, engagement vidéo'
    },
    {
        'id': 'linkedin-b2b-marketing',
        'component': 'LinkedinB2BMarketing',
        'category_fr': 'LinkedIn',
        'category_en': 'LinkedIn',
        'date_fr': '9 Mars 2025',
        'date_en': 'March 9, 2025',
        'title_fr': 'LinkedIn B2B Marketing : Stratégies pour générer des leads qualifiés',
        'title_en': 'LinkedIn B2B Marketing: Strategies to generate qualified leads',
        'excerpt_fr': 'Maîtrisez LinkedIn pour le B2B : optimisation profil, content strategy, LinkedIn Ads, Sales Navigator et prospection efficace.',
        'excerpt_en': 'Master LinkedIn for B2B: profile optimization, content strategy, LinkedIn Ads, Sales Navigator and effective prospecting.',
        'image': 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&h=500&fit=crop&q=80',
        'keywords': 'LinkedIn B2B, génération leads, LinkedIn Ads, Sales Navigator, prospection LinkedIn, marketing B2B'
    },
    {
        'id': 'marketing-automation-tools',
        'component': 'MarketingAutomationTools',
        'category_fr': 'Automation',
        'category_en': 'Automation',
        'date_fr': '7 Mars 2025',
        'date_en': 'March 7, 2025',
        'title_fr': 'Marketing automation : Les meilleurs outils en 2025',
        'title_en': 'Marketing automation: The best tools in 2025',
        'excerpt_fr': 'Comparatif complet des meilleures plateformes de marketing automation : HubSpot, Mailchimp, ActiveCampaign, Brevo. Fonctionnalités, prix et choix.',
        'excerpt_en': 'Complete comparison of the best marketing automation platforms: HubSpot, Mailchimp, ActiveCampaign, Brevo. Features, pricing and choice.',
        'image': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
        'keywords': 'marketing automation, HubSpot, Mailchimp, ActiveCampaign, Brevo, CRM, automation tools'
    },
    {
        'id': 'content-marketing-strategie',
        'component': 'ContentMarketingStrategie',
        'category_fr': 'Content Marketing',
        'category_en': 'Content Marketing',
        'date_fr': '4 Mars 2025',
        'date_en': 'March 4, 2025',
        'title_fr': 'Content Marketing : Créer une stratégie de contenu performante',
        'title_en': 'Content Marketing: Creating a high-performance content strategy',
        'excerpt_fr': 'De la recherche de mots-clés à la création de contenu : guide complet pour élaborer une stratégie de content marketing qui génère du trafic et des conversions.',
        'excerpt_en': 'From keyword research to content creation: complete guide to developing a content marketing strategy that generates traffic and conversions.',
        'image': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&q=80',
        'keywords': 'content marketing, stratégie contenu, SEO content, calendrier éditorial, rédaction web, inbound marketing'
    },
    {
        'id': 'meta-ads-optimisation',
        'component': 'MetaAdsOptimisation',
        'category_fr': 'Publicité',
        'category_en': 'Advertising',
        'date_fr': '2 Mars 2025',
        'date_en': 'March 2, 2025',
        'title_fr': 'Publicité Meta Ads : Optimiser vos campagnes Facebook et Instagram',
        'title_en': 'Meta Ads advertising: Optimize your Facebook and Instagram campaigns',
        'excerpt_fr': 'Ciblage, budget, créatifs, A/B testing : le guide complet pour créer des campagnes Meta Ads (Facebook/Instagram) rentables en 2025.',
        'excerpt_en': 'Targeting, budget, creatives, A/B testing: the complete guide to creating profitable Meta Ads (Facebook/Instagram) campaigns in 2025.',
        'image': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop&q=80',
        'keywords': 'Meta Ads, Facebook Ads, Instagram Ads, publicité sociale, ciblage, conversion ads, retargeting'
    },
    {
        'id': 'voice-search-seo',
        'component': 'VoiceSearchSEO',
        'category_fr': 'SEO Vocal',
        'category_en': 'Voice SEO',
        'date_fr': '28 Février 2025',
        'date_en': 'February 28, 2025',
        'title_fr': 'Voice Search SEO : Optimiser pour la recherche vocale en 2025',
        'title_en': 'Voice Search SEO: Optimizing for voice search in 2025',
        'excerpt_fr': 'Avec Alexa, Siri et Google Assistant, la recherche vocale explose. Découvrez comment optimiser votre contenu pour ces requêtes conversationnelles.',
        'excerpt_en': 'With Alexa, Siri and Google Assistant, voice search is exploding. Discover how to optimize your content for these conversational queries.',
        'image': 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=500&fit=crop&q=80',
        'keywords': 'voice search, recherche vocale, SEO vocal, Alexa, Google Assistant, Siri, featured snippets'
    }
]

print("Articles à générer:", len(articles_data))
for article in articles_data:
    print(f"  - {article['id']}")
