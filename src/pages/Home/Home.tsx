import * as React from 'react';
import { Categories } from '../../components/Categories';
import styles from './Home.module.scss';
import { CardCarousel } from '../../components/CardCarousel/CardCarousel';
import { BannerSlider } from '../../components/BannerSlider/BannerSlider';

export const Home: React.FC = () => {
  return (
    <>
      <section className={styles.homePage}>
        <h1 className={styles.homePage__title}>
          Welcome to Nice Gargets store!
        </h1>
        <BannerSlider />
        <CardCarousel title='Brand new models' endpoint='new'/>
        <Categories />
        <CardCarousel title='Hot prices' endpoint='discount'/>
      </section>

    </>
  );
};
