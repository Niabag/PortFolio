import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import MarketingAutomationTools from './pages/articles/MarketingAutomationTools';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <MarketingAutomationTools />
    </LanguageProvider>
  </React.StrictMode>
);
