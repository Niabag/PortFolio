import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import AccessibiliteWCAG from './pages/articles/AccessibiliteWCAG';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <AccessibiliteWCAG />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
