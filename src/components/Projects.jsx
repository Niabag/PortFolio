import React from 'react';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary-red">Projets</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="p-6 bg-card-bg rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a href={project.url} className="text-primary-red hover:underline" target="_blank" rel="noopener noreferrer">
                Voir le projet
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
