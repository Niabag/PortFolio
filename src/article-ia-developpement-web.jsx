import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import IaDeveloppementWeb from './pages/articles/IaDeveloppementWeb';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <IaDeveloppementWeb />
    </LanguageProvider>
  </React.StrictMode>
);
