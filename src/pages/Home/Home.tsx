import * as React from 'react';
import { Categories } from '../../components/Categories';
import styles from './Home.module.scss';
import { HotPricedProducts } from '../../components/HotPricedProducts/HotPricesProducts';
import {NewModelsList} from '../../components/NewModelsList/NewModelsList';

export const Home: React.FC = () => {
  return (
    <>
      <section className={styles.homePage}>
        <h1 className={styles.homePage__title}>
          Welcome to Nice Gargets store!
        </h1>
        <NewModelsList />
        <Categories />
        <HotPricedProducts />
      </section>

    </>
  );
};
