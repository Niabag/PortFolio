import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ServiceDetailPage from './components/ServiceDetailPage.jsx';
import { LanguageProvider } from './LanguageContext.jsx';
import './index.css';

const root = createRoot(document.getElementById('service-root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <ServiceDetailPage />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
