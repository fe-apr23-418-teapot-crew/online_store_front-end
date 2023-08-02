import React, { useState } from 'react';
import { API_URL } from '../../consts/api';
import { Product } from '../../types/Product';
import cn from 'classnames';
import styles from './ProductCard.module.scss';
import { getProductIndex } from '../../helpers/getProductIndex';
import { getCartItems } from '../../helpers/localStorage/getCartItems';

type ProductCardProps = {
  product: Product;
  handleProductCardClick?: (productId: number) => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  handleProductCardClick,
}) => {
  const { id, image, name, capacity, color, fullPrice, price, screen, ram } =
    product;

  const imageURL = API_URL + image;
  const productIndex = getProductIndex(id);
  const isProductIndexValid = productIndex !== -1;

  const [isAddToCartDisabled, setIsAddToCartDisabled] =
    useState(isProductIndexValid);

  const handleAddToCart = () => {
    const cartItems = getCartItems();

    cartItems.push({ id, name, image, price, count: 1 });

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    setIsAddToCartDisabled(true);
  };

  return (
    <article className={styles.productCard}>
      <img
        src={imageURL}
        className={styles.productCard__image}
        alt={name}
        onClick={
          handleProductCardClick ? () => handleProductCardClick(+id) : () => {}
        }
      />

      <h2 className={styles.productCard__name}>
        {`${name} ${capacity} ${color}`}
      </h2>

      <div className={styles.productCard__prices}>
        <div className={styles.productCard__price}>{`$${price}`}</div>

        <div className={styles.productCard__fullprice}>{`$${fullPrice}`}</div>
      </div>

      <ul className={styles.productCard__attributes}>
        <li className={styles.productCard__attribute}>
          <p className={styles.productCard__attributeTitle}>Screen</p>
          <p className={styles.productCard__attributeValue}>{screen}</p>
        </li>

        <li className={styles.productCard__attribute}>
          <p className={styles.productCard__attributeTitle}>Capacity</p>
          <p className={styles.productCard__attributeValue}>{capacity}</p>
        </li>

        <li className={styles.productCard__attribute}>
          <p className={styles.productCard__attributeTitle}>RAM</p>
          <p className={styles.productCard__attributeValue}>{ram}</p>
        </li>
      </ul>

      <div className={styles.productCard__buttons}>
        <button
          className={cn(styles.productCard__cartButton, {
            [styles['productCard__cartButton--disabled']]: isAddToCartDisabled,
          })}
          onClick={handleAddToCart}
          disabled={isAddToCartDisabled}
        >
          Add to cart
        </button>

        <button className={styles.productCard__favoriteButton} />
      </div>
    </article>
  );
};
