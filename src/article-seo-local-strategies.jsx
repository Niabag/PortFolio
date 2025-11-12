import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import SEOLocalStrategies from './pages/articles/SEOLocalStrategies';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <SEOLocalStrategies />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
