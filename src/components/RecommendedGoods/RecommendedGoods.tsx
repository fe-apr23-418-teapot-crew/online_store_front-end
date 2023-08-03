import React, { useEffect, useState } from 'react';
import styles from './RecommendedGoods.module.scss';
import { ProductCard } from '../ProductCard';
import leftButton from '../../icons/ArrowLeft.svg';
import rightButton from '../../icons/ArrowRight.svg';
import { Product } from '../../types/Product';
import { API_URL } from '../../consts/api';

// type Props = {
//    productId: number,

// };

export const RecommendedGoods: React.FC = () => {
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [position, setPosition] = useState(0);
  
  const fetchRecommendedGoods = (productId: number) => {
    fetch(`${API_URL}products/${productId}/recommended`)
      .then(response => response.json())
      .then(data => setRecommendedProducts(data.rows.slice(0, 8)));
  };

  useEffect(() => {
    fetchRecommendedGoods(3);
  },[]);

  const cardInfo = document.getElementById('ProductCard');
  const cardWidth = cardInfo?.offsetWidth;
  console.log(cardInfo, recommendedProducts);
  const moveCard = (cardWidth ? cardWidth + 16 : 230) * position;

  return (
    <div className={styles.phoneSwiper}>
      <div className={styles.phoneSwiper__head}>
        <h2 className={styles.phoneSwiper__title}>You may also like</h2>
        <div className={styles.phoneSwiper__buttons}>
          <button
            className={styles.phoneSwiper__button}
            onClick={() => {
              setPosition((position) => position - 1);
            }}
            disabled={position === 0}
          >
            <img src={leftButton} alt="previous button" className={styles.button__image} />
          </button>
          <button
            className={styles.phoneSwiper__button}
            onClick={() => {
              setPosition((position) => position + 1);
            }}
            disabled={position === recommendedProducts.length - 1}
          >
            <img src={rightButton} alt="next button" className={styles.button__image} />
          </button>
        </div>
      </div>

      <div className={styles.phoneSwiper__cards}>
        {recommendedProducts.map((phone) => (
          <div style={{ transform: `translateX(-${moveCard}px)` }} key={phone.id} className={styles.phoneSwiper__card}>
            <ProductCard product={phone} />
          </div>
        ))}
      </div>
    </div>
  );
};