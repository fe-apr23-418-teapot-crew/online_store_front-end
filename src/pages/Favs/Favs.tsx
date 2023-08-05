import React, { useContext, useState } from 'react';
import { FavsAndCartContext } from '../../contexts/FavsAndCart';
import HomeIcon from '@mui/icons-material/Home';
import styles from './Favs.module.scss';
import { ProductList } from '../../components/ProductList/ProductList';

interface FavsProps {}

export const Favs: React.FC<FavsProps> = () => {
  const { storedFavsItems } = useContext(FavsAndCartContext);

  const [visibleProducts] = useState(storedFavsItems);
  const itemsCount = visibleProducts.length;

  // const changeLikedStatus = () => {
  //   setVisibleProducts([]);
  // };
  return (
    <section className={styles.favs}>
      <div className={styles.favs__locationHistory}>
        <HomeIcon className={styles.favs__homeIcon} />

        <div className={styles.favs__location}>{'> Favourites'}</div>
      </div>

      <h1 className={styles.favs__title}>Favourites</h1>

      <h6 className={styles.favs__count}>
        {itemsCount} + {'items'}
      </h6>

      {visibleProducts && <ProductList products={visibleProducts} />}
    </section>
  );
};
