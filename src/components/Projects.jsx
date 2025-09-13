import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects.js';
import { useLanguage } from '../LanguageContext.jsx';

export default function Projects() {
  const { t, lang } = useLanguage();
  const title = t('projects.title');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
  }, [selectedProject]);

  return (
    <section id="realisations" className="py-12 sm:py-20 bg-gradient-to-b from-transparent to-black/50 relative z-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-16 text-white">
          {title.part1} <span className="text-primary-red">{title.part2}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
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
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card-bg rounded-xl relative max-w-4xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl sm:text-3xl"
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
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-primary-red">Description</h4>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  {selectedProject.description[lang]}
                </p>

                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-primary-red">Fonctionnalités</h4>
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
                    <h5 className="font-bold text-primary-red text-sm sm:text-base">Durée</h5>
                    <p className="text-gray-300 text-sm sm:text-base">
                      {selectedProject.duration[lang]}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary-red text-sm sm:text-base">Client</h5>
                    <p className="text-gray-300 text-sm sm:text-base">
                      {selectedProject.client}
                    </p>
                  </div>
                </div>

                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-primary-red">Défis techniques</h4>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  {selectedProject.challenges[lang]}
                </p>

                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-red px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-red-700 transition inline-block text-sm sm:text-base"
                >
                  Voir le site <i className="fas fa-external-link-alt ml-2"></i>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
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
