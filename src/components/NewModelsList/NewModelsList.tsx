import React, { useEffect, useState } from 'react';
import styles from './NewModelsList.module.scss';
import { ProductCard } from '../ProductCard';
import leftButton from '../../icons/ArrowLeft.svg';
import rightButton from '../../icons/ArrowRight.svg';
import { Product } from '../../types/Product';
import { API_URL } from '../../consts/api';

export const NewModelsList: React.FC = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [position, setPosition] = useState(0);

  const fetchNewGoods = () => {
    fetch(`${API_URL}products/new`)
      .then(response => response.json())
      .then(data => setNewProducts(data.rows));
  };

  useEffect(() => {
    fetchNewGoods();
  },[]);

  const cardInfo = document.getElementById('ProductCard');
  const cardWidth = cardInfo?.offsetWidth;
  console.log(cardInfo, newProducts);
  const moveCard = (cardWidth ? cardWidth + 16 : 230) * position;

  return (
    <div className={styles.recommendedPhoneSwiper}>
      <div className={styles.recommendedPhoneSwiper__head}>
        <h2 className={styles.recommendedPhoneSwiper__title}>Brand new models</h2>
        <div className={styles.recommendedPhoneSwiper__buttons}>
          <button
            className={styles.recommendedPhoneSwiper__button}
            onClick={() => {
              setPosition((position) => position - 1);
            }}
            disabled={position === 0}
          >
            <img src={leftButton} alt="previous button" className={styles.button__image} />
          </button>
          <button
            className={styles.recommendedPhoneSwiper__button}
            onClick={() => {
              setPosition((position) => position + 1);
            }}
            disabled={position === newProducts.length - 1}
          >
            <img src={rightButton} alt="next button" className={styles.button__image} />
          </button>
        </div>
      </div>

      <div className={styles.recommendedPhoneSwiper__cards}>
        {newProducts.map((phone) => (
          <div style={{ transform: `translateX(-${moveCard}px)` }} key={phone.id} className={styles.recommendedPhoneSwiper__card}>
            <ProductCard product={phone} />
          </div>
        ))}
      </div>
    </div>
  );
};