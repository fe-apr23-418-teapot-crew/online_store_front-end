import React, { useContext } from 'react';
import styles from './FavsPage.module.scss';
import { StorageContext } from '../../contexts/StorageContext';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductList } from '../../components/Product/ProductList';
import { EmptyScreen } from '../../components/EmptyScreen';

export const FavsPage: React.FC = () => {
  const { favsProducts } = useContext(StorageContext);

  const itemsCount = favsProducts.length;
  const isCartEmpty = itemsCount === 0;

  return (
    <section className={styles.favs}>
      <Breadcrumbs path="favourites" />

      <h1 className={styles.favs__title}>Favourites</h1>
      <h6 className={styles.favs__count}>
        {!isCartEmpty ? `${itemsCount} items` : ''}
      </h6>
      {isCartEmpty ? <EmptyScreen /> : <ProductList products={favsProducts} />}
    </section>
  );
};
