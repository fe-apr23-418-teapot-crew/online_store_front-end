import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { API_URL } from '../../consts/api';
import { Product } from '../../types/Product';
import cn from 'classnames';
import styles from './ProductCard.module.scss';
import { getCartItems } from '../../helpers/localStorage/getCartItems';
import { getCartItemIndex } from '../../helpers/localStorage/getProductIndex';

type ProductCardProps = {
  product: Product;
  handleProductCardClick?: (productId: number) => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  handleProductCardClick,
}) => {
  const { 
    id, 
    image, 
    name, 
    capacity, 
    color, 
    fullPrice, 
    price, 
    screen, 
    ram,
  } = product;

  const productIndex = getCartItemIndex(id);
  const isProductIndexValid = productIndex !== -1;
  const [isAddToCartDisabled, setIsAddToCartDisabled] = useState(isProductIndexValid);
  const imageURL = API_URL + image;

  const handleAddToCart = () => {
    const cartItems = getCartItems();

    cartItems.push({ id, name, image, price, count: 1 });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    setIsAddToCartDisabled(true);
  };

  const navigate = useNavigate();

  const handleProductCardClickRedirect = () => {
    if (handleProductCardClick) {
      handleProductCardClick(+id); // Call the parent's click handler if it exists
    }

    // Redirect to the product page using the productId
    navigate(`/product/${id}`);
  };

  return (
    <article id='ProductCard' className={styles.productCard}>
      <img
        src={imageURL}
        className={styles.productCard__image}
        alt={name}
        onClick={
          handleProductCardClick ? () => handleProductCardClickRedirect() : () => {}
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
