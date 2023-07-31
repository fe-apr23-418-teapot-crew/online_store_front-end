import React from 'react';
import { Product } from '../../types/Product';

type ProductCardProps = {
  product: Product,
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    image,
    name,
    capacity,
    color,
    fullPrice,
    price,
    screen,
    ram
  } = product;
  return (
    <article className='product-card'>
      <img
        src={image}
        className='product-card__image'
        alt={name}
      >
      </img>
      <h2 className="product-card__name">
        {`${name} ${capacity} ${color}`}
      </h2>
      <div className="product-card__prices">
        <div className="product-card__price">
          {`$${price}`}
        </div>
        <div className="product-card__fullprice">
          {`$${fullPrice}`} 
        </div>
      </div>
      <ul className="product-card__attributes">
        <li className='product-card__attribute'>
          <p className="product-card__attribute-title">
            Screen
          </p>
          <p className="product-card__attribute-value">
            {screen}
          </p>
        </li>
        <li className='product-card__attribute'>
          <p className="product-card__attribute-title">
            Capacity
          </p>
          <p className="product-card__attribute-value">
            {capacity}
          </p>
        </li>
        <li className='product-card__attribute'>
          <p className="product-card__attribute-title">
            RAM
          </p>
          <p className="product-card__attribute-value">
            {ram}
          </p>
        </li>
      </ul>
      <div className="product-card__buttons">
        <button className='product-card__cart-button'>
          Add to cart
        </button>

        <button className='product-card__favorite-button'>
        </button>
      </div>
    </article>
  );
};