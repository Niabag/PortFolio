import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import EmailMarketingAutomation from './pages/articles/EmailMarketingAutomation';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <EmailMarketingAutomation />
    </LanguageProvider>
  </React.StrictMode>
);
