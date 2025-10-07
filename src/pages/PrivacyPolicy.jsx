import React from 'react';
import { useLanguage } from '../LanguageContext.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function PrivacyPolicy() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 py-20 sm:py-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
            {lang === 'fr' ? (
              <>Politique de <span className="text-primary-red">Confidentialité</span></>
            ) : (
              <>Privacy <span className="text-primary-red">Policy</span></>
            )}
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            {lang === 'fr' ? (
              <>
                <p className="text-gray-400 mb-8">
                  Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                </p>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">1. Introduction</h2>
                  <p className="text-gray-300 leading-relaxed">
                    SiteOnWeb s'engage à protéger la vie privée et les données personnelles de ses utilisateurs. 
                    Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations 
                    conformément au Règlement Général sur la Protection des Données (RGPD).
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">2. Responsable du traitement</h2>
                  <div className="bg-card-bg border border-gray-700 rounded-lg p-6">
                    <p className="text-gray-300">
                      <strong className="text-white">SiteOnWeb</strong><br />
                      Email : <a href="mailto:contact@siteonweb.fr" className="text-primary-red hover:underline">contact@siteonweb.fr</a><br />
                      Région Centre-Val de Loire, France
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">3. Données collectées</h2>
                  <p className="text-gray-300 mb-4">Nous collectons les données suivantes :</p>
                  
                  <div className="space-y-4">
                    <div className="bg-card-bg border border-gray-700 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-3">📝 Via les formulaires de contact et rendez-vous</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Nom et prénom</li>
                        <li>Adresse email</li>
                        <li>Numéro de téléphone (optionnel)</li>
                        <li>Date et heure de rendez-vous souhaitées</li>
                        <li>Message ou description de votre projet</li>
                      </ul>
                    </div>

                    <div className="bg-card-bg border border-gray-700 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-3">🌐 Données de navigation automatiques</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Adresse IP</li>
                        <li>Type de navigateur et version</li>
                        <li>Pages visitées et durée de visite</li>
                        <li>Source de référence (comment vous êtes arrivé sur notre site)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">4. Finalités du traitement</h2>
                  <p className="text-gray-300 mb-4">Vos données sont utilisées pour :</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
                    <li><strong className="text-white">Répondre à vos demandes</strong> : traiter vos messages et demandes de contact</li>
                    <li><strong className="text-white">Gérer les rendez-vous</strong> : confirmer et planifier vos rendez-vous</li>
                    <li><strong className="text-white">Améliorer nos services</strong> : analyser l'utilisation du site pour optimiser l'expérience utilisateur</li>
                    <li><strong className="text-white">Respect des obligations légales</strong> : conservation des données pour les obligations comptables et légales</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">5. Base légale du traitement</h2>
                  <p className="text-gray-300 mb-4">Le traitement de vos données repose sur :</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong className="text-white">Consentement</strong> : vous consentez au traitement en remplissant nos formulaires</li>
                    <li><strong className="text-white">Exécution d'un contrat</strong> : nécessaire pour la prestation de nos services</li>
                    <li><strong className="text-white">Intérêt légitime</strong> : amélioration de nos services et sécurité du site</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">6. Durée de conservation</h2>
                  <div className="bg-card-bg border border-gray-700 rounded-lg p-6">
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li><strong className="text-white">Demandes de contact :</strong> 3 ans après le dernier contact</li>
                      <li><strong className="text-white">Clients :</strong> durée de la relation commerciale + 5 ans (obligations comptables)</li>
                      <li><strong className="text-white">Données de navigation :</strong> 13 mois maximum</li>
                      <li><strong className="text-white">Prospects non convertis :</strong> 3 ans après le dernier contact</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">7. Destinataires des données</h2>
                  <p className="text-gray-300 mb-4">Vos données peuvent être partagées avec :</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong className="text-white">Personnel autorisé de SiteOnWeb</strong> : pour traiter vos demandes</li>
                    <li><strong className="text-white">Hébergeur du site</strong> : stockage sécurisé des données</li>
                    <li><strong className="text-white">Services de communication</strong> : pour l'envoi d'emails (si applicable)</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    <strong className="text-white">Nous ne vendons jamais vos données à des tiers.</strong>
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">8. Vos droits (RGPD)</h2>
                  <p className="text-gray-300 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-card-bg border border-gray-700 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-2">🔍 Droit d'accès</h4>
                      <p className="text-sm text-gray-300">Obtenir une copie de vos données personnelles</p>
                    </div>
                    <div className="bg-card-bg border border-gray-700 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-2">✏️ Droit de rectification</h4>
                      <p className="text-sm text-gray-300">Corriger vos données inexactes ou incomplètes</p>
                    </div>
                    <div className="bg-card-bg border border-gray-700 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-2">🗑️ Droit à l'effacement</h4>
                      <p className="text-sm text-gray-300">Demander la suppression de vos données</p>
                    </div>
                    <div className="bg-card-bg border border-gray-700 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-2">⛔ Droit d'opposition</h4>
                      <p className="text-sm text-gray-300">Vous opposer au traitement de vos données</p>
                    </div>
                    <div className="bg-card-bg border border-gray-700 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-2">📦 Droit à la portabilité</h4>
                      <p className="text-sm text-gray-300">Recevoir vos données dans un format structuré</p>
                    </div>
                    <div className="bg-card-bg border border-gray-700 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-2">⏸️ Droit à la limitation</h4>
                      <p className="text-sm text-gray-300">Limiter le traitement de vos données</p>
                    </div>
                  </div>

                  <div className="bg-primary-red/10 border border-primary-red/30 rounded-lg p-6 mt-6">
                    <p className="text-white mb-2">
                      <strong>Pour exercer vos droits :</strong>
                    </p>
                    <p className="text-gray-300">
                      Contactez-nous à <a href="mailto:contact@siteonweb.fr" className="text-primary-red hover:underline font-bold">contact@siteonweb.fr</a> 
                      {' '}avec une copie d'une pièce d'identité. Nous répondrons sous 1 mois maximum.
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">9. Cookies</h2>
                  <p className="text-gray-300 mb-4">
                    Notre site utilise des cookies pour améliorer votre expérience de navigation :
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong className="text-white">Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                    <li><strong className="text-white">Cookies de préférence :</strong> mémorisation de la langue choisie</li>
                    <li><strong className="text-white">Cookies analytiques :</strong> statistiques de visite anonymes</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    Vous pouvez gérer vos préférences cookies dans les paramètres de votre navigateur.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">10. Sécurité des données</h2>
                  <p className="text-gray-300 mb-4">
                    Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Chiffrement SSL/TLS pour les transmissions de données</li>
                    <li>Accès limité aux données personnelles (principe du moindre privilège)</li>
                    <li>Sauvegardes régulières et sécurisées</li>
                    <li>Mises à jour de sécurité régulières</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">11. Réclamation</h2>
                  <p className="text-gray-300">
                    Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL :
                  </p>
                  <div className="bg-card-bg border border-gray-700 rounded-lg p-6 mt-4">
                    <p className="text-gray-300">
                      <strong className="text-white">Commission Nationale de l'Informatique et des Libertés (CNIL)</strong><br />
                      3 Place de Fontenoy<br />
                      TSA 80715<br />
                      75334 PARIS CEDEX 07<br />
                      Tél : 01 53 73 22 22<br />
                      Site : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary-red hover:underline">www.cnil.fr</a>
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">12. Modifications</h2>
                  <p className="text-gray-300">
                    Cette politique de confidentialité peut être mise à jour. Nous vous informerons de tout changement significatif 
                    par email ou via une notification sur le site. La date de dernière mise à jour est indiquée en haut de cette page.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">13. Contact</h2>
                  <div className="bg-gradient-to-r from-primary-red/10 to-transparent border border-primary-red/30 rounded-lg p-6">
                    <p className="text-gray-300 mb-4">
                      Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles :
                    </p>
                    <p className="text-white">
                      📧 Email : <a href="mailto:contact@siteonweb.fr" className="text-primary-red hover:underline font-bold">contact@siteonweb.fr</a><br />
                      📱 WhatsApp : <a href="https://wa.me/33648456937" className="text-primary-red hover:underline font-bold">+33 6 48 45 69 37</a>
                    </p>
                  </div>
                </section>
              </>
            ) : (
              <>
                <p className="text-gray-400 mb-8">
                  Last updated: {new Date().toLocaleDateString('en-US')}
                </p>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">1. Introduction</h2>
                  <p className="text-gray-300 leading-relaxed">
                    SiteOnWeb is committed to protecting the privacy and personal data of its users. 
                    This privacy policy explains how we collect, use, and protect your information 
                    in compliance with the General Data Protection Regulation (GDPR).
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">2. Data Controller</h2>
                  <div className="bg-card-bg border border-gray-700 rounded-lg p-6">
                    <p className="text-gray-300">
                      <strong className="text-white">SiteOnWeb</strong><br />
                      Email: <a href="mailto:contact@siteonweb.fr" className="text-primary-red hover:underline">contact@siteonweb.fr</a><br />
                      Centre-Val de Loire Region, France
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">3. Data Collected</h2>
                  <p className="text-gray-300 mb-4">We collect the following data:</p>
                  
                  <div className="space-y-4">
                    <div className="bg-card-bg border border-gray-700 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-3">📝 Via contact and appointment forms</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>First and last name</li>
                        <li>Email address</li>
                        <li>Phone number (optional)</li>
                        <li>Desired appointment date and time</li>
                        <li>Message or project description</li>
                      </ul>
                    </div>

                    <div className="bg-card-bg border border-gray-700 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-3">🌐 Automatic browsing data</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>IP address</li>
                        <li>Browser type and version</li>
                        <li>Pages visited and visit duration</li>
                        <li>Referral source</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">4. Purpose of Processing</h2>
                  <p className="text-gray-300 mb-4">Your data is used to:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
                    <li><strong className="text-white">Respond to your requests</strong>: process your messages and contact requests</li>
                    <li><strong className="text-white">Manage appointments</strong>: confirm and schedule your appointments</li>
                    <li><strong className="text-white">Improve our services</strong>: analyze site usage to optimize user experience</li>
                    <li><strong className="text-white">Legal obligations</strong>: data retention for accounting and legal obligations</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">5. Your Rights (GDPR)</h2>
                  <p className="text-gray-300 mb-4">Under GDPR, you have the following rights:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-card-bg border border-gray-700 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-2">🔍 Right of access</h4>
                      <p className="text-sm text-gray-300">Obtain a copy of your personal data</p>
                    </div>
                    <div className="bg-card-bg border border-gray-700 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-2">✏️ Right to rectification</h4>
                      <p className="text-sm text-gray-300">Correct inaccurate or incomplete data</p>
                    </div>
                    <div className="bg-card-bg border border-gray-700 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-2">🗑️ Right to erasure</h4>
                      <p className="text-sm text-gray-300">Request deletion of your data</p>
                    </div>
                    <div className="bg-card-bg border border-gray-700 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-2">⛔ Right to object</h4>
                      <p className="text-sm text-gray-300">Object to the processing of your data</p>
                    </div>
                  </div>

                  <div className="bg-primary-red/10 border border-primary-red/30 rounded-lg p-6 mt-6">
                    <p className="text-white mb-2">
                      <strong>To exercise your rights:</strong>
                    </p>
                    <p className="text-gray-300">
                      Contact us at <a href="mailto:contact@siteonweb.fr" className="text-primary-red hover:underline font-bold">contact@siteonweb.fr</a>
                      {' '}with a copy of your ID. We will respond within 1 month maximum.
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-primary-red mb-4">6. Contact</h2>
                  <div className="bg-gradient-to-r from-primary-red/10 to-transparent border border-primary-red/30 rounded-lg p-6">
                    <p className="text-gray-300 mb-4">
                      For any questions regarding this privacy policy or the processing of your personal data:
                    </p>
                    <p className="text-white">
                      📧 Email: <a href="mailto:contact@siteonweb.fr" className="text-primary-red hover:underline font-bold">contact@siteonweb.fr</a><br />
                      📱 WhatsApp: <a href="https://wa.me/33648456937" className="text-primary-red hover:underline font-bold">+33 6 48 45 69 37</a>
                    </p>
                  </div>
                </section>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
