import React, { useState, useMemo } from 'react';
import cn from 'classnames';
import styles from './Pagination.module.scss';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types/Product';

// ! Used the phones file instead of server data

interface Props {
  pages: number;
  products: Product[];
}

export const Pagination: React.FC<Props> = ({ pages, products }) => {
  const [activePage, setActivePage] = useState<number>(1);
  const [translateX, setTranslateX] = useState(0);
  const lastPage = Math.ceil(products.length/pages); 
  const displayedPhones = useMemo(() => {
    return products.filter(
      (phone) => +phone.id > pages * (activePage - 1) && +phone.id <= pages * activePage
    );
  }, [products, pages, activePage]);
  
  const pageNumbers = useMemo(() => {
    const lastPage = Math.ceil(products.length / pages);
    return Array.from({ length: lastPage }, (_, index) => index + 1);
  }, [products, pages]);
  
  const handleMoveLeft = () => {
    if (activePage === 1) {
      setActivePage(1);
      return;
    }
    setActivePage(activePage - 1);
    if (activePage < 5 && translateX === 0) {
      return;
    }
    setTranslateX(translateX + 40);
  };
  
  const handleMoveRight = () => {
    if (activePage === lastPage) {
      setActivePage(activePage);
      return;
    }
    setActivePage(activePage + 1);
    if (activePage >= lastPage - 3 && translateX === (lastPage - 4) * -40) {
      return;
    }
    setTranslateX(translateX - 40);
  };
  
  return (
    <>
      <ul>
        {displayedPhones.map((gadget) => (
          <ProductCard key={gadget.id} product={gadget} />
        ))}
      </ul>
      <aside className={styles.pagination}>
        <button className={`${styles.pagination__button} ${styles['pagination__button--arrow']}`} onClick={handleMoveLeft}>
          {'<'}
        </button>
        <div
          className={styles['pagination__pages-list-container']}
        >
          <div
            className={styles['pagination__pages-list']}
            style={{
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.3s ease',
            }}
          >
            {pageNumbers.map((num) => (
              <button
                className={cn(styles.pagination__button, {
                  [styles['pagination__button--active']]: activePage === num,
                })}
                key={num}
                onClick={() => setActivePage(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
        <button className={`${styles.pagination__button} ${styles['pagination__button--arrow']}`} onClick={handleMoveRight}>
          {'>'}
        </button>
      </aside>
    </>
  );
};