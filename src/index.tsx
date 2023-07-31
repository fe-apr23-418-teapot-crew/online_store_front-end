import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { App } from './App';

const queryClient = new QueryClient();

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>,
    </QueryClientProvider>
  );