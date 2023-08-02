import React, { useState } from 'react';
import { API_URL } from '../../consts/api';
import { getCartItems } from '../../helpers/localStorage/getCartItems';
import { LiteProduct } from '../../types/LiteProduct';
import styles from './CartItem.module.scss';

interface CartItemProps {
  product: LiteProduct;
  onRemoveFromCart: (productId: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  product,
  onRemoveFromCart,
}) => {
  const { id, name, image, price } = product;
  const cartItems = localStorage.getItem('cartItems');
  const existingCount: number = cartItems
    ? JSON.parse(cartItems).find((item: LiteProduct) => item.id === id)
      ?.count || 1
    : 1;

  const [count, setCount] = useState<number>(existingCount);

  const imageURL = API_URL + image;

  const handleCountChange = (action: string) => {
    action === '+'
      ? setCount((prevCount) => prevCount + 1)
      : setCount((prevCount) => prevCount - 1);

    const cartItems = getCartItems();
    const updatedCartItems = cartItems.map((item: LiteProduct) =>
      item.id === id ? { ...item, count } : item,
    );

    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleRemoveItem = () => {
    onRemoveFromCart(id);
  };

  return (
    <div className={styles.cartItem}>
      <button
        className={styles.cartItem__removeButton}
        onClick={handleRemoveItem}
      >
        X
      </button>

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

      <h3 className={styles.cartItem__price}>{`$${price}`}</h3>
    </div>
  );
};
