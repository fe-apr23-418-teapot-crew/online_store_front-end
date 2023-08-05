import React, {} from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductVarieties.module.scss';
import { DetailedProduct } from '../../types/DetailedProduct';
import cn from 'classnames';

interface Props {
  product: DetailedProduct
}

export const ProductVarieties: React.FC<Props> = ({ product }) => {
  const {colorsAvailable, capacityAvailable} = product;
  return (
    <section className={styles.varieties}>
      <div className={styles.varieties__header}>
        <h6  className={styles.varieties__title}>Available colors</h6>
        <p className={styles.varieties__productId}>id</p>
      </div>
      <div className={styles.varieties__wrapper}>
        {colorsAvailable.map((color) => (
          <Link 
            key={color}
            to={'#'}
            style={{ backgroundColor: color}}
            className={cn(styles.varieties__colorsItem, {
              [styles['varieties__colorsItem--active']]: color === product.color
            })}
          >
          </Link>
        ))}
      </div>
      <h6 className={styles.varieties__title}>Select capacity</h6>
      <div className={styles.varieties__wrapper}>
        {capacityAvailable.map(capacity => (
          <Link 
            key={capacity}
            to={'#'}
            className={cn(styles.varieties__capacityItem, {
              [styles['varieties__capacityItem--active']]: capacity === product.capacity
            })}
          >
            {capacity}
          </Link>
        ))}
      </div>
    </section>
  );
};
    