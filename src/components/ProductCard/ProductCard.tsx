import React, { useEffect, useState } from 'react';
import { API_URL } from '../../consts/api';
import { Product } from '../../types/Product';
import cn from 'classnames';
import styles from './ProductCard.module.scss';
import { getProductIndex } from '../../helpers/getProductIndex';
import { getCartItemsFromLocalStorage } from '../../helpers/getCartItemsFromLocalStorage';

type ProductCardProps = {
  product: Product;
  handleProductCardClick?: (productId: number) => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, handleProductCardClick }) => {
  const { id, image, name, capacity, color, fullPrice, price, screen, ram } =
    product;

  const imageURL = API_URL + image;
  const [isAddToCartDisabled, setIsAddToCartDisabled] = useState(false);

  useEffect(() => {
    const productIndex = getProductIndex(id);

    if (productIndex !== -1) {
      setIsAddToCartDisabled(true);
    }
  }, [product.id]);

  const handleAddToCart = () => {
    const productIndex = getProductIndex(id);

    if (productIndex !== -1) {
      return;
    }

    const cartItems = getCartItemsFromLocalStorage();

    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  return (
    <article className={styles.productCard}>
      <img 
        src={imageURL} 
        className={styles.productCard__image} 
        alt={name} 
        onClick={handleProductCardClick 
          ? () => handleProductCardClick(+id)
          : () => {}
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