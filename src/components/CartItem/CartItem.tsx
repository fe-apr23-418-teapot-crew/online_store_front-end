import React, { useEffect, useState } from 'react';
import { API_URL } from '../../consts/api';
import { Product } from '../../types/Product';
import styles from './CartItem.module.scss';

interface CartItemProps {
  product: Product;
  onChangeTotalAmount: (amount: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  product,
  onChangeTotalAmount,
}) => {
  const { name, image, price } = product;
  const [count, setCount] = useState(1);

  const imageURL = API_URL + image;

  const totalProductAmount = count * price;

  useEffect(() => {
    onChangeTotalAmount(totalProductAmount);
  }, [count]);

  const handleCountChange = (action: string) => {
    const currentCount = count;

    if (action === '+') {
      setCount(currentCount + 1);
    }

    if (action === '-' && currentCount > 0) {
      setCount(currentCount - 1);
    }
  };

  return (
    <div className={styles.cartItem}>
      <button className={styles.cartItem__removeButton}>X</button>

      <img
        className={styles.cartItem__img}
        width={80}
        height={80}
        alt={name}
        src={imageURL}
      />

      <h3 className={styles.cartItem__name}>{name}</h3>

      <div className={styles.cartItem__counter}>
        <button
          className={styles.cartItem__counterButton}
          onClick={() => handleCountChange('-')}
          disabled={count < 1}
        >
          -
        </button>

        {count}

        <button
          className={styles.cartItem__counterButton}
          onClick={() => handleCountChange('+')}
        >
          +
        </button>
      </div>

      <h3 className={styles.cartItem__price}>{`${price}$`}</h3>
    </div>
  );
};
