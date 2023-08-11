import React from 'react';
import { OrderItem } from '../../components/OrderItem';
import { getStoredItems } from '../../helpers/localStorage/getStoredItems';
import { Product } from '../../types/Product';
import styles from './OrderPage.module.scss';

interface OrderPageProps {
  
}

export const OrderPage: React.FC<OrderPageProps> = () => {
  const orders = getStoredItems('orders');
  console.log(orders);

  return (
    <ul className={styles.cart__products}>
      {orders?.map((product: Product) => (
        <OrderItem
          key={product.id}
          product={product}
        />
      ))}
    </ul>
  );
};
