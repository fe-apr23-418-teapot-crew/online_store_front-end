import React from 'react';
import home from '../../icons/Home.svg';
import styles from './LocationHistory.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { DetailedProduct } from '../../types/DetailedProduct';

interface LocationHistoryProps {
  path: string;
  productDetails?: DetailedProduct | null;
}

export const LocationHistory: React.FC<LocationHistoryProps> = ({ productDetails }) => {
  const location = useLocation();
  const productUrl = location.pathname.slice(1);

  const pathParts = productUrl.split('/');
  const parentRoute = `/${pathParts[0]}`;

  return (
    <div className={styles.locationHistory}>
      <Link to="/">
        <img src={home} className={styles.locationHistory__homeIcon} alt="Home" />
      </Link>

      {pathParts.length > 1 && productDetails ? (
        <ul className={styles.locationHistory__list}>
          <li className={styles.locationHistory__item}>
            <Link className={styles.locationHistory__link} to={parentRoute}>
              {`> ${pathParts[0]}`}
            </Link>
          </li>
          <li className={styles.locationHistory__item}>{`> ${productDetails.name}`}</li>
        </ul>
      ) : (
        <div className={styles.locationHistory__item}>{`> ${productUrl}`}</div>
      )}
    </div>
  );
};