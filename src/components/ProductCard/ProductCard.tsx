import React from 'react';
import { API_URL } from '../../consts/api';
import { Product } from '../../types/Product';

type ProductCardProps = {
  product: Product;
  handleProductCardClick?: (productId: number) => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, handleProductCardClick }) => {
  const { id, image, name, capacity, color, fullPrice, price, screen, ram } =
    product;

  const imageURL = API_URL + image;

  const handleAddToCart = () => {
    const existingCartItems = localStorage.getItem('cartItems');
    const cartProducts = existingCartItems ? JSON.parse(existingCartItems) : [];
    cartProducts.push(product);

    localStorage.setItem('cartItems', JSON.stringify(cartProducts));
  };

  return (
    <article className="product-card">
      <img 
        src={imageURL} 
        className="product-card__image" 
        alt={name}
        onClick={handleProductCardClick 
          ? () => handleProductCardClick(+id)
          : () => {}
        }
      >  
      </img>
      <h2 className="product-card__name">{`${name} ${capacity} ${color}`}</h2>
      <div className="product-card__prices">
        <div className="product-card__price">{`$${price}`}</div>
        <div className="product-card__fullprice">{`$${fullPrice}`}</div>
      </div>
      <ul className="product-card__attributes">
        <li className="product-card__attribute">
          <p className="product-card__attribute-title">Screen</p>
          <p className="product-card__attribute-value">{screen}</p>
        </li>
        <li className="product-card__attribute">
          <p className="product-card__attribute-title">Capacity</p>
          <p className="product-card__attribute-value">{capacity}</p>
        </li>
        <li className="product-card__attribute">
          <p className="product-card__attribute-title">RAM</p>
          <p className="product-card__attribute-value">{ram}</p>
        </li>
      </ul>
      <div className="product-card__buttons">
        <button className="product-card__cart-button" onClick={handleAddToCart}>
          Add to cart
        </button>

        <button className="product-card__favorite-button"></button>
      </div>
    </article>
  );
};
