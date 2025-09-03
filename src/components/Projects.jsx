import React from 'react';
import { projects } from '../data/projects.js';
import { useLanguage } from '../LanguageContext.jsx';

export default function Projects() {
  const { t, lang } = useLanguage();
  const title = t('projects.title');
  return (
    <section id="realisations" className="py-12 sm:py-20 bg-gradient-to-b from-transparent to-black/50 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-16 text-white">
          {title.part1} <span className="text-primary-red">{title.part2}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block project-card rounded-xl overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
