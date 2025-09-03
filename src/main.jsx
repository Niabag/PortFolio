// Point d'entrée de l'application React
// Ici nous montons le composant principal dans le DOM
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { LanguageProvider } from './LanguageContext.jsx';

// Création de la racine React
const root = createRoot(document.getElementById('root'));

// Rendu de l'application
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
