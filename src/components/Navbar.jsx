import React from 'react';

const sections = [
  { id: 'about', label: 'À propos' },
  { id: 'experience', label: 'Expérience' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-dark-bg/90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary-red">SiteOnWeb</a>
        <ul className="hidden md:flex space-x-6">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="hover:text-primary-red transition-colors">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
