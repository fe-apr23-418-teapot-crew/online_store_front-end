import React from 'react';
import { API_URL } from '../../consts/api';
import styles from './OrderItem.module.scss';
import { Product } from '../../types/Product';

interface OrderItemProps {
  product: Product;
}

export const OrderItem: React.FC<OrderItemProps> = ({

  product,
}) => {
  const { name, image, price } = product;

  const imageURL = API_URL + image;

  return (
    <div className={styles.OrderItem}>
      <div className={styles.OrderItem__productInfo}>

        <img className={styles.OrderItem__img} alt={name} src={imageURL} />

        <h3 className={styles.OrderItem__name}>{name}</h3>
      </div>

      <div className={styles.OrderItem__counter}>

        <h3 className={styles.OrderItem__price}>{`$${price}`}</h3>
      </div>
    </div>
  );
};
