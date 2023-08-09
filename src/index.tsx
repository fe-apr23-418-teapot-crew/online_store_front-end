import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';
import { StorageProvider } from './Providers/StorageProvider';
import { QueryProvider } from './Providers/QueryProvider';
import './index.css';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <QueryProvider>
    <StorageProvider>
      <Router>
        <App />
      </Router>
    </StorageProvider>
  </QueryProvider>,
);
