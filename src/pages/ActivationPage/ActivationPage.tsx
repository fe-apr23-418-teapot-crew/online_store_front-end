import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { getActivation } from '../../api/products';
import { User } from '../../types/User';
import styles from './ActivationPage.module.scss';

export const ActivationPage = () => {
  const { activationToken } = useParams();
  const token = activationToken || '';
  const { data } = useQuery<User>('activationToken', () =>
    getActivation(token),
  );

  return (
    <section className={styles.activationPage}>
      <h1 className={styles.activationPage__title}>Account activated!</h1>
      <p className={styles.activationPage__message}>
        Your email {data?.email} was succesfully registered!
      </p>
      <Link to="/" className={styles.activationPage__link}>
        Home page
      </Link>
    </section>
  );
};
