import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import CybersecuriteWeb2025 from './pages/articles/CybersecuriteWeb2025';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <CybersecuriteWeb2025 />
    </LanguageProvider>
  </React.StrictMode>
);
