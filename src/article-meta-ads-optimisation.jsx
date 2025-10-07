import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import MetaAdsOptimisation from './pages/articles/MetaAdsOptimisation';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <MetaAdsOptimisation />
    </LanguageProvider>
  </React.StrictMode>
);
