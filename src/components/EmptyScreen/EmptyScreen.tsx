import React from 'react';
import styles from './EmptyScreen.module.scss';

interface EmptyScreenProps {}

export const EmptyScreen: React.FC<EmptyScreenProps> = () => {
  return (
    <section className={styles.emptyScreen}>
      <h1 className={styles.emptyScreen__title}>There is no items here!</h1>
      <img
        className={styles.emptyScreen__img}
        src="https://creativeeducator.tech4learning.com/v02/articles/images/articles_blank_main.jpg"
        alt="EMPTY PAGE"
      />
    </section>
  );
};
