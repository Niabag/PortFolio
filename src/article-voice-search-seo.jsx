import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import VoiceSearchSEO from './pages/articles/VoiceSearchSEO';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <VoiceSearchSEO />
    </LanguageProvider>
  </React.StrictMode>
);
