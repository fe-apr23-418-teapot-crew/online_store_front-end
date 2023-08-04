import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../consts/api';
import { Product } from '../../types/Product';
import styles from './ProductCard.module.scss';
import { getStoredItems } from '../../helpers/localStorage/getStoredItems';
import { getCartItemIndex } from '../../helpers/localStorage/getProductIndex';

type ProductCardProps = {
  product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, image, name, capacity, color, fullPrice, price, screen, ram } =
    product;

  const productIndex = getCartItemIndex(id);
  const isProductIndexValid = productIndex !== -1;
  const [isAddToCartDisabled, setIsAddToCartDisabled] =
    useState(isProductIndexValid);
  const imageURL = API_URL + image;

  const handleAddToCart = () => {
    const cartItems = getStoredItems('cart');

    const newCartItem = {
      id,
      name,
      image,
      price,
      count: 1,
    };

    cartItems.push(newCartItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    setIsAddToCartDisabled(true);
  };

  const handleAddToFavs = () => {
    const favsItems = getStoredItems('favs');

    const newFavsItem = { product };

    favsItems.push(newFavsItem);
    localStorage.setItem('favsItems', JSON.stringify(favsItems));
  };

  const navigate = useNavigate();

  const handleProductCardClickRedirect = () => {
    navigate(`/product/${id}`);
  };

  return (
    <article id="ProductCard" className={styles.productCard}>
      <img
        src={imageURL}
        className={styles.productCard__image}
        alt={name}
        onClick={handleProductCardClickRedirect}
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
          className={styles.productCard__cartButton}
          onClick={handleAddToCart}
          disabled={isAddToCartDisabled}
        >
          Add to cart
        </button>

        <button
          onClick={handleAddToFavs}
          className={styles.productCard__favoriteButton}
        />
      </div>
    </article>
  );
};
