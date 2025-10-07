import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import SEOLocalStrategies from './pages/articles/SEOLocalStrategies';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <SEOLocalStrategies />
    </LanguageProvider>
  </React.StrictMode>
);
