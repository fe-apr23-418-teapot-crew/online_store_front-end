import React, { useContext } from 'react';
import styles from './FavsPage.module.scss';
import { StorageContext } from '../../contexts/StorageContext';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductList } from '../../components/Product/ProductList';

export const FavsPage: React.FC = () => {
  const { favsProducts } = useContext(StorageContext);

  const itemsCount = favsProducts.length;

  return (
    <section className={styles.favs}>
      <Breadcrumbs path="favourites" />

      <h1 className={styles.favs__title}>Favourites</h1>
      <h6 className={styles.favs__count}>
        {itemsCount} {'items'}
      </h6>
      {favsProducts && <ProductList products={favsProducts} />}
    </section>
  );
};
