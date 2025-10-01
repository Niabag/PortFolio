import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import ErreursRefonte from './pages/articles/ErreursRefonte';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ErreursRefonte />
    </LanguageProvider>
  </React.StrictMode>
);
