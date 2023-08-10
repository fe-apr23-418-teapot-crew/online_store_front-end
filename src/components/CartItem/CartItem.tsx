import React, { useContext, useState } from 'react';
import { API_URL } from '../../consts/api';
import styles from './CartItem.module.scss';
import closeButton from '../../icons/Close.svg';
import minusButton from '../../icons/Minus.svg';
import plusButton from '../../icons/Plus.svg';
import { getStoredItemCount } from '../../helpers/localStorage/getStoredItemCount';
import { Product } from '../../types/Product';
import { updateStoredCount } from '../../helpers/localStorage/updateStoredCount';
import { StorageContext } from '../../contexts/StorageContext';

interface CartItemProps {
  isLimit: boolean;
  product: Product;
  onChangeTotalAmount: (newPrice: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  isLimit,
  product,
  onChangeTotalAmount,
}) => {
  const { id, name, image, price } = product;
  const storedCartItemCount = getStoredItemCount('cart', id);
  const [count, setCount] = useState<number>(storedCartItemCount);
  const { removeFromStorage } = useContext(StorageContext);

  const isLimitOfCount = isLimit || count > 100;

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
    updateStoredCount('cart', id, newCount);
  };

  const handleRemoveItem = () => {
    removeFromStorage('cart', id);
    //onRemoveFromCart(id);
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

        <img className={styles.cartItem__img} alt={name} src={imageURL} />

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
            disabled={isLimitOfCount}
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
