import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
// import { Navigation } from '../../components/Navigation';
import styles from './MainLayout.module.scss';

export const MainLayout: React.FC = () => (
  <div data-cy="app" className={styles.app}>
    <Header />

    <main className={styles.section}>
      <div className={styles.container}>
        <Outlet />
      </div>
    </main>
    <Footer />
  </div>
);
