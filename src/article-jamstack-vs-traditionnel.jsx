import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import JamstackVsTraditionnel from './pages/articles/JamstackVsTraditionnel';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <JamstackVsTraditionnel />
    </LanguageProvider>
  </React.StrictMode>
);
