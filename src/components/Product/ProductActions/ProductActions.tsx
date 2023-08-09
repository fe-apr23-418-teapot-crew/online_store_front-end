import React, { useContext, useState } from 'react';
import styles from './ProductActions.module.scss';
import { DetailedProduct } from '../../../types/DetailedProduct';
import cn from 'classnames';
import { StorageContext } from '../../../contexts/StorageContext';
import { isProductInStorage } from '../../../helpers/localStorage/isProductInStorage';
import { useQuery } from 'react-query';
import { getProductById } from '../../../api/products';

interface Props {
  product: DetailedProduct;
}

export const ProductActions: React.FC<Props> = ({ product }) => {
  const { selectedProductId } = useContext(StorageContext);

  const { data } = useQuery(['productById', selectedProductId], () =>
    getProductById(selectedProductId),
  );

  console.log(data);

  const { priceDiscount, priceRegular, screen, resolution, processor, ram } =
    product;

  const { addToStorage, removeFromStorage } = useContext(StorageContext);
  const isProductInCart = isProductInStorage('cart', selectedProductId);
  const isProductInFavs = isProductInStorage('favs', selectedProductId);
  const [isAddToCartDisabled, setIsAddToCartDisabled] =
    useState(isProductInCart);
  const [isFavIconActive, setIsFavIconActive] = useState(isProductInFavs);
  const infoData = [
    { label: 'Screen', value: screen },
    { label: 'Resolution', value: resolution },
    { label: 'Processor', value: processor },
    { label: 'RAM', value: ram },
  ];

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
    if (isProductInFavs) {
      removeFromStorage('favs', selectedProductId);
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
