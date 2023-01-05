import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.scss';
import { GlobalContextProvider } from './assets/Contexts/GlobalContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </HelmetProvider>
  </React.StrictMode>
);
