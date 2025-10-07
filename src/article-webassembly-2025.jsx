import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import WebAssembly2025 from './pages/articles/WebAssembly2025';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <WebAssembly2025 />
    </LanguageProvider>
  </React.StrictMode>
);
