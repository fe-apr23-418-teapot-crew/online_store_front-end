import React, { useEffect, useState } from 'react';
import styles from './HotPriceModels.module.scss';
import { ProductCard } from '../Product/ProductCard';
import leftButton from '../../icons/ArrowLeft.svg';
import rightButton from '../../icons/ArrowRight.svg';
import { Product } from '../../types/Product';
import { API_URL } from '../../consts/api';

export const HotPriceModels: React.FC = () => {
  const [hotPricedProducts, setHotPriceModels] = useState<Product[]>([]);
  const [position, setPosition] = useState(0);

  const fetchHotPriceModels = () => {
    fetch(`${API_URL}products/discount`)
      .then((response) => response.json())
      .then((data) => setHotPriceModels(data.rows.slice(0, 8)));
  };

  useEffect(() => {
    fetchHotPriceModels();
  }, []);

  const cardInfo = document.getElementById('ProductCard');
  const cardWidth = cardInfo?.offsetWidth;
  console.log(cardInfo, hotPricedProducts);
  const moveCard = (cardWidth ? cardWidth + 16 : 230) * position;

  return (
    <div className={styles.hotPricedProuctsSwiper}>
      <div className={styles.hotPricedProuctsSwiper__head}>
        <h2 className={styles.hotPricedProuctsSwiper__title}>Hot prices</h2>
        <div className={styles.hotPricedProuctsSwiper__buttons}>
          <button
            className={styles.hotPricedProuctsSwiper__button}
            onClick={() => {
              setPosition((position) => position - 1);
            }}
            disabled={position === 0}
          >
            <img
              src={leftButton}
              alt="previous button"
              className={styles.button__image}
            />
          </button>
          <button
            className={styles.hotPricedProuctsSwiper__button}
            onClick={() => {
              setPosition((position) => position + 1);
            }}
            disabled={position === hotPricedProducts.length - 1}
          >
            <img
              src={rightButton}
              alt="next button"
              className={styles.button__image}
            />
          </button>
        </div>
      </div>

      <div className={styles.hotPricedProuctsSwiper__cards}>
        {hotPricedProducts.map((product) => (
          <div
            style={{ transform: `translateX(-${moveCard}px)` }}
            key={product.id}
            className={styles.hotPricedProuctsSwiper__card}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
