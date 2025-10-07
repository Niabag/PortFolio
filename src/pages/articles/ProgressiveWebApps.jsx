import React from 'react';
import { useLanguage } from '../../LanguageContext';
import ArticleLayout from '../../components/ArticleLayout';

export default function ProgressiveWebApps() {
  const { lang } = useLanguage();

  const title = lang === 'fr'
    ? 'Progressive Web Apps (PWA) : Pourquoi votre site devrait en être une'
    : 'Progressive Web Apps (PWA): Why your site should be one';

  const date = lang === 'fr' ? '12 Mars 2025' : 'March 12, 2025';
  const category = lang === 'fr' ? 'Mobile' : 'Mobile';
  const image = '/images/articles/pwa.webp';

  return (
    <ArticleLayout title={title} date={date} category={category} image={image}>
      <div className="article-content text-gray-300">
        {lang === 'fr' ? (
          <>
            <p className="lead text-xl mb-8">
              Les Progressive Web Apps combinent le meilleur du web et des applications natives. Installation depuis le navigateur, fonctionnement hors ligne, notifications push : découvrez pourquoi les PWA dominent en 2025.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">📱 Qu'est-ce qu'une PWA ?</h2>
            <p className="mb-6">
              Une PWA est un site web qui se comporte comme une application mobile native, sans nécessiter de téléchargement depuis un app store.
            </p>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-blue-400 mb-3">✨ Caractéristiques d'une PWA :</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Installable</strong> : ajout à l'écran d'accueil sans app store</li>
                <li><strong>Offline-first</strong> : fonctionne même sans connexion internet</li>
                <li><strong>Rapide</strong> : chargement instantané grâce au cache</li>
                <li><strong>Responsive</strong> : s'adapte à tous les écrans</li>
                <li><strong>Sécurisée</strong> : obligatoirement HTTPS</li>
                <li><strong>Engageante</strong> : notifications push possibles</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">💰 ROI et bénéfices mesurables</h2>

            <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-green-400 mb-3">📈 Cas d'entreprises célèbres :</h4>
              <ul className="list-disc list-inside space-y-3">
                <li><strong>Twitter Lite (PWA)</strong> : +75% de tweets envoyés, -70% de données consommées</li>
                <li><strong>Starbucks PWA</strong> : 2x augmentation des commandes quotidiennes</li>
                <li><strong>Pinterest PWA</strong> : +40% de temps passé, +44% de revenus pub</li>
                <li><strong>Alibaba PWA</strong> : +76% de conversions depuis iOS</li>
                <li><strong>Uber PWA</strong> : chargement en 3s sur réseaux 2G</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🛠️ Comment créer une PWA en 2025</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Manifest.json</h3>
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <pre className="text-sm overflow-x-auto">
{`{
  "name": "Mon App PWA",
  "short_name": "PWA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#dc2626",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}`}
              </pre>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Service Worker</h3>
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <pre className="text-sm overflow-x-auto">
{`// service-worker.js
const CACHE_NAME = 'v1';
const urlsToCache = ['/', '/styles.css', '/app.js'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});`}
              </pre>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. Enregistrement</h3>
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <pre className="text-sm overflow-x-auto">
{`// app.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(reg => console.log('SW registered', reg))
    .catch(err => console.log('SW error', err));
}`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🚀 Frameworks avec support PWA intégré</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-bold text-white mb-2">⚛️ Next.js + next-pwa</h4>
                <p className="text-sm">Configuration en 5 minutes. Support offline automatique.</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-bold text-white mb-2">🅰️ Angular PWA</h4>
                <p className="text-sm">ng add @angular/pwa - Service worker préconfiguré.</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-bold text-white mb-2">💚 Vue.js PWA Plugin</h4>
                <p className="text-sm">@vue/cli-plugin-pwa pour Vue CLI.</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-bold text-white mb-2">⚡ Vite PWA Plugin</h4>
                <p className="text-sm">vite-plugin-pwa pour projets Vite/React.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">📊 Checklist PWA complète</h2>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-white mb-4">✅ Requirements essentiels :</h4>
              <ul className="space-y-2">
                <li>☑️ HTTPS activé (obligatoire)</li>
                <li>☑️ Manifest.json configuré</li>
                <li>☑️ Service Worker enregistré</li>
                <li>☑️ Icons 192x192 et 512x512</li>
                <li>☑️ start_url défini</li>
                <li>☑️ display: standalone</li>
                <li>☑️ Responsive design (mobile-first)</li>
                <li>☑️ Performance > 90 (Lighthouse)</li>
                <li>☑️ Fonctionne offline</li>
                <li>☑️ Fast load time (&lt; 3s)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🔔 Notifications Push</h2>
            <p className="mb-6">
              Les PWA peuvent envoyer des notifications push comme des apps natives :
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Engagement utilisateur +88% en moyenne</li>
              <li>Rappels de panier abandonné</li>
              <li>Alertes promotions</li>
              <li>Notifications de mise à jour</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">⚠️ Limitations à connaître</h2>

            <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-yellow-400 mb-3">⚡ Points d'attention :</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>iOS : support limité (pas de notifications push sur Safari)</li>
                <li>Storage limité (50-100MB selon navigateur)</li>
                <li>Pas d'accès à toutes les APIs natives (Bluetooth, NFC limités)</li>
                <li>Installation moins évidente que app stores</li>
              </ul>
            </div>

            <div className="bg-primary-red/10 border border-primary-red/30 rounded-lg p-6 mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">🎯 Conclusion</h3>
              <p className="mb-4">
                En 2025, ne pas avoir de PWA, c'est perdre 40% de conversions mobiles potentielles. Les utilisateurs préfèrent ajouter une PWA à leur écran d'accueil plutôt que télécharger une app de 200MB.
              </p>
              <p className="mb-0">
                <strong>Action immédiate :</strong> Testez votre site sur Lighthouse, activez HTTPS, ajoutez un manifest.json et un service worker basique. Votre PWA peut être opérationnelle en une journée !
              </p>
            </div>
          </>
        ) : (
          <>
            <p className="lead text-xl mb-8">
              Progressive Web Apps combine the best of web and native applications. Installation from browser, offline functionality, push notifications: discover why PWAs dominate in 2025.
            </p>

            <div className="bg-primary-red/10 border border-primary-red/30 rounded-lg p-6 mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">🎯 Conclusion</h3>
              <p className="mb-4">
                In 2025, not having a PWA means losing 40% of potential mobile conversions. Users prefer adding a PWA to their home screen rather than downloading a 200MB app.
              </p>
              <p className="mb-0">
                <strong>Immediate action:</strong> Test your site on Lighthouse, enable HTTPS, add a manifest.json and a basic service worker. Your PWA can be operational in one day!
              </p>
            </div>
          </>
        )}
      </div>
    </ArticleLayout>
  );
}
