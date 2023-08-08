import React, { useContext } from 'react';
import styles from './Favs.module.scss';
import { ProductList } from '../../components/ProductList/ProductList';
import { FavsContext } from '../../contexts/FavsContext';
import { LocationHistory } from '../../components/LocationHistory';

interface FavsProps {}

export const Favs: React.FC<FavsProps> = () => {
  const { favsProducts } = useContext(FavsContext);

  const itemsCount = favsProducts.length;

  return (
    <section className={styles.favs}>
      <LocationHistory path="favourites" />

      <h1 className={styles.favs__title}>Favourites</h1>
      <h6 className={styles.favs__count}>
        {itemsCount} {'items'}
      </h6>
      {favsProducts && <ProductList products={favsProducts} />}
    </section>
  );
};
