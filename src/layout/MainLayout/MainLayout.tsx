import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
// import { Navigation } from '../../components/Navigation';

export const MainLayout: React.FC = () => (
  <div data-cy="app">
    <Header />

    <main className="section">
      <div className="container">
        <Outlet />
      </div>
    </main>

    <Footer />
  </div>
);
