import React from 'react';
import styles from './Categories.module.scss';
import phones from '../../images/categories_1.svg';
import tablets from '../../images/categories_2.svg';
import accessories from '../../images/categoties_3.svg';
import { useNavigate } from 'react-router-dom';

export const Categories = () => {
  const navigate = useNavigate();

  const handleNavigate = (endpoint: string) => {
    navigate(endpoint);
  };

  return (
    <> 
      <section className={styles.categories}>
        <div className={styles.container}>
          <h2 className={styles.categories_title}>
            Shop by category
          </h2>

          <div className={styles.categories_container}>
            <div className={styles.categories_product}>
              <img 
                src={phones} 
                alt="PHONES" 
                className={styles.categories_imgFirst}
                onClick={() => handleNavigate('phones')}
              />

              <h4 className={styles.categories_type}>
                Mobile Phones
              </h4>

              <p className={styles.categories_models}>
                100 models
              </p>
            </div>

            <div className={styles.categories_product}>
              <img 
                src={tablets} 
                alt="TABLETS" 
                className={styles.categories_imgSecond}
                onClick={() => handleNavigate('tablets')}
              />

              <h4 className={styles.categories_type}>
                Tablets
              </h4>

              <p className={styles.categories_models}>
                100 models
              </p>
            </div>

            <div className={styles.categories_product}>
              <img 
                src={accessories} 
                alt="ACCESSORIES" 
                className={styles.categories_imgThird}
                onClick={() => handleNavigate('accessories')}
              />

              <h4 className={styles.categories_type}>
                Accessories
              </h4>

              <p className={styles.categories_models}>
                100 models
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};