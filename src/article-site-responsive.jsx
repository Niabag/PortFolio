import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import SiteResponsive from './pages/articles/SiteResponsive';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <SiteResponsive />
    </LanguageProvider>
  </React.StrictMode>
);
