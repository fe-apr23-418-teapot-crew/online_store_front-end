import React  from 'react';
import styles from './Categories.module.scss';
import phones from '../../images/categories_1.svg';
import tablets from '../../images/categories_2.svg';
import accessories from '../../images/categoties_3.svg';
import { useNavigate } from 'react-router-dom';
import { getCountOfCategory } from '../../api/products';
import { useErrorHandling } from '../../hooks/useErrorHandling';
import { useQuery } from 'react-query';

export const Categories = () => {
  const navigate = useNavigate();
  const { data, error } = useQuery('countCategoryProducts', getCountOfCategory);

  const { handleError } = useErrorHandling();

  const phonesCount = data?.[0];
  const tabletsCount = data?.[1];
  const accessoriesCount = data?.[2];

  if (error) {
    handleError(error);
  }

  const handleNavigate = (endpoint: string) => {
    navigate(endpoint);
  };

  return (
    <section className={styles.categories}>
      <h2 className={styles.categories_title}>Shop by category</h2>
      <div className={styles.container}>
        <div className={styles.categories_container}>
          <div className={styles.categories_product}>
            <img
              src={phones}
              alt="PHONES"
              className={`${styles['categories_image']} ${styles['categories_imgFirst']}`}
              onClick={() => handleNavigate('phones')}
            />

            <h4 className={styles.categories_type}>Mobile Phones</h4>

            <p className={styles.categories_models}>
              {phonesCount} models
            </p>
          </div>

          <div className={styles.categories_product}>
            <img
              src={tablets}
              alt="TABLETS"
              className={`${styles['categories_image']} ${styles['categories_imgSecond']}`}
              onClick={() => handleNavigate('tablets')}
            />

            <h4 className={styles.categories_type}>Tablets</h4>

            <p className={styles.categories_models}>
              {tabletsCount} models
            </p>
          </div>

          <div className={styles.categories_product}>
            <img
              src={accessories}
              alt="ACCESSORIES"
              className={`${styles['categories_image']} ${styles['categories_imgThird']}`}
              onClick={() => handleNavigate('accessories')}
            />

            <h4 className={styles.categories_type}>Accessories</h4>

            <p className={styles.categories_models}>
              {accessoriesCount} models
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
