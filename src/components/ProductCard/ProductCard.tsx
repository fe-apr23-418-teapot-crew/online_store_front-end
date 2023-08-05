import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../consts/api';
import { Product } from '../../types/Product';
import styles from './ProductCard.module.scss';
import { setStoredItem } from '../../helpers/localStorage/setStoredItem';
import cn from 'classnames';
import { isProductInStorage } from '../../helpers/localStorage/isProductInStorage';
import { FavsContext } from '../../contexts/FavsContext';

type ProductCardProps = {
  product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, image, name, capacity, color, fullPrice, price, screen, ram } =
    product;

  const { removeFavProduct, addFavProduct } = useContext(FavsContext);

  const isProductInCart = isProductInStorage('cart', id);
  const isProductInFavs = isProductInStorage('favs', id);
  const [isAddToCartDisabled, setIsAddToCartDisabled] =
    useState(isProductInCart);
  const [isFavIconActive, setIsFavIconActive] = useState(isProductInFavs);
  const imageURL = API_URL + image;

  const handleAddToCart = () => {
    const newCartItem = {
      ...product,
      count: 1,
    };

    setStoredItem('cart', newCartItem);

    setIsAddToCartDisabled(true);
  };

  const handleAddToFavs = () => {
    if (isProductInFavs) {
      removeFavProduct(id);
      setIsFavIconActive(false);

      return;
    }

    const newFavsItem = { ...product };

    addFavProduct(newFavsItem);
    setIsFavIconActive(true);
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
          className={cn(styles.productCard__favoriteButton, {
            [styles['productCard__favoriteButton--active']]: isFavIconActive,
          })}
        />
      </div>
    </article>
  );
};
