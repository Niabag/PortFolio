import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

function PrivacyPolicySimple() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 py-20 sm:py-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
            Politique de Confidentialité <span className="text-primary-red">&</span> Mentions Légales
          </h1>
          
          <div className="space-y-8 text-gray-300">
            <p className="text-gray-400 mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary-red mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                SiteOnWeb s'engage à protéger la vie privée et les données personnelles de ses utilisateurs. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations 
                conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary-red mb-4">2. Responsable du traitement</h2>
              <div className="bg-card-bg border border-gray-700 rounded-lg p-6">
                <p>
                  <strong className="text-white">SiteOnWeb</strong><br />
                  Email : <a href="mailto:contact@siteonweb.fr" className="text-primary-red hover:underline">contact@siteonweb.fr</a><br />
                  Région Centre-Val de Loire, France
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary-red mb-4">3. Données collectées</h2>
              <p className="mb-4">Nous collectons les données suivantes :</p>
              
              <div className="space-y-4">
                <div className="bg-card-bg border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">📝 Via les formulaires</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone (optionnel)</li>
                    <li>Date et heure de rendez-vous</li>
                    <li>Message ou description du projet</li>
                  </ul>
                </div>

                <div className="bg-card-bg border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">🌐 Données de navigation</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Pages visitées</li>
                    <li>Source de référence</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary-red mb-4">4. Vos droits (RGPD)</h2>
              <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card-bg border border-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">🔍 Droit d'accès</h4>
                  <p className="text-sm">Obtenir une copie de vos données</p>
                </div>
                <div className="bg-card-bg border border-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">✏️ Droit de rectification</h4>
                  <p className="text-sm">Corriger vos données</p>
                </div>
                <div className="bg-card-bg border border-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">🗑️ Droit à l'effacement</h4>
                  <p className="text-sm">Demander la suppression</p>
                </div>
                <div className="bg-card-bg border border-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">⛔ Droit d'opposition</h4>
                  <p className="text-sm">Vous opposer au traitement</p>
                </div>
              </div>

              <div className="bg-primary-red/10 border border-primary-red/30 rounded-lg p-6 mt-6">
                <p className="text-white mb-2">
                  <strong>Pour exercer vos droits :</strong>
                </p>
                <p>
                  Contactez-nous à <a href="mailto:contact@siteonweb.fr" className="text-primary-red hover:underline font-bold">contact@siteonweb.fr</a>
                  {' '}avec une copie d'une pièce d'identité.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary-red mb-4">5. Mentions Légales</h2>
              
              <div className="space-y-6">
                <div className="bg-card-bg border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">📋 Identification de l'éditeur</h3>
                  <p className="mb-4">
                    <strong className="text-white">Raison sociale :</strong> SiteOnWeb<br />
                    <strong className="text-white">Activité :</strong> Agence Web et Marketing Digital<br />
                    <strong className="text-white">Email :</strong> <a href="mailto:contact@siteonweb.fr" className="text-primary-red hover:underline">contact@siteonweb.fr</a><br />
                    <strong className="text-white">Téléphone :</strong> <a href="tel:+33648456937" className="text-primary-red hover:underline">+33 6 48 45 69 37</a><br />
                    <strong className="text-white">Siège social :</strong> Région Centre-Val de Loire, France
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="bg-primary-red text-white px-6 py-3 rounded-xl text-base font-bold shadow-lg">
                      💻 Agence Web
                    </div>
                    <div className="bg-blue-600 text-white px-6 py-3 rounded-xl text-base font-bold shadow-lg">
                      📊 Agence Marketing
                    </div>
                  </div>
                </div>

                <div className="bg-card-bg border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">🌐 Hébergement du site</h3>
                  <p>
                    <strong className="text-white">Hébergeur :</strong> À préciser<br />
                    <em className="text-sm text-gray-400">
                      (Informations à compléter selon votre hébergeur : nom, adresse, téléphone)
                    </em>
                  </p>
                </div>

                <div className="bg-card-bg border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">⚖️ Propriété intellectuelle</h3>
                  <p className="mb-3">
                    L'ensemble du contenu de ce site (textes, images, logos, vidéos, structure) est la propriété exclusive de SiteOnWeb, 
                    sauf mention contraire.
                  </p>
                  <p>
                    Toute reproduction, distribution, modification ou exploitation du contenu sans autorisation écrite préalable est strictement interdite 
                    et constitue une contrefaçon sanctionnée par le Code de la Propriété Intellectuelle.
                  </p>
                </div>

                <div className="bg-card-bg border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">🔗 Liens hypertextes</h3>
                  <p className="mb-3">
                    <strong className="text-white">Liens sortants :</strong> Ce site peut contenir des liens vers des sites externes. 
                    SiteOnWeb n'est pas responsable du contenu de ces sites tiers.
                  </p>
                  <p>
                    <strong className="text-white">Liens entrants :</strong> Tout lien vers ce site doit faire l'objet d'une autorisation préalable.
                  </p>
                </div>

                <div className="bg-card-bg border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">📜 Conditions d'utilisation</h3>
                  <p>
                    L'utilisation du site implique l'acceptation pleine et entière des conditions générales d'utilisation. 
                    Ces conditions peuvent être modifiées à tout moment. Les utilisateurs sont invités à les consulter régulièrement.
                  </p>
                </div>

                <div className="bg-card-bg border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">⚠️ Limitation de responsabilité</h3>
                  <p className="mb-3">
                    SiteOnWeb met tout en œuvre pour offrir des informations fiables et à jour. Toutefois, des erreurs ou omissions peuvent survenir.
                  </p>
                  <p>
                    SiteOnWeb ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation de ce site, 
                    y compris l'inaccessibilité, les pertes de données ou la présence de virus.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary-red mb-4">6. Contact</h2>
              <div className="bg-gradient-to-r from-primary-red/10 to-transparent border border-primary-red/30 rounded-lg p-6">
                <p className="mb-4">
                  Pour toute question concernant cette politique de confidentialité ou les mentions légales :
                </p>
                <p className="text-white">
                  📧 Email : <a href="mailto:contact@siteonweb.fr" className="text-primary-red hover:underline font-bold">contact@siteonweb.fr</a><br />
                  📱 WhatsApp : <a href="https://wa.me/33648456937" className="text-primary-red hover:underline font-bold">+33 6 48 45 69 37</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <PrivacyPolicySimple />
    </LanguageProvider>
  </React.StrictMode>
);
