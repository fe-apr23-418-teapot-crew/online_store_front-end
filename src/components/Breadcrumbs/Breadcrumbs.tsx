import React from 'react';
// import home from '../../icons/Home.svg';
import styles from './Breadcrumbs.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { DetailedProduct } from '../../types/DetailedProduct';
import rightArrow from '../../icons/ArrowRightSecondary.svg';
import { HomeIcon } from '../../icons2/HomeIcon';

interface BreadcrumbsProps {
  path: string;
  productDetails?: DetailedProduct | null;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ productDetails }) => {
  const location = useLocation();
  const productUrl = location.pathname.slice(1);

  const pathParts = productUrl.split('/');
  const parentRoute = `/${pathParts[0]}`;

  return (
    <div className={styles.locationHistory}>
      <Link className={styles.locationHistory__icon} to="/">
        <div
          // src={home}
          className={styles.locationHistory__homeIcon}
          // alt="Home"
        > 
          <HomeIcon />
        </div>
      </Link>

      {pathParts.length > 1 && productDetails ? (
        <ul className={styles.locationHistory__list}>
          <li className={styles.locationHistory__item}>
            <Link className={styles.locationHistory__link} to={parentRoute}>
              <div className={styles.locationHistory__path}>
                <img
                  className={styles.locationHistory__arrow}
                  src={rightArrow}
                  alt=""
                />
                {`${pathParts[0]}`}
              </div>
            </Link>
          </li>
          <li className={styles.locationHistory__item}>
            <div className={styles.locationHistory__path}>
              <img src={rightArrow} alt="" />
              {`${productDetails.name}`}
            </div>
          </li>
        </ul>
      ) : (
        <div className={styles.locationHistory__item}>
          <div className={styles.locationHistory__path}>
            <img src={rightArrow} alt="" />
            {`${productUrl}`}
          </div>
        </div>
      )}
    </div>
  );
};
