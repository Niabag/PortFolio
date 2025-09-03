import React from 'react';
import { experiences } from '../data/experiences.js';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-card-bg">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary-red">Expérience</h2>
        <ul className="space-y-6">
          {experiences.map((exp, i) => (
            <li key={i}>
              <h3 className="text-xl font-semibold">
                {exp.role} - {exp.company}
              </h3>
              <p className="text-gray-400">{exp.period}</p>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
