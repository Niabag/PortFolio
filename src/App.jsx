// Composant principal de l'application
// Nous utilisons une iframe pour conserver le site existant tel quel
import React from 'react';

export default function App() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/portfolio-professionnel-complet.html"
        title="Portfolio professionnel"
        className="w-full h-full border-0"
      />
    </div>
  );
}
