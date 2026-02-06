import React from 'react';
import { useLanguage } from '../../LanguageContext';
import ArticleLayout from '../../components/ArticleLayout';
import ArticleCTA from '../../components/ArticleCTA';

export default function GoogleAnalytics4Guide() {
  const { lang } = useLanguage();

  const title = lang === 'fr'
    ? 'Google Analytics 4 (GA4) : Guide complet pour débutants'
    : 'Google Analytics 4 (GA4): Complete guide for beginners';

  const date = lang === 'fr' ? '15 Mars 2025' : 'March 15, 2025';
  const category = lang === 'fr' ? 'Analytics' : 'Analytics';
  const image = '/images/articles/analytics-ga4.webp';

  return (
    <ArticleLayout title={title} date={date} category={category} image={image}>
      <div className="article-content text-gray-300">
        {lang === 'fr' ? (
          <>
            <p className="lead text-xl mb-8">
              Google Analytics 4 a remplacé Universal Analytics en juillet 2023. En 2025, maîtriser GA4 est devenu indispensable pour tout professionnel du marketing digital. Ce guide vous explique tout de A à Z.
            </p>

            {/* CTA Top */}
            <ArticleCTA category="marketing" position="top" />

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🆕 GA4 vs Universal Analytics : Les changements majeurs</h2>

            <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-blue-400 mb-3">🔄 Principales différences :</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Modèle basé sur les événements</strong> (pas les sessions)</li>
                <li><strong>Suivi cross-platform</strong> : web + app dans une seule propriété</li>
                <li><strong>Machine Learning intégré</strong> : prédictions automatiques</li>
                <li><strong>Respect de la vie privée</strong> : cookieless tracking prêt</li>
                <li><strong>BigQuery gratuit</strong> : export illimité de données brutes</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🚀 Installation et configuration GA4</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Étape 1 : Créer une propriété GA4</h3>
            <ol className="list-decimal list-inside mb-6 space-y-2">
              <li>Allez sur <strong>analytics.google.com</strong></li>
              <li>Admin → Créer une propriété</li>
              <li>Nom de la propriété → Fuseau horaire</li>
              <li>Créer un flux de données (Web, iOS ou Android)</li>
            </ol>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Étape 2 : Installer la balise gtag.js</h3>
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <pre className="text-sm overflow-x-auto">
{`<!-- Ajoutez dans le <head> de votre site -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>`}
              </pre>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Étape 3 : Configuration recommandée (WordPress)</h3>
            <p className="mb-6">
              Utilisez un plugin comme <strong>Site Kit by Google</strong> ou <strong>MonsterInsights</strong> :
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Installation en 1 clic</li>
              <li>Configuration automatique</li>
              <li>Suivi e-commerce intégré</li>
              <li>Rapports dans le dashboard WP</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">📊 Les rapports essentiels GA4</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Rapport d'acquisition</h3>
            <p className="mb-6">
              <strong>Où viennent vos visiteurs ?</strong>
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>Organic Search</strong> : visiteurs depuis Google/Bing</li>
              <li><strong>Direct</strong> : URL tapée directement</li>
              <li><strong>Social</strong> : depuis réseaux sociaux</li>
              <li><strong>Referral</strong> : depuis d'autres sites</li>
              <li><strong>Paid Search</strong> : publicités Google Ads</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Rapport d'engagement</h3>
            <p className="mb-6">
              <strong>Que font les utilisateurs sur votre site ?</strong>
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Pages les plus visitées</li>
              <li>Temps d'engagement moyen</li>
              <li>Événements déclenchés</li>
              <li>Taux de rebond</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. Rapport de conversion</h3>
            <p className="mb-6">
              <strong>Vos objectifs sont-ils atteints ?</strong>
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Conversions par source</li>
              <li>Valeur des conversions</li>
              <li>Parcours de conversion</li>
              <li>Attribution multi-touch</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🎯 Configurer les événements personnalisés</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Événements recommandés pour e-commerce</h3>
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <pre className="text-sm overflow-x-auto">
{`// Ajouter au panier
gtag('event', 'add_to_cart', {
  currency: 'EUR',
  value: 29.99,
  items: [{
    item_id: 'SKU_12345',
    item_name: 'T-shirt',
    quantity: 1,
    price: 29.99
  }]
});

// Achat complété
gtag('event', 'purchase', {
  transaction_id: 'T12345',
  value: 59.98,
  currency: 'EUR',
  items: [...]
});`}
              </pre>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Événements pour génération de leads</h3>
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <pre className="text-sm overflow-x-auto">
{`// Formulaire soumis
gtag('event', 'generate_lead', {
  currency: 'EUR',
  value: 100.00
});

// Clic sur bouton CTA
gtag('event', 'select_promotion', {
  promotion_name: 'Devis gratuit'
});`}
              </pre>
            </div>

            {/* CTA Middle */}
            <ArticleCTA category="marketing" position="middle" />

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🔮 Insights prédictifs GA4</h2>

            <p className="mb-6">
              GA4 utilise le Machine Learning pour prédire :
            </p>

            <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-purple-400 mb-3">🤖 Métriques prédictives :</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Probabilité d'achat</strong> : % qu'un utilisateur achète dans les 7 jours</li>
                <li><strong>Probabilité de désabonnement</strong> : % qu'un utilisateur ne revienne pas</li>
                <li><strong>Revenus prédits</strong> : CA attendu d'un utilisateur sur 28 jours</li>
              </ul>
              <p className="mt-4 text-sm">
                <strong>Cas d'usage :</strong> Créez des audiences pour remarketing basées sur la probabilité d'achat élevée (→ ROI publicitaire augmenté de 30-50%).
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">📈 KPIs à suivre absolument</h2>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-white mb-4">Métriques clés par objectif :</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold text-white mb-2">🛍️ E-commerce :</h5>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Taux de conversion e-commerce</li>
                    <li>Valeur moyenne des commandes (AOV)</li>
                    <li>Taux d'abandon de panier</li>
                    <li>Revenus par source/médium</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-white mb-2">📝 Génération de leads :</h5>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Taux de soumission de formulaire</li>
                    <li>Coût par lead (CPL)</li>
                    <li>Qualité des leads par source</li>
                    <li>Temps moyen avant conversion</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-white mb-2">📰 Contenu/Blog :</h5>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Pages vues par session</li>
                    <li>Temps d'engagement moyen</li>
                    <li>Taux de rebond par page</li>
                    <li>Profondeur de défilement</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🔗 Intégrations recommandées</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-bold text-white mb-2">🎯 Google Ads</h4>
                <p className="text-sm">Liez GA4 à Ads pour optimiser automatiquement vos campagnes avec Smart Bidding.</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-bold text-white mb-2">🔍 Search Console</h4>
                <p className="text-sm">Analysez vos performances SEO : requêtes, positions, CTR.</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-bold text-white mb-2">📊 BigQuery</h4>
                <p className="text-sm">Exportez vos données brutes pour analyses avancées et dashboards personnalisés.</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-bold text-white mb-2">📧 Mailchimp/HubSpot</h4>
                <p className="text-sm">Synchronisez vos audiences GA4 avec vos outils d'email marketing.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">⚠️ Erreurs courantes à éviter</h2>

            <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-red-400 mb-3">❌ Pièges fréquents :</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Ne pas configurer les conversions</strong> : définissez vos objectifs clés dès le départ</li>
                <li><strong>Ignorer les filtres</strong> : excluez votre propre trafic et celui des bots</li>
                <li><strong>Oublier l'enhanced measurement</strong> : activez le suivi automatique (scroll, téléchargements)</li>
                <li><strong>Données non vérifiées</strong> : testez avec Google Tag Assistant</li>
                <li><strong>Pas de sauvegarde</strong> : exportez régulièrement vos données historiques</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">📱 GA4 Mobile App + Web</h2>
            <p className="mb-6">
              GA4 permet de suivre web ET app dans une seule propriété :
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Vue unifiée du parcours utilisateur</li>
              <li>Attribution cross-platform</li>
              <li>Audiences partagées web/app</li>
              <li>Remarketing cohérent</li>
            </ul>

            <div className="bg-primary-red/10 border border-primary-red/30 rounded-lg p-6 mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">🎯 Conclusion</h3>
              <p className="mb-4">
                GA4 n'est plus optionnel : c'est LA solution analytics de Google. Sa courbe d'apprentissage est raide, mais les bénéfices sont immenses : prédictions ML, suivi cross-platform, respect de la vie privée.
              </p>
              <p className="mb-0">
                <strong>Plan d'action :</strong> Installez GA4 aujourd'hui (même si vous gardez UA temporairement), configurez 3-5 conversions clés, créez vos rapports personnalisés. Dans 3 mois, vous maîtriserez l'outil indispensable du marketing digital 2025.
              </p>
            </div>
          </>
        ) : (
          <>
            <p className="lead text-xl mb-8">
              Google Analytics 4 replaced Universal Analytics in July 2023. In 2025, mastering GA4 has become essential for any digital marketing professional. This guide explains everything from A to Z.
            </p>

            <div className="bg-primary-red/10 border border-primary-red/30 rounded-lg p-6 mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">🎯 Conclusion</h3>
              <p className="mb-4">
                GA4 is no longer optional: it's THE Google analytics solution. Its learning curve is steep, but the benefits are immense: ML predictions, cross-platform tracking, privacy respect.
              </p>
              <p className="mb-0">
                <strong>Action plan:</strong> Install GA4 today (even if you temporarily keep UA), configure 3-5 key conversions, create your custom reports. In 3 months, you'll master the essential tool of digital marketing 2025.
              </p>
            </div>
          </>
        )}
      </div>
    </ArticleLayout>
  );
}
