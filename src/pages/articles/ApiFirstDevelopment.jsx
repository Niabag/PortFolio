import React from 'react';
import { useLanguage } from '../../LanguageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';
import ArticleCTA from '../../components/ArticleCTA';

export default function ApiFirstDevelopment() {
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
                  {lang === 'fr' ? 'API & Backend' : 'API & Backend'}
                </span>
                <span className="text-gray-400">{lang === 'fr' ? '6 Mars 2025' : 'March 6, 2025'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {lang === 'fr'
                  ? 'API-first development : Construire des applications web modernes et évolutives'
                  : 'API-first development: Building modern and scalable web applications'}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {lang === 'fr'
                  ? 'L\'approche API-first révolutionne le développement web. Découvrez comment concevoir des APIs REST et GraphQL évolutives pour accélérer vos projets.'
                  : 'The API-first approach revolutionizes web development. Discover how to design scalable REST and GraphQL APIs to accelerate your projects.'}
              </p>
              
              <img
                src="/images/articles/api-first.webp"
                alt="API First Development"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 relative z-10"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-8">
                {lang === 'fr' ? 'Qu\'est-ce que l\'API-first development ?' : 'What is API-first development?'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'L\'API-first est une approche de développement où l\'API est conçue et développée avant toute interface utilisateur. Plutôt que de créer une application monolithique, vous construisez d\'abord une API robuste qui servira ensuite plusieurs clients : web, mobile, IoT, partenaires tiers.'
                  : 'API-first is a development approach where the API is designed and developed before any user interface. Rather than creating a monolithic application, you first build a robust API that will then serve multiple clients: web, mobile, IoT, third-party partners.'}
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'Cette méthodologie permet un découplage total entre frontend et backend, facilitant la scalabilité, la réutilisabilité et le travail en équipes parallèles. C\'est devenu le standard pour les applications modernes.'
                  : 'This methodology allows total decoupling between frontend and backend, facilitating scalability, reusability and parallel team work. It has become the standard for modern applications.'}
              </p>

              {/* CTA Top */}
              <ArticleCTA category="dev" position="top" />

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Avantages de l\'approche API-first' : 'Benefits of the API-first approach'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Réutilisabilité :' : 'Reusability:'}</strong> {lang === 'fr' ? 'Une API pour tous vos clients (web, mobile, apps tierces)' : 'One API for all your clients (web, mobile, third-party apps)'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Développement parallèle :' : 'Parallel development:'}</strong> {lang === 'fr' ? 'Équipes frontend et backend travaillent simultanément' : 'Frontend and backend teams work simultaneously'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Scalabilité :' : 'Scalability:'}</strong> {lang === 'fr' ? 'Architecture microservices facilitée' : 'Facilitated microservices architecture'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Maintenance :' : 'Maintenance:'}</strong> {lang === 'fr' ? 'Modifications backend sans impact frontend' : 'Backend modifications without frontend impact'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Documentation :' : 'Documentation:'}</strong> {lang === 'fr' ? 'API bien documentée dès le départ (OpenAPI/Swagger)' : 'Well-documented API from the start (OpenAPI/Swagger)'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'REST vs GraphQL : Quel choix ?' : 'REST vs GraphQL: Which choice?'}
              </h2>
              
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'REST API' : 'REST API'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'REST (Representational State Transfer) est le standard historique. Simple, bien compris, compatible avec HTTP caching. Idéal pour des APIs publiques et des opérations CRUD standard.'
                  : 'REST (Representational State Transfer) is the historical standard. Simple, well understood, compatible with HTTP caching. Ideal for public APIs and standard CRUD operations.'}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Avantages :' : 'Advantages:'}</strong> {lang === 'fr'
                  ? 'Simplicité, caching HTTP, large support tooling'
                  : 'Simplicity, HTTP caching, wide tooling support'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'GraphQL' : 'GraphQL'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'GraphQL permet au client de demander exactement les données dont il a besoin, évitant l\'over-fetching et l\'under-fetching. Parfait pour applications complexes et mobile (réduction bande passante).'
                  : 'GraphQL allows the client to request exactly the data it needs, avoiding over-fetching and under-fetching. Perfect for complex applications and mobile (bandwidth reduction).'}
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Avantages :' : 'Advantages:'}</strong> {lang === 'fr'
                  ? 'Une seule requête pour multiples ressources, typage fort, introspection'
                  : 'Single request for multiple resources, strong typing, introspection'}
              </p>

              {/* CTA Middle */}
              <ArticleCTA category="dev" position="middle" />

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Bonnes pratiques de conception d\'API' : 'API design best practices'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? 'Versioning dès le départ (v1, v2...)' : 'Versioning from the start (v1, v2...)'}</li>
                <li>{lang === 'fr' ? 'Nommage cohérent et intuitif des endpoints' : 'Consistent and intuitive endpoint naming'}</li>
                <li>{lang === 'fr' ? 'Codes HTTP appropriés (200, 201, 404, 500...)' : 'Appropriate HTTP codes (200, 201, 404, 500...)'}</li>
                <li>{lang === 'fr' ? 'Pagination pour les listes longues' : 'Pagination for long lists'}</li>
                <li>{lang === 'fr' ? 'Rate limiting pour éviter les abus' : 'Rate limiting to prevent abuse'}</li>
                <li>{lang === 'fr' ? 'CORS configuré correctement' : 'Properly configured CORS'}</li>
                <li>{lang === 'fr' ? 'Authentification OAuth 2.0 / JWT' : 'OAuth 2.0 / JWT authentication'}</li>
                <li>{lang === 'fr' ? 'Documentation OpenAPI/Swagger' : 'OpenAPI/Swagger documentation'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Outils et technologies' : 'Tools and technologies'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">Postman :</strong> {lang === 'fr' ? 'Test et documentation d\'APIs' : 'API testing and documentation'}</li>
                <li><strong className="text-white">Swagger/OpenAPI :</strong> {lang === 'fr' ? 'Spécification et génération docs' : 'Specification and docs generation'}</li>
                <li><strong className="text-white">Apollo Server :</strong> {lang === 'fr' ? 'Serveur GraphQL puissant' : 'Powerful GraphQL server'}</li>
                <li><strong className="text-white">Express.js :</strong> {lang === 'fr' ? 'Framework Node.js pour REST' : 'Node.js framework for REST'}</li>
                <li><strong className="text-white">FastAPI :</strong> {lang === 'fr' ? 'Framework Python moderne et rapide' : 'Modern and fast Python framework'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Conclusion' : 'Conclusion'}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'L\'approche API-first est devenue incontournable en 2025. Elle permet de construire des applications évolutives, maintenables et réutilisables. Que vous choisissiez REST ou GraphQL, l\'important est de concevoir une API bien documentée et cohérente dès le départ.'
                  : 'The API-first approach has become essential in 2025. It allows building scalable, maintainable and reusable applications. Whether you choose REST or GraphQL, the important thing is to design a well-documented and consistent API from the start.'}
              </p>

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {lang === 'fr' ? 'Besoin d\'aide pour concevoir votre API ?' : 'Need help designing your API?'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {lang === 'fr' ? 'Notre agence vous accompagne dans la conception et le développement d\'APIs REST ou GraphQL évolutives et performantes.' : 'Our agency supports you in designing and developing scalable and efficient REST or GraphQL APIs.'}
                </p>
                <a
                  href={lang === 'fr' ? '/index.html#contact' : '/en/index.html#contact'}
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Discuter de votre projet' : 'Discuss your project'}
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
