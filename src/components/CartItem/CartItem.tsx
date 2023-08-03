import React, { useEffect, useState } from 'react';
import { API_URL } from '../../consts/api';
import { Product } from '../../types/Product';
import styles from './CartItem.module.scss';
import closeButton from '../../icons/Close.svg';
import minusButton from '../../icons/Minus.svg';
import plusButton from '../../icons/Plus.svg';

interface CartItemProps {
  product: Product;
  onChangeTotalAmount: (amount: number) => void;
  onChangeCartProducts: (updatedCartItems: Product[]) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  product,
  onChangeTotalAmount,
  onChangeCartProducts,
}) => {
  const { name, image, price } = product;
  const existingCount = localStorage.getItem(`count_${product.id}`);
  const [count, setCount] = useState<number>(
    existingCount ? parseInt(existingCount) : 1,
  );

  const imageURL = API_URL + image;

  useEffect(() => {
    onChangeTotalAmount(price);
  }, []);

  const handleCountChange = (action: string) => {
    const newCount = action === '+' ? count + 1 : count - 1;

    if (newCount >= 1) {
      setCount(newCount);
      localStorage.setItem(`count_${product.id}`, newCount.toString());

      onChangeTotalAmount(action === '+' ? price : -price);
    }
  };

  const handleRemoveItem = () => {
    const existingCartItems = localStorage.getItem('cartItems');
    const cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

    const productIndex = cartItems.findIndex(
      (item: Product) => item.id === product.id,
    );

    if (productIndex !== -1) {
      cartItems.splice(productIndex, 1);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));

      onChangeCartProducts(cartItems);
    }
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__productInfo}>
        <button
          className={styles.cartItem__removeButton}
          onClick={handleRemoveItem}
        >
          <img 
            src={closeButton}
            alt='Close Button'
            className={styles.closeButton}
          />
        </button>

        <img
          className={styles.cartItem__img}
          width={80}
          height={80}
          alt={name}
          src={imageURL}
        />

        <h3 className={styles.cartItem__name}>{name}</h3>
      </div>


      <div className={styles.cartItem__counter}>
        <div className={styles.cartItem__counter__buttons}>
          <button
            className={styles.cartItem__counterButton}
            onClick={() => handleCountChange('-')}
            disabled={count < 1}
          >
            <img 
              src={minusButton}
              alt='Minus Button' 
              className={styles.minusButton}
            />
          </button>

          <div className={styles.cartItem__count}>
            {count}
          </div>

          <button
            className={styles.cartItem__counterButton}
            onClick={() => handleCountChange('+')}
          >
            <img 
              src={plusButton}
              alt='Plus button' 
              className={styles.plusButton}
            />
          </button>
        </div>

        <h3 className={styles.cartItem__price}>{`$${price}`}</h3>
      </div>

    </div>
  );
};
