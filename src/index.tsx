import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';
import { FavsAndCartProvider } from './Providers/FavsAndCart';
import { ProductsProvider } from './Providers/Products';
import { QueryProvider } from './Providers/Query';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <QueryProvider>
    <ProductsProvider>
      <FavsAndCartProvider>
        <Router>
          <App />
        </Router>
      </FavsAndCartProvider>
    </ProductsProvider>
  </QueryProvider>,
);
