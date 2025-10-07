import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import AccessibiliteWCAG from './pages/articles/AccessibiliteWCAG';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <AccessibiliteWCAG />
    </LanguageProvider>
  </React.StrictMode>
);
