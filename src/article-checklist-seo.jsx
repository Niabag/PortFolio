import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import ChecklistSEO from './pages/articles/ChecklistSEO';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <ChecklistSEO />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
