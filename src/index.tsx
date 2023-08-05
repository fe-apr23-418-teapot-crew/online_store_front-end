import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';
import { FavsProvider } from './Providers/FavsProvider';
import { ProductsProvider } from './Providers/Products';
import { QueryProvider } from './Providers/Query';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <QueryProvider>
    <ProductsProvider>
      <FavsProvider>
        <Router>
          <App />
        </Router>
      </FavsProvider>
    </ProductsProvider>
  </QueryProvider>,
);
