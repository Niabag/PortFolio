import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import ChecklistSEO from './pages/articles/ChecklistSEO';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ChecklistSEO />
    </LanguageProvider>
  </React.StrictMode>
);
