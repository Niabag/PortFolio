import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import ProgressiveWebApps from './pages/articles/ProgressiveWebApps';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ProgressiveWebApps />
    </LanguageProvider>
  </React.StrictMode>
);
