import React from 'react';
import { useLanguage } from '../../LanguageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function CybersecuriteWeb2025() {
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
                  {lang === 'fr' ? 'Sécurité' : 'Security'}
                </span>
                <span className="text-gray-400">{lang === 'fr' ? '8 Mars 2025' : 'March 8, 2025'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {lang === 'fr'
                  ? 'Cybersécurité web en 2025 : Les menaces et protections essentielles'
                  : 'Web cybersecurity in 2025: Essential threats and protections'}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {lang === 'fr'
                  ? 'Protégez votre site des cyberattaques : SQL injection, XSS, CSRF, DDoS. Guide complet des vulnérabilités et meilleures pratiques de sécurité web.'
                  : 'Protect your site from cyberattacks: SQL injection, XSS, CSRF, DDoS. Complete guide to vulnerabilities and web security best practices.'}
              </p>
              
              <img
                src="/images/articles/cybersecurite.webp"
                alt="Cybersecurity"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 relative z-10"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-8">
                {lang === 'fr' ? 'État des lieux : La cybersécurité en 2025' : 'State of play: Cybersecurity in 2025'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'En 2025, les cyberattaques contre les sites web ont augmenté de 40% par rapport à 2023. Une PME sur 5 subit au moins une tentative d\'attaque par mois. Le coût moyen d\'une violation de données atteint 4,5 millions de dollars, sans compter l\'impact sur la réputation.'
                  : 'In 2025, cyberattacks against websites have increased by 40% compared to 2023. One in 5 SMEs experiences at least one attack attempt per month. The average cost of a data breach reaches $4.5 million, not counting the impact on reputation.'}
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'La sécurité web n\'est plus optionnelle : c\'est une nécessité absolue pour protéger vos données, celles de vos clients, et votre activité. Le RGPD impose des sanctions pouvant atteindre 4% du chiffre d\'affaires en cas de négligence.'
                  : 'Web security is no longer optional: it\'s an absolute necessity to protect your data, your customers\' data, and your business. GDPR imposes penalties of up to 4% of turnover in case of negligence.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Les 10 menaces principales en 2025' : 'The top 10 threats in 2025'}
              </h2>
              
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '1. Injection SQL' : '1. SQL Injection'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'L\'injection SQL reste dans le top 3 des vulnérabilités OWASP. Un attaquant insère du code SQL malveillant dans un formulaire pour accéder à votre base de données. Exemple : saisir "1\' OR \'1\'=\'1" dans un champ de connexion peut bypasser l\'authentification.'
                  : 'SQL injection remains in the OWASP top 3 vulnerabilities. An attacker inserts malicious SQL code into a form to access your database. Example: entering "1\' OR \'1\'=\'1" in a login field can bypass authentication.'}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Protection :' : 'Protection:'}</strong> {lang === 'fr'
                  ? 'Utilisez des requêtes préparées (prepared statements), validez toutes les entrées utilisateur, limitez les privilèges SQL au strict nécessaire.'
                  : 'Use prepared statements, validate all user inputs, limit SQL privileges to the strict minimum.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '2. Cross-Site Scripting (XSS)' : '2. Cross-Site Scripting (XSS)'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Le XSS permet d\'injecter du JavaScript malveillant qui s\'exécute dans le navigateur de vos visiteurs. L\'attaquant peut voler des cookies de session, rediriger vers des sites de phishing, ou modifier le contenu de la page.'
                  : 'XSS allows malicious JavaScript injection that executes in your visitors\' browsers. The attacker can steal session cookies, redirect to phishing sites, or modify page content.'}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Protection :' : 'Protection:'}</strong> {lang === 'fr'
                  ? 'Échappez toutes les sorties HTML, utilisez Content Security Policy (CSP), validez et sanitisez les entrées, framework avec protection intégrée (React escape par défaut).'
                  : 'Escape all HTML outputs, use Content Security Policy (CSP), validate and sanitize inputs, framework with built-in protection (React escapes by default).'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '3. Cross-Site Request Forgery (CSRF)' : '3. Cross-Site Request Forgery (CSRF)'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Le CSRF force un utilisateur authentifié à exécuter des actions non désirées (virement bancaire, changement de mot de passe, suppression de compte). L\'attaquant envoie une requête forgée depuis un site tiers.'
                  : 'CSRF forces an authenticated user to perform unwanted actions (bank transfer, password change, account deletion). The attacker sends a forged request from a third-party site.'}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Protection :' : 'Protection:'}</strong> {lang === 'fr'
                  ? 'Tokens CSRF pour chaque formulaire, vérifiez l\'en-tête Referer, utilisez SameSite cookies, double submit cookies.'
                  : 'CSRF tokens for each form, verify Referer header, use SameSite cookies, double submit cookies.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '4. Attaques DDoS' : '4. DDoS Attacks'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Les attaques par déni de service distribuées submergent votre serveur de requêtes pour le rendre indisponible. En 2025, les attaques DDoS peuvent atteindre plusieurs Tbps, rendant tout site vulnérable sans protection.'
                  : 'Distributed Denial of Service attacks overwhelm your server with requests to make it unavailable. In 2025, DDoS attacks can reach several Tbps, making any site vulnerable without protection.'}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Protection :' : 'Protection:'}</strong> {lang === 'fr'
                  ? 'CDN avec protection DDoS (Cloudflare, Akamai), rate limiting, WAF (Web Application Firewall), monitoring temps réel.'
                  : 'CDN with DDoS protection (Cloudflare, Akamai), rate limiting, WAF (Web Application Firewall), real-time monitoring.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '5. Authentification faible' : '5. Weak Authentication'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? '81% des violations de données sont dues à des mots de passe faibles ou volés. Les attaques par force brute testent des millions de combinaisons pour cracker les mots de passe.'
                  : '81% of data breaches are due to weak or stolen passwords. Brute force attacks test millions of combinations to crack passwords.'}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Protection :' : 'Protection:'}</strong> {lang === 'fr'
                  ? 'Authentification multi-facteurs (2FA/MFA), politique de mots de passe forts, limitation des tentatives, OAuth 2.0, WebAuthn/FIDO2.'
                  : 'Multi-factor authentication (2FA/MFA), strong password policy, login attempt limitation, OAuth 2.0, WebAuthn/FIDO2.'}
              </p>

              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? '6. Failles de configuration :' : '6. Misconfiguration:'}</strong> {lang === 'fr' ? 'Serveurs mal configurés, permissions trop permissives' : 'Misconfigured servers, overly permissive permissions'}</li>
                <li><strong className="text-white">{lang === 'fr' ? '7. Composants vulnérables :' : '7. Vulnerable components:'}</strong> {lang === 'fr' ? 'Bibliothèques non mises à jour (npm, composer)' : 'Outdated libraries (npm, composer)'}</li>
                <li><strong className="text-white">{lang === 'fr' ? '8. Exposition de données sensibles :' : '8. Sensitive data exposure:'}</strong> {lang === 'fr' ? 'Données non chiffrées, logs accessibles' : 'Unencrypted data, accessible logs'}</li>
                <li><strong className="text-white">{lang === 'fr' ? '9. Manque de logging :' : '9. Lack of logging:'}</strong> {lang === 'fr' ? 'Impossibilité de détecter les attaques' : 'Inability to detect attacks'}</li>
                <li><strong className="text-white">{lang === 'fr' ? '10. Ransomware :' : '10. Ransomware:'}</strong> {lang === 'fr' ? 'Chiffrement de données contre rançon' : 'Data encryption for ransom'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Checklist sécurité : 20 actions essentielles' : 'Security checklist: 20 essential actions'}
              </h2>
              
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Niveau base (obligatoire)' : 'Base level (mandatory)'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>{lang === 'fr' ? '✅ HTTPS obligatoire sur tout le site (certificat SSL/TLS)' : '✅ Mandatory HTTPS on entire site (SSL/TLS certificate)'}</li>
                <li>{lang === 'fr' ? '✅ Mises à jour régulières (CMS, plugins, dépendances)' : '✅ Regular updates (CMS, plugins, dependencies)'}</li>
                <li>{lang === 'fr' ? '✅ Mots de passe forts + changement régulier' : '✅ Strong passwords + regular changes'}</li>
                <li>{lang === 'fr' ? '✅ Sauvegardes automatiques quotidiennes' : '✅ Daily automatic backups'}</li>
                <li>{lang === 'fr' ? '✅ Validation de toutes les entrées utilisateur' : '✅ Validation of all user inputs'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Niveau intermédiaire' : 'Intermediate level'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>{lang === 'fr' ? '✅ WAF (Web Application Firewall) actif' : '✅ Active WAF (Web Application Firewall)'}</li>
                <li>{lang === 'fr' ? '✅ Headers de sécurité (CSP, X-Frame-Options, HSTS)' : '✅ Security headers (CSP, X-Frame-Options, HSTS)'}</li>
                <li>{lang === 'fr' ? '✅ Authentification 2FA pour admin' : '✅ 2FA authentication for admin'}</li>
                <li>{lang === 'fr' ? '✅ Rate limiting API' : '✅ API rate limiting'}</li>
                <li>{lang === 'fr' ? '✅ Monitoring et alertes temps réel' : '✅ Real-time monitoring and alerts'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Niveau avancé' : 'Advanced level'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? '✅ Pentesting annuel' : '✅ Annual penetration testing'}</li>
                <li>{lang === 'fr' ? '✅ Security audit code et infrastructure' : '✅ Code and infrastructure security audit'}</li>
                <li>{lang === 'fr' ? '✅ Zero Trust Architecture' : '✅ Zero Trust Architecture'}</li>
                <li>{lang === 'fr' ? '✅ SIEM (Security Information and Event Management)' : '✅ SIEM (Security Information and Event Management)'}</li>
                <li>{lang === 'fr' ? '✅ Plan de réponse aux incidents' : '✅ Incident response plan'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Headers de sécurité HTTP' : 'HTTP security headers'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Configurez ces en-têtes HTTP pour renforcer la sécurité de votre site :'
                  : 'Configure these HTTP headers to strengthen your site\'s security:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">Content-Security-Policy :</strong> {lang === 'fr' ? 'Empêche l\'injection de scripts malveillants' : 'Prevents malicious script injection'}</li>
                <li><strong className="text-white">X-Frame-Options :</strong> {lang === 'fr' ? 'Protège contre le clickjacking' : 'Protects against clickjacking'}</li>
                <li><strong className="text-white">Strict-Transport-Security :</strong> {lang === 'fr' ? 'Force HTTPS pendant 1 an minimum' : 'Forces HTTPS for minimum 1 year'}</li>
                <li><strong className="text-white">X-Content-Type-Options :</strong> {lang === 'fr' ? 'Empêche le MIME-sniffing' : 'Prevents MIME-sniffing'}</li>
                <li><strong className="text-white">Referrer-Policy :</strong> {lang === 'fr' ? 'Contrôle les informations de référence' : 'Controls referrer information'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Outils de test de sécurité' : 'Security testing tools'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">OWASP ZAP :</strong> {lang === 'fr' ? 'Scanner de vulnérabilités open-source' : 'Open-source vulnerability scanner'}</li>
                <li><strong className="text-white">Burp Suite :</strong> {lang === 'fr' ? 'Outil professionnel de pentesting' : 'Professional pentesting tool'}</li>
                <li><strong className="text-white">Mozilla Observatory :</strong> {lang === 'fr' ? 'Analyse les headers de sécurité' : 'Analyzes security headers'}</li>
                <li><strong className="text-white">Snyk :</strong> {lang === 'fr' ? 'Détecte les vulnérabilités dans les dépendances' : 'Detects vulnerabilities in dependencies'}</li>
                <li><strong className="text-white">Security Headers :</strong> {lang === 'fr' ? 'Vérifie la configuration des headers' : 'Verifies header configuration'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Conformité RGPD et sécurité' : 'GDPR compliance and security'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'Le RGPD impose des mesures de sécurité strictes pour protéger les données personnelles. Vous devez chiffrer les données sensibles, limiter l\'accès au principe du moindre privilège, journaliser les accès, et notifier la CNIL en cas de violation sous 72h.'
                  : 'GDPR imposes strict security measures to protect personal data. You must encrypt sensitive data, limit access to the principle of least privilege, log accesses, and notify the supervisory authority in case of breach within 72h.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Conclusion' : 'Conclusion'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'La cybersécurité est un processus continu, pas un état final. Mettez en place une stratégie de sécurité multi-couches, formez vos équipes, restez informé des nouvelles menaces et auditez régulièrement votre infrastructure.'
                  : 'Cybersecurity is a continuous process, not a final state. Implement a multi-layered security strategy, train your teams, stay informed of new threats and regularly audit your infrastructure.'}
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'Investir dans la sécurité coûte moins cher que subir une cyberattaque. La prévention est toujours plus rentable que la réparation.'
                  : 'Investing in security costs less than suffering a cyberattack. Prevention is always more profitable than repair.'}
              </p>

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {lang === 'fr' ? 'Besoin d\'un audit de sécurité ?' : 'Need a security audit?'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {lang === 'fr' ? 'Notre agence réalise des audits de sécurité complets : pentesting, analyse de vulnérabilités, recommandations et mise en conformité.' : 'Our agency performs complete security audits: pentesting, vulnerability analysis, recommendations and compliance implementation.'}
                </p>
                <a
                  href={lang === 'fr' ? '/index.html#contact' : '/en/index.html#contact'}
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Demander un audit gratuit' : 'Request a free audit'}
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <a
                href={lang === 'fr' ? '/blog.html' : '/en/blog.html'}
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
