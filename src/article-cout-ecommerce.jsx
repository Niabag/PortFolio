import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import CoutSiteEcommerce from './pages/articles/CoutSiteEcommerce';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <CoutSiteEcommerce />
    </LanguageProvider>
  </React.StrictMode>
);
