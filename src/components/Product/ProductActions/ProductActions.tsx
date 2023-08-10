import React, { useContext, useEffect, useState } from 'react';
import styles from './ProductActions.module.scss';
import { DetailedProduct } from '../../../types/DetailedProduct';
import cn from 'classnames';
import { StorageContext } from '../../../contexts/StorageContext';
import { isProductInStorage } from '../../../helpers/localStorage/isProductInStorage';
import { useQuery } from 'react-query';
import { getProductByItemId } from '../../../api/products';
import { useErrorHandling } from '../../../hooks/useErrorHandling';
import { Loader } from '../../Loader';

interface Props {
  product: DetailedProduct;
}

export const ProductActions: React.FC<Props> = ({ product }) => {
  const {
    id: itemId,
    priceDiscount,
    priceRegular,
    screen,
    resolution,
    processor,
    ram,
  } = product;

  const { data, error, isLoading } = useQuery(['productByItemId', itemId], () =>
    getProductByItemId(itemId),
  );

  const { handleError } = useErrorHandling();

  if (error) {
    handleError(error);
  }

  const id = data?.id || 0;

  const { addToStorage, removeFromStorage } = useContext(StorageContext);
  const isProductInCart = isProductInStorage('cart', id);
  const isProductInFavs = isProductInStorage('favs', id);
  const [isAddToCartDisabled, setIsAddToCartDisabled] = useState(true);
  const [isFavIconActive, setIsFavIconActive] = useState(true);
  const infoData = [
    { label: 'Screen', value: screen },
    { label: 'Resolution', value: resolution },
    { label: 'Processor', value: processor },
    { label: 'RAM', value: ram },
  ];

  useEffect(() => {
    setIsAddToCartDisabled(isProductInCart);
    setIsFavIconActive(isProductInFavs);
  }, [id]);

  const handleAddToCart = () => {
    if (data) {
      const newCartItem = {
        ...data,
        count: 1,
      };

      addToStorage('cart', newCartItem);

      setIsAddToCartDisabled(true);
    }
  };

  const handleFavClick = () => {
    if (isFavIconActive) {
      removeFromStorage('favs', id);
      setIsFavIconActive(false);

      return;
    }

    if (data) {
      const newFavsItem = { ...data };

      addToStorage('favs', newFavsItem);
      setIsFavIconActive(true);
    }
  };

  return (
    <section className={styles.actions}>
      <div className={styles.actions__prices}>
        <p className={styles.actions__priceDiscount}>{`$${priceDiscount}`}</p>
        <p className={styles.actions__priceRegular}>{`$${priceRegular}`}</p>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.actions__buttons}>
          <button
            className={styles.actions__buttonToCart}
            disabled={isAddToCartDisabled}
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <button
            className={cn(styles.actions__buttonToFavourites, {
              [styles['actions__buttonToFavourites--active']]: isFavIconActive,
            })}
            onClick={handleFavClick}
          ></button>
        </div>
      )}

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
