import * as React from 'react';
import { Categories } from '../../components/Categories';
import styles from './HomePage.module.scss';
import { HotPriceModels } from '../../components/HotPriceModels';
import { NewModels } from '../../components/NewModels';

export const HomePage: React.FC = () => {
  return (
    <>
      <section className={styles.homePage}>
        <h1 className={styles.homePage__title}>
          Welcome to Nice Gargets store!
        </h1>

        <NewModels />
        <Categories />
        <HotPriceModels />
      </section>
    </>
  );
};
