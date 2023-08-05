import React, { useState } from 'react';
import styles from './ProductActions.module.scss';
import { DetailedProduct } from '../../types/DetailedProduct';
import cn from 'classnames';

interface Props {
  product: DetailedProduct;
}

export const ProductActions: React.FC<Props> = ({ product }) => {
  const [isProductAdded, setIsProductAdded] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const { priceDiscount, priceRegular, screen, resolution, processor, ram } =
    product;
  const infoData = [
    { label: 'Screen', value: screen },
    { label: 'Resolution', value: resolution },
    { label: 'Processor', value: processor },
    { label: 'RAM', value: ram },
  ];
  return (
    <section className={styles.actions}>
      <div className={styles.actions__prices}>
        <p className={styles.actions__priceDiscount}>{`$${priceDiscount}`}</p>
        <p className={styles.actions__priceRegular}>{`$${priceRegular}`}</p>
      </div>
      <div className={styles.actions__buttons}>
        <button
          className={styles.actions__buttonToCart}
          disabled={isProductAdded}
          onClick={() => setIsProductAdded(true)}
        >
          Add to cart
        </button>
        <button
          className={cn(styles.actions__buttonToFavourites, {
            [styles['actions__buttonToFavourites--active']]: isFavourite,
          })}
          onClick={() =>
            isFavourite ? setIsFavourite(false) : setIsFavourite(true)
          }
        ></button>
      </div>
      <div className={styles.actions__infoContainer}>
        {infoData.map((item) => (
          <div className={styles.actions__info} key={item.label}>
            <p className={styles.actions__subtitle}>{item.label}</p>
            <p className={styles.actions__data}>{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
