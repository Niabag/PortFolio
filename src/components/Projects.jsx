import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects.js';
import { useLanguage } from '../LanguageContext.jsx';

export default function Projects() {
  const { t, lang } = useLanguage();
  const title = t('projects.title');
  const [selectedProject, setSelectedProject] = useState(null);

  // Gestion du scroll quand modal ouvert
  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
  }, [selectedProject]);

  // Gestion du bouton retour du téléphone
  useEffect(() => {
    const handlePopState = () => {
      if (selectedProject) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      // Ajouter un état dans l'historique quand on ouvre le modal
      window.history.pushState({ modal: true }, '');
    }

    // Écouter l'événement popstate (bouton retour)
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [selectedProject]);

  // Fonction pour fermer le modal proprement
  const closeModal = () => {
    // Si un modal est ouvert et qu'il y a un état modal dans l'historique
    if (selectedProject && window.history.state?.modal) {
      window.history.back();
    } else {
      setSelectedProject(null);
    }
  };

  return (
    <section id="realisations" className="snap-section bg-gradient-to-b from-transparent to-black/50 relative z-20">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1400px]">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-white">
          {title.part1} <span className="text-primary-red">{title.part2}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-4 sm:mb-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="block project-card rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative">
                <img
                  src={project.image}

                  alt={project.imageAlt[lang] || project.name}
                  loading="lazy"

                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-300 mb-3 text-sm sm:text-base">{project.description[lang]}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags[lang].map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary-red px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA de conversion après la grille */}
        <div className="mt-8 sm:mt-12 text-center bg-gradient-to-r from-primary-red/20 to-transparent p-6 sm:p-8 rounded-xl border border-primary-red/30">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            <img src="/images/icons-competences/referencement.webp" alt="" className="inline-block w-8 h-8 sm:w-10 sm:h-10 align-middle mr-2" />
            {lang === 'fr' ? 'Prêt à lancer votre projet ?' : 'Ready to Launch Your Project?'}
          </h3>
          <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base max-w-2xl mx-auto">
            {lang === 'fr'
              ? 'Transformez votre idée en réalité. Obtenez un devis personnalisé gratuit en moins de 24h.'
              : 'Transform your idea into reality. Get a free personalized quote in less than 24 hours.'}
          </p>
          <a
            href="#contact"
            onClick={() => {
              // Tracking GTM
              if (window.gtag) {
                window.gtag('event', 'projects_grid_cta_click', {
                  page_location: window.location.href
                });
              }
            }}
            className="inline-block bg-primary-red px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-red-700 transition text-base sm:text-lg font-semibold"
          >
            {lang === 'fr' ? 'Démarrer mon projet' : 'Start My Project'}
          </a>
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative bg-card-bg rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-4 pt-40 pb-40 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-primary-red hover:text-white text-2xl sm:text-3xl"
              aria-label={t('projects.close')}
            >
              ×
            </button>
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-3xl font-bold text-white">
                {selectedProject.name}
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <img
                  src={selectedProject.image}

                  alt={selectedProject.imageAlt[lang] || selectedProject.name}
                  loading="lazy"

                  className="w-full rounded-lg mb-4 sm:mb-6"
                />
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary-red px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-primary-red">{t('projects.modal.description')}</h4>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  {selectedProject.description[lang]}
                </p>

                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-primary-red">{t('projects.modal.features')}</h4>
                <ul className="space-y-2 mb-4 sm:mb-6">
                  {selectedProject.features[lang].map((feature) => (
                    <li
                      key={feature}
                      className="text-gray-300 text-sm sm:text-base"
                    >
                      <i className="fas fa-check text-primary-red mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-4 mb-4 sm:mb-6">
                  <div>
                    <h5 className="font-bold text-primary-red text-sm sm:text-base">{t('projects.modal.duration')}</h5>
                    <p className="text-gray-300 text-sm sm:text-base">
                      {selectedProject.duration[lang]}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary-red text-sm sm:text-base">{t('projects.modal.client')}</h5>
                    <p className="text-gray-300 text-sm sm:text-base">
                      {selectedProject.client}
                    </p>
                  </div>
                </div>

                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-primary-red">{t('projects.modal.challenges')}</h4>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  {selectedProject.challenges[lang]}
                </p>

                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-red px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-red-700 transition inline-block text-sm sm:text-base"
                >
                  {t('projects.modal.visitSite')} <i className="fas fa-external-link-alt ml-2"></i>
                </a>

                {/* CTA de conversion dans le modal */}
                <div className="mt-6 p-4 bg-gradient-to-r from-primary-red/10 to-primary-red/5 rounded-lg border border-primary-red/20">
                  <p className="text-white text-center mb-3 font-semibold text-sm sm:text-base">
                    {lang === 'fr' ? '✨ Vous voulez un site comme celui-ci ?' : '✨ Want a website like this?'}
                  </p>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      // Tracking GTM
                      if (window.gtag) {
                        window.gtag('event', 'project_modal_cta_click', {
                          project_name: selectedProject.name,
                          page_location: window.location.href
                        });
                      }
                      closeModal();
                    }}
                    className="block w-full bg-primary-red px-6 py-3 rounded-lg hover:bg-red-700 transition text-center font-semibold text-sm sm:text-base"
                  >
                    {lang === 'fr' ? 'Obtenir mon devis gratuit' : 'Get My Free Quote'}
                  </a>
                </div>

                <button
                  onClick={closeModal}
                  className="mt-4 w-full sm:hidden bg-gray-700 px-4 py-2 rounded-lg text-white hover:bg-gray-600 transition text-sm"
                >
                  {t('projects.close')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
