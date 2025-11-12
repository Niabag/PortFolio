import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import GoogleAnalytics4Guide from './pages/articles/GoogleAnalytics4Guide';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <GoogleAnalytics4Guide />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
