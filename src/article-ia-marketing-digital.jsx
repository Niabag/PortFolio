import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import IaMarketingDigital from './pages/articles/IaMarketingDigital';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <IaMarketingDigital />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
