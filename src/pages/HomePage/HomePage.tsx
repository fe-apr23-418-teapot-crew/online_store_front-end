import * as React from 'react';
import { Categories } from '../../components/Categories';
import styles from './HomePage.module.scss';
import { CardCarousel } from '../../components/CardCarousel/CardCarousel';
import { HotPriceModels } from '../../components/HotPriceModels';

export const HomePage: React.FC = () => {
  return (
    <>
      <section className={styles.homePage}>
        <h1 className={styles.homePage__title}>
          Welcome to Nice Gargets store!
        </h1>
        <CardCarousel title="Brand new models" endpoint="new" />
        <Categories />
        <HotPriceModels />
      </section>
    </>
  );
};
