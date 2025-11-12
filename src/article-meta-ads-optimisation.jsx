import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import MetaAdsOptimisation from './pages/articles/MetaAdsOptimisation';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <MetaAdsOptimisation />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
