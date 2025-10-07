import React from 'react';
import { useLanguage } from '../../LanguageContext';
import ArticleLayout from '../../components/ArticleLayout';

export default function TikTokMarketing() {
  const { lang } = useLanguage();

  const title = lang === 'fr'
    ? 'TikTok Marketing : Stratégies gagnantes pour les entreprises en 2025'
    : 'TikTok Marketing: Winning strategies for businesses in 2025';

  const date = lang === 'fr' ? '21 Mars 2025' : 'March 21, 2025';
  const category = lang === 'fr' ? 'Réseaux Sociaux' : 'Social Media';
  const image = '/images/articles/tiktok.webp';

  return (
    <ArticleLayout title={title} date={date} category={category} image={image}>
      <div className="article-content text-gray-300">
        {lang === 'fr' ? (
          <>
            <p className="lead text-xl mb-8">
              TikTok n'est plus réservé aux danses virales et aux ados. En 2025, c'est une plateforme marketing incontournable avec 1,7 milliard d'utilisateurs actifs et un taux d'engagement supérieur à Instagram et Facebook.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">📊 Pourquoi TikTok pour votre entreprise en 2025 ?</h2>

            <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-pink-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-pink-400 mb-3">🚀 Chiffres clés TikTok 2025 :</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>1,7 milliard d'utilisateurs actifs</strong> dans le monde</li>
                <li><strong>52 minutes</strong> de temps passé quotidien en moyenne</li>
                <li><strong>38% des utilisateurs</strong> ont entre 25 et 44 ans (audience professionnelle)</li>
                <li><strong>67% de taux d'engagement</strong> sur les vidéos (vs 3% Instagram)</li>
                <li><strong>3x plus de conversions</strong> que les publicités Facebook en moyenne</li>
                <li><strong>TikTok Shop</strong> : 20 milliards $ de ventes en 2024</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🎯 Stratégies TikTok qui fonctionnent</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Le contenu éducatif court (Edutainment)</h3>
            <p className="mb-6">
              La formule gagnante en 2025 : <strong>éduquer + divertir</strong> en moins de 60 secondes.
            </p>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-bold text-white mb-3">Formats qui cartonnent :</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>"3 choses que vous ne saviez pas sur..."</strong> (liste rapide)</li>
                <li><strong>"Avant/Après"</strong> (transformation visuelle)</li>
                <li><strong>"POV: Quand tu..."</strong> (storytelling immersif)</li>
                <li><strong>"Voici pourquoi..."</strong> (explication expert)</li>
                <li><strong>"Je vous montre comment..."</strong> (tutoriel pratique)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. L'authenticité avant la perfection</h3>
            <p className="mb-6">
              Sur TikTok, le contenu <strong>"fait maison"</strong> performe mieux que les productions ultra-léchées :
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Filmez avec votre smartphone, pas besoin de caméra pro</li>
              <li>Montrez les coulisses de votre entreprise</li>
              <li>Parlez face caméra sans script parfait</li>
              <li>Assumez les imperfections (elles humanisent votre marque)</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. Le "Hook" des 3 premières secondes</h3>
            <p className="mb-6">
              Vous avez <strong>3 secondes maximum</strong> pour capter l'attention. Techniques efficaces :
            </p>
            <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-bold text-blue-400 mb-3">🎣 Hooks qui accrochent :</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>"Arrête de scroller si..."</strong></li>
                <li><strong>"Je gagne [X]€/mois et voici comment..."</strong></li>
                <li><strong>"Cette astuce a changé ma vie..."</strong></li>
                <li><strong>"Personne ne vous dit ça sur..."</strong></li>
                <li><strong>"J'ai testé pendant 30 jours..."</strong></li>
                <li><strong>Question directe</strong> : "Vous savez pourquoi...?"</li>
                <li><strong>Chiffre choquant</strong> : "97% des gens ignorent..."</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">4. Les tendances et sounds</h3>
            <p className="mb-6">
              Surfer sur les tendances multiplie votre portée organique par 10 :
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Consultez l'onglet <strong>"Découvrir"</strong> quotidiennement</li>
              <li>Utilisez les <strong>sounds trending</strong> dans vos vidéos</li>
              <li>Adaptez les challenges populaires à votre niche</li>
              <li>Réagissez rapidement aux actualités (newsjacking)</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">💰 TikTok Ads : Comment réussir vos campagnes</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Types de publicités TikTok</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-gray-800/50 border-l-4 border-primary-red p-4">
                <h4 className="font-bold text-white mb-2">In-Feed Ads</h4>
                <p>Vidéos natives dans le fil "Pour Toi". Budget minimum : 50€/jour. ROI élevé pour e-commerce.</p>
              </div>
              <div className="bg-gray-800/50 border-l-4 border-primary-red p-4">
                <h4 className="font-bold text-white mb-2">Spark Ads</h4>
                <p>Boostez vos vidéos organiques performantes. Meilleur taux d'engagement que les ads classiques.</p>
              </div>
              <div className="bg-gray-800/50 border-l-4 border-primary-red p-4">
                <h4 className="font-bold text-white mb-2">TopView Ads</h4>
                <p>Première vidéo affichée à l'ouverture de l'app. Premium. Budget : 2000€+ par jour.</p>
              </div>
              <div className="bg-gray-800/50 border-l-4 border-primary-red p-4">
                <h4 className="font-bold text-white mb-2">Branded Hashtag Challenge</h4>
                <p>Créez un challenge de marque. Viral. Budget : 10 000€ à 100 000€.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Best practices publicité TikTok</h3>
            <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-green-400 mb-3">✅ À faire :</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Créez des vidéos <strong>verticales 9:16</strong> exclusivement</li>
                <li>Intégrez un <strong>CTA clair</strong> dans les 5 premières secondes</li>
                <li>Testez <strong>minimum 5 créatifs différents</strong> par campagne</li>
                <li>Ciblez large au début, TikTok optimise automatiquement</li>
                <li>Budget recommandé : 500-1000€ pour tester une campagne</li>
                <li>Laissez l'algorithme apprendre pendant <strong>48-72h</strong></li>
              </ul>
            </div>

            <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-red-400 mb-3">❌ À éviter :</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Recycler vos pubs Instagram/Facebook (ça ne marche pas sur TikTok)</li>
                <li>Logo ou watermark trop visible (baisse l'engagement)</li>
                <li>Texte à l'écran difficile à lire en 1 seconde</li>
                <li>Voix off robotique ou musique de stock</li>
                <li>Arrêter une campagne avant 48h (pas assez de données)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🛍️ TikTok Shop : Vendez directement sur TikTok</h2>

            <p className="mb-6">
              TikTok Shop permet de vendre sans quitter l'application. Opportunité énorme en 2025 :
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>Live shopping</strong> : vendez en direct avec des rabais flash</li>
              <li><strong>Product showcases</strong> : intégrez des produits dans vos vidéos</li>
              <li><strong>Affiliate marketing</strong> : collaborez avec des créateurs pour vendre vos produits</li>
              <li><strong>Panier intégré</strong> : achat en 2 clics sans redirection</li>
            </ul>

            <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-purple-400 mb-3">💡 Success story :</h4>
              <p>
                Une PME de cosmétiques a généré <strong>150 000€ de CA en 3 mois</strong> sur TikTok Shop, 
                avec seulement 15 000 followers. Secret : lives shopping 2x/semaine + vidéos "Before/After" quotidiennes.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">📅 Plan d'action TikTok 30 jours</h2>

            <div className="space-y-4">
              <div className="bg-gray-800/50 border-l-4 border-primary-red p-4">
                <h4 className="font-bold text-white mb-2">Semaine 1 : Setup et recherche</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Créer compte TikTok Business</li>
                  <li>Analyser 20 comptes concurrents performants</li>
                  <li>Identifier 10 sounds trending dans votre niche</li>
                  <li>Définir votre ligne éditoriale</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 border-l-4 border-primary-red p-4">
                <h4 className="font-bold text-white mb-2">Semaine 2-3 : Production de contenu</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Poster 1-2 vidéos par jour minimum</li>
                  <li>Tester différents formats (éducatif, divertissant, behind-the-scenes)</li>
                  <li>Engager avec votre communauté (répondre aux commentaires)</li>
                  <li>Faire des duets avec des créateurs populaires</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 border-l-4 border-primary-red p-4">
                <h4 className="font-bold text-white mb-2">Semaine 4 : Analyse et optimisation</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Analyser vos vidéos les plus performantes</li>
                  <li>Doubler sur les formats qui marchent</li>
                  <li>Lancer première campagne publicitaire test (500€)</li>
                  <li>Collaborer avec un micro-influenceur (1000-10 000 followers)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🎯 KPIs à suivre</h2>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-white mb-4">Métriques essentielles :</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Taux de complétion</strong> : % qui regardent jusqu'au bout (objectif : >50%)</li>
                <li><strong>Engagement rate</strong> : (likes + comments + shares) / vues (objectif : >5%)</li>
                <li><strong>CTR</strong> : taux de clic vers votre profil/site (objectif : >2%)</li>
                <li><strong>Taux de conversion</strong> : ventes / visiteurs depuis TikTok</li>
                <li><strong>CPM</strong> : coût pour 1000 impressions (moyenne : 3-10€)</li>
                <li><strong>ROAS</strong> : retour sur dépenses publicitaires (objectif : >3)</li>
              </ul>
            </div>

            <div className="bg-primary-red/10 border border-primary-red/30 rounded-lg p-6 mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">🚀 Conclusion</h3>
              <p className="mb-4">
                TikTok n'est plus une "mode" mais une plateforme marketing essentielle en 2025. Avec un taux d'engagement record et un coût pub encore accessible, c'est le moment idéal pour vous lancer.
              </p>
              <p className="mb-0">
                <strong>Action immédiate :</strong> Créez votre compte TikTok Business aujourd'hui, postez votre première vidéo demain. L'algorithme TikTok récompense la régularité et l'authenticité, pas la perfection. Start now!
              </p>
            </div>
          </>
        ) : (
          <>
            <p className="lead text-xl mb-8">
              TikTok is no longer reserved for viral dances and teens. In 2025, it's an essential marketing platform with 1.7 billion active users and an engagement rate higher than Instagram and Facebook.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">📊 Why TikTok for Your Business in 2025?</h2>

            <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-pink-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-pink-400 mb-3">🚀 TikTok 2025 Key Stats:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>1.7 billion active users</strong> worldwide</li>
                <li><strong>52 minutes</strong> average daily time spent</li>
                <li><strong>38% of users</strong> are between 25-44 years old (professional audience)</li>
                <li><strong>67% engagement rate</strong> on videos (vs 3% Instagram)</li>
                <li><strong>3x more conversions</strong> than Facebook ads on average</li>
                <li><strong>TikTok Shop</strong>: $20 billion in sales in 2024</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🎯 TikTok Strategies That Work</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Short Educational Content (Edutainment)</h3>
            <p className="mb-6">
              The winning formula in 2025: <strong>educate + entertain</strong> in under 60 seconds.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Authenticity Over Perfection</h3>
            <p className="mb-6">
              On TikTok, <strong>"homemade"</strong> content performs better than ultra-polished productions.
            </p>

            <div className="bg-primary-red/10 border border-primary-red/30 rounded-lg p-6 mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">🚀 Conclusion</h3>
              <p className="mb-4">
                TikTok is no longer a "trend" but an essential marketing platform in 2025. With record engagement rates and still-accessible ad costs, now is the perfect time to launch.
              </p>
              <p className="mb-0">
                <strong>Immediate action:</strong> Create your TikTok Business account today, post your first video tomorrow. The TikTok algorithm rewards consistency and authenticity, not perfection. Start now!
              </p>
            </div>
          </>
        )}
      </div>
    </ArticleLayout>
  );
}
