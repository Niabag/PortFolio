import React from 'react';
import { useLanguage } from '../../LanguageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function ChecklistSEO() {
  const { lang } = useLanguage();

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-20">
        <article className="py-20 bg-transparent text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary-red px-4 py-2 rounded-full text-sm font-semibold">
                  SEO
                </span>
                <span className="text-gray-400">5 Mars 2025</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {lang === 'fr' ? 'Checklist SEO technique avant de lancer votre site web' : 'Technical SEO checklist before launching your website'}
              </h1>
              
              <img
                src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&h=600&fit=crop&q=80"
                alt="Checklist SEO"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 relative z-10"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                {lang === 'fr'
                  ? "Avant de mettre votre site en ligne, assurez-vous que tous ces éléments SEO sont en place pour maximiser vos chances d'être bien référencé sur Google."
                  : 'Before putting your site online, make sure all these SEO essentials are in place to maximize your chances of ranking well on Google.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Optimisation technique (vitesse, mobile-friendly, HTTPS)' : 'Technical optimization (speed, mobile-friendly, HTTPS)'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr' ? 'Les fondamentaux techniques sont essentiels pour le SEO moderne :' : 'Technical fundamentals are essential for modern SEO:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Vitesse de chargement :' : 'Loading speed:'}</strong> {lang === 'fr' ? 'Visez moins de 3 secondes (testez avec PageSpeed Insights)' : 'Aim for under 3 seconds (test with PageSpeed Insights)'}</li>
                <li><strong className="text-white">HTTPS</strong> {lang === 'fr' ? 'activé : Certificat SSL obligatoire pour la sécurité et le SEO' : 'enabled: SSL certificate required for security and SEO'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Mobile-friendly :' : 'Mobile-friendly:'}</strong> {lang === 'fr' ? 'Design responsive testé sur tous les appareils' : 'Responsive design tested on all devices'}</li>
                <li><strong className="text-white">Compression images :</strong> Format WebP, lazy loading activé</li>
                <li><strong className="text-white">Minification :</strong> CSS, JavaScript et HTML compressés</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Structure du site et maillage interne' : 'Site structure and internal linking'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr' ? 'Une architecture claire aide Google à comprendre votre site :' : 'A clear architecture helps Google understand your site:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">Hiérarchie logique :</strong> Maximum 3 clics pour atteindre n'importe quelle page</li>
                <li><strong className="text-white">URLs propres :</strong> Courtes, descriptives, avec mots-clés</li>
                <li><strong className="text-white">Fil d'Ariane :</strong> Navigation claire pour utilisateurs et moteurs</li>
                <li><strong className="text-white">Liens internes :</strong> Maillage cohérent entre pages connexes</li>
                <li><strong className="text-white">Menu structuré :</strong> Navigation intuitive et accessible</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Balises meta et Hn correctement utilisées' : 'Meta tags and Hn properly used'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Chaque page doit avoir ses balises optimisées :
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">Title unique :</strong> 50-60 caractères, mot-clé principal au début</li>
                <li><strong className="text-white">Meta description :</strong> 150-160 caractères, incitative au clic</li>
                <li><strong className="text-white">H1 unique :</strong> Un seul H1 par page avec mot-clé principal</li>
                <li><strong className="text-white">Hiérarchie Hn :</strong> H2, H3, H4 dans l'ordre logique</li>
                <li><strong className="text-white">Balises Alt images :</strong> Description pertinente avec mots-clés</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Sitemap XML et robots.txt' : 'XML sitemap and robots.txt'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Facilitez le travail des robots d'indexation :
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">Sitemap.xml :</strong> Généré et soumis à Google Search Console</li>
                <li><strong className="text-white">Robots.txt :</strong> Configuré pour autoriser/bloquer les pages appropriées</li>
                <li><strong className="text-white">Canonical tags :</strong> Éviter le contenu dupliqué</li>
                <li><strong className="text-white">Redirections 301 :</strong> Anciennes URLs redirigées correctement</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Test et validation via Google Search Console' : 'Testing and validation via Google Search Console'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Vérifications essentielles avant le lancement :
              </p>
              <ol className="list-decimal list-inside text-gray-300 mb-8 space-y-3">
                <li>Créer un compte Google Search Console</li>
                <li>Vérifier la propriété du site</li>
                <li>Soumettre le sitemap XML</li>
                <li>Tester l'indexation des pages principales</li>
                <li>Vérifier l'absence d'erreurs d'exploration</li>
                <li>Valider les données structurées (Schema.org)</li>
              </ol>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Suivi des performances après lancement' : 'Post-launch performance monitoring'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Installez ces outils pour suivre vos résultats :
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">Google Analytics :</strong> Suivi du trafic et comportement utilisateurs</li>
                <li><strong className="text-white">Google Search Console :</strong> Positions, clics, impressions</li>
                <li><strong className="text-white">Outils de suivi positions :</strong> SEMrush, Ahrefs ou alternatives</li>
                <li><strong className="text-white">Monitoring uptime :</strong> Alertes en cas de site down</li>
              </ul>

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {lang === 'fr' ? 'Téléchargez notre checklist SEO complète' : 'Download our complete SEO checklist'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {lang === 'fr' ? 'Ou contactez-nous pour un audit SEO complet de votre site avant le lancement.' : 'Or contact us for a complete SEO audit of your site before launch.'}
                </p>
                <a
                  href="/index.html#contact"
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Demander un audit SEO gratuit' : 'Request a free SEO audit'}
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <a
                href="/blog.html"
                className="inline-flex items-center text-primary-red hover:text-red-400 transition"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {lang === 'fr' ? 'Retour au blog' : 'Back to blog'}
              </a>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
