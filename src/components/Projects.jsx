import React from 'react';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Projets</h2>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.name}>
            <a href={project.url} className="text-red-600 hover:underline">
              {project.name}
            </a>{' '}
            - {project.description}
          </li>
        ))}
      </ul>
    </section>
  );
}
