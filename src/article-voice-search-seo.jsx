import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import VoiceSearchSEO from './pages/articles/VoiceSearchSEO';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <VoiceSearchSEO />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
