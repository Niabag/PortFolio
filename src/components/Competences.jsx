import React from 'react';

const skills = [
  { icon: 'fa-wordpress', title: 'WordPress', text: 'CMS Expert', delay: '' },
  { icon: 'fa-react', title: 'React.js', text: 'Frontend', delay: '0.2s' },
  { icon: 'fa-node-js', title: 'Node.js', text: 'Backend', delay: '0.4s' },
  { icon: 'fa-html5', title: 'HTML5', text: 'Structure', delay: '0.6s' },
  { icon: 'fa-css3-alt', title: 'CSS3', text: 'Style', delay: '0.8s' },
  { icon: 'fa-js-square', title: 'JavaScript', text: 'Interactivité', delay: '1s' }
];

export default function Competences() {
  return (
    <section id="competences" className="py-12 sm:py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-16 text-white">
          Mes <span className="text-primary-red">Compétences</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="tech-card p-4 sm:p-6 rounded-xl text-center animate-float"
              style={{ animationDelay: skill.delay }}
            >
              <i className={`fab ${skill.icon} text-2xl sm:text-4xl text-primary-red mb-2 sm:mb-4`}></i>
              <h3 className="font-bold text-sm sm:text-lg">{skill.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
