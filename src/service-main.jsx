import React from 'react';
import { createRoot } from 'react-dom/client';
import ServiceDetailPage from './components/ServiceDetailPage.jsx';
import { LanguageProvider } from './LanguageContext.jsx';
import './index.css';

const root = createRoot(document.getElementById('service-root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <ServiceDetailPage />
    </LanguageProvider>
  </React.StrictMode>
);
