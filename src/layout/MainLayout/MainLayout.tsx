import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
// import { Navigation } from '../../components/Navigation';
<<<<<<< HEAD

export const MainLayout: React.FC = () => (
  <div data-cy="app">
    <Header />

    <main className="section">
      <div className="container">
        <Outlet />
      </div>
    </main>

=======
import styles from './MainLayout.module.scss';

export const MainLayout: React.FC = () => (
  <div data-cy="app" className={styles.app}>
    <Header />

    <main className={styles.section}>
      <div className={styles.container}>
        <Outlet />
      </div>
    </main>
>>>>>>> a7d6747f4a0bdbeb15f5bf552aa4b98a364f2f51
    <Footer />
  </div>
);
