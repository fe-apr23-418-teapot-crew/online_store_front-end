import React, { useState } from 'react';
import { API_URL } from '../../consts/api';
import { LiteProduct } from '../../types/LiteProduct';
import styles from './CartItem.module.scss';
import closeButton from '../../icons/Close.svg';
import minusButton from '../../icons/Minus.svg';
import plusButton from '../../icons/Plus.svg';
import { getCartItemCount } from '../../helpers/localStorage/getCartItemCount';
import { updateCartItem } from '../../helpers/localStorage/updateCartItems';

interface CartItemProps {
  product: LiteProduct;
  onRemoveFromCart: (productId: number) => void;
  onChangeTotalAmount: (newPrice: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  product,
  onRemoveFromCart,
  onChangeTotalAmount,
}) => {
  const { id, name, image, price } = product;
  const storedCartItemCount = getCartItemCount(id);
  const [count, setCount] = useState<number>(storedCartItemCount);
  const imageURL = API_URL + image;
  const isReduceCountDisabled = count === 1;

  const handleCountChange = (action: string) => {
    let newCount = count;

    if (action === '+') {
      newCount += 1;
      onChangeTotalAmount(price);
    } 
    
    if (action === '-' && count > 1) {
      newCount -= 1;
      onChangeTotalAmount(-price);
    }

    setCount(newCount);
    updateCartItem(id, newCount);
  };

  const handleRemoveItem = () => {
    onRemoveFromCart(id);
    onChangeTotalAmount(-price * count);
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
            alt="Close Button"
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
            disabled={isReduceCountDisabled}
          >
            <img
              src={minusButton}
              alt="Minus Button"
              className={styles.minusButton}
            />
          </button>

          <div className={styles.cartItem__count}>{count}</div>

          <button
            className={styles.cartItem__counterButton}
            onClick={() => handleCountChange('+')}
          >
            <img
              src={plusButton}
              alt="Plus button"
              className={styles.plusButton}
            />
          </button>
        </div>

        <h3 className={styles.cartItem__price}>{`$${price}`}</h3>
      </div>
    </div>
  );
};
