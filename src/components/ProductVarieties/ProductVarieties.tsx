import React, {} from 'react';
import styles from './ProductVarieties.module.scss';
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { DetailedProduct } from '../../types/DetailedProduct';
import { fetchProduct } from '../ProductPage';
import { API_URL } from '../../consts/api';

interface Props {
  product: DetailedProduct
  changeProduct: (item: DetailedProduct) => void;
}

interface Colors {
  [key: string]: string;
}

const colorMap: Colors = {
  starlight: '#f0e9e7',
  sierrablue: '#80a7c3',
  skyblue: '#d2e2ee',
  gold: '#FCDBC1',
  rosegold: '#f5d8c9',
  spacegray: '#1b1c1d',
  midnightgreen: '#253622',
  midnight: '#232322',
  graphite: '#252a2d',
  spaceblack: '#1b1c1d',
};

function generateRandomId() {
  
  const min = 100000;
  const max = 999999;

  const randomId = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomId.toString();
}

export const ProductVarieties: React.FC<Props> = ({
  product,
  changeProduct
}) => {
  const { colorsAvailable, capacityAvailable } = product;
  const id = generateRandomId();
  const { pathname } = useLocation();
  const updatePath = (pathname: string, changingPart: string, newPath: string) => {
    let divider: string = 'gb-';
    if (pathname.includes('tb-')) {
      divider = 'tb-';
    }
    if (pathname.includes('mm-')) {
      divider = 'mm-';
    }
    if (changingPart === 'color') {
      const pathnameParts = pathname.split(divider);
      pathnameParts.splice(-1, 1, newPath.replace(/\s+/g, '-'));
      return pathnameParts.join(divider);
    }
    if (changingPart === 'capacity') {
      if (!pathname.includes(divider) && pathname.includes('tb-')) {
        divider = 'tb-';
      }
      const pathnameParts = pathname.split(divider);
      const newUrl = pathnameParts[0].split('-');
      newUrl.splice(-1, 1, newPath, pathnameParts[1]);
      return newUrl.join('-');
    }
    
    return;
  };

  const handleChangeProduct = () => {
    fetchProduct({
      url: `${API_URL}${pathname.slice(1)}`,
      setFunc: changeProduct,
      errorText: 'Error fetching product details:',
    });
  };
  return (
    <section className={styles.varieties}>
      <div className={styles.varieties__header}>
        <h6 className={styles.varieties__title}>Available colors</h6>
        <p className={styles.varieties__productId}>ID: {id}</p>
      </div>
      <div className={styles.varieties__wrapper}>
        {colorsAvailable.map((color) => (
          <Link 
            key={color}
            to={`${updatePath(pathname, 'color', color)}`}
            style={{ backgroundColor: colorMap[color.replace(/ /g, '')] || color }}
            className={cn(styles.varieties__colorsItem, {
              [styles['varieties__colorsItem--active']]: color === product.color.replace(/-/g, ' ')
            })}
            onClick={handleChangeProduct}
          >
          </Link>
        ))}
      </div>
      <h6 className={styles.varieties__title}>Select capacity</h6>
      <div className={styles.varieties__wrapper}>
        {capacityAvailable.map((capacity) => (
          <Link 
            key={capacity}
            to={`${updatePath(pathname, 'capacity', capacity.toLowerCase())}`}
            className={cn(styles.varieties__capacityItem, {
              [styles['varieties__capacityItem--active']]: capacity === product.capacity
            })}
            onClick={handleChangeProduct}
          >
            {capacity}
          </Link>
        ))}
      </div>
    </section>
  );
};
    