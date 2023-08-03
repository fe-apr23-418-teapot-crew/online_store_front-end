import React from 'react';
import styles from './About.module.scss';
import { DetailedProduct } from '../../types/DetailedProduct';

interface Props {
  product: DetailedProduct
}

export const About: React.FC<Props> = ({ product }) => {
  return (
    <section className={styles.about}>
      <h3 className={styles.about__header}>About</h3>
      <div className={styles.about__description}>
        {product.description.map((desc) => (
          <React.Fragment key={desc.title}>
            <h4 className={styles['about__description-title']}>{desc.title}</h4>
            <p className={styles['about__description-text']}>{desc.text}</p>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};