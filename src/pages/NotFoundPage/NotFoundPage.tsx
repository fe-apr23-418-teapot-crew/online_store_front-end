import React from 'react';
import s from './NotFoundPage.module.scss';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className={s.section}>
      <h1 className={s.section__title}>Oops!</h1>
      <p>Sorry, we can’t find the page you’re looking for.</p>
      <Link to="/" className={s.section__link}>
        Home page
      </Link>
      <img
        className={s.section__img}
        src="https://www.mtwmag.com/wp-content/uploads/2018/06/manufacturing-Error.jpg"
      />
    </div>
  );
};
