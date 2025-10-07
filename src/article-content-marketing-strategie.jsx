import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import ContentMarketingStrategie from './pages/articles/ContentMarketingStrategie';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ContentMarketingStrategie />
    </LanguageProvider>
  </React.StrictMode>
);
