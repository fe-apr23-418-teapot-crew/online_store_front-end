import React from 'react';
import { Product } from '../../types/Product';
import './ProductCard';

type Props = {
  product: Product,
};

export const Card: React.FC<Props> = ({ product }) => {
  return(
    <article className='product-card'>
      <img
        src={product.image}
        className='product-card__image'
        alt={product.name}
      >
      </img>
      <h2 className="product-card__name">
        {product.name}
      </h2>
      <div className="product-card__prices">
        <div className="product-card__price">
          {product.price}
        </div>
        <div className="product-card__fullprice">
          {product.fullPrice}
        </div>
      </div>
      <ul className="product-card__attributes">
        <li className='product-card__attribute'>
          <p className="product-card__attribute-title">
            Screen
          </p>
          <p className="product-card__attribute-value">
            {product.screen}
          </p>
        </li>
        <li className='product-card__attribute'>
          <p className="product-card__attribute-title">
            Screen
          </p>
          <p className="product-card__attribute-value">
            {product.screen}
          </p>
        </li>
        <li className='product-card__attribute'>
          <p className="product-card__attribute-title">
            Screen
          </p>
          <p className="product-card__attribute-value">
            {product.screen}
          </p>
        </li>
      </ul>
    </article>
  );
};