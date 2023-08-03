import React from 'react';
import styles from './About.module.scss';
import { ProductMain } from '../../types/ProductMain';

interface Props {
    product: ProductMain
}

export const About: React.FC<Props> = ({ product }) => {
  return (
    <section className={styles.about}>
      <h3 className={styles.about__header}>
        About
      </h3>
      <div className={styles.about__description}>
        {product.description.map(desc => (
          <>
            <h4 className={styles['about__description-title']}>
              {desc.title}
            </h4>
            <p className={styles['about__description-text']}>
              {desc.text}
            </p>
          </>
        ))}
      </div>
    </section>
  );
};