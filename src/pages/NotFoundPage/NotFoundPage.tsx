import React from 'react';
import styles from './NotFoundPage.module.scss';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.notFoundPage}>
      <h1 className={styles.notFoundPage__title}>Oops!</h1>
      <p className={styles.notFoundPage__message}>
        Sorry, we can’t find the page you’re looking for.
      </p>
      <Link to="/" className={styles.notFoundPage__link}>
        Home page
      </Link>
      <img
        className={styles.section__img}
        src="https://media.istockphoto.com/id/1266144552/vector/emoticon-with-sorry-sign.jpg?s=612x612&w=0&k=20&c=SxPesZy6zIYB2lbY3l8cQgpXaQdeBN_GcHrsOlsc4J8="
      />
    </div>
  );
};
