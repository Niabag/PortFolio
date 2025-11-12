import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import SiteResponsive from './pages/articles/SiteResponsive';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <SiteResponsive />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
