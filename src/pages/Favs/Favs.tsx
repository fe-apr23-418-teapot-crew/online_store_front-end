import React, { useContext } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import styles from './Favs.module.scss';
import { ProductList } from '../../components/ProductList/ProductList';
import { FavsContext } from '../../contexts/FavsContext';

interface FavsProps {}

export const Favs: React.FC<FavsProps> = () => {
  const { favsProducts } = useContext(FavsContext);

  const itemsCount = favsProducts.length;

  return (
    <section className={styles.favs}>
      <div className={styles.favs__locationHistory}>
        <HomeIcon className={styles.favs__homeIcon} />

        <div className={styles.favs__location}>{'> Favourites'}</div>
      </div>

      <h1 className={styles.favs__title}>Favourites</h1>

      <h6 className={styles.favs__count}>
        {itemsCount} {'items'}
      </h6>

      {favsProducts && <ProductList products={favsProducts} />}
    </section>
  );
};
