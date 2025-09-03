import React from 'react';
import { experiences } from '../data/experiences.js';

export default function Experience() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Expérience</h2>
      <ul className="space-y-2">
        {experiences.map((exp, idx) => (
          <li key={idx}>
            <span className="font-medium">{exp.role}</span> chez {exp.company} ({exp.year})
          </li>
        ))}
      </ul>
    </section>
  );
}
