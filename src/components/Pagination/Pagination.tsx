import React, { useState, useMemo, useEffect } from 'react';
import cn from 'classnames';
import styles from './Pagination.module.scss';
import { useSearchParams } from 'react-router-dom';

interface Props {
  productsOnPage: number;
  productsNumber: number;
  changeOffset: (serverData: string) => void;
}

export const Pagination: React.FC<Props> = ({ productsOnPage, productsNumber, changeOffset }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activePage, setActivePage] = useState<number>(1);
  const [translateX, setTranslateX] = useState(0);
  const lastPage = Math.ceil(productsNumber / productsOnPage);

  const pageNumbers = useMemo(() => {
    const lastPage = Math.ceil(productsNumber / productsOnPage);
    return Array.from({ length: lastPage }, (_, index) => index + 1);
  }, [productsNumber, productsOnPage]);

  useEffect(() => {
    searchParams.set('offset', `${productsOnPage * (activePage - 1)}`);
    setSearchParams(searchParams);
  }, [productsOnPage, activePage]);

  const handleMoveLeft = () => {
    if (activePage === 1) {
      setActivePage(1);
      changeOffset(`${productsOnPage * (activePage - 1)}`);
      return;
    }
    setActivePage(activePage - 1);
    if (activePage < 5 && translateX === 0) {
      changeOffset(`${productsOnPage * (activePage - 1)}`);
      return;
    }
    setTranslateX(translateX + 40);
    changeOffset(`${productsOnPage * (activePage - 1)}`);
  };

  const handleMoveRight = () => {
    if (activePage === lastPage) {
      setActivePage(activePage);
      changeOffset(`${productsOnPage * (activePage - 1)}`);
      return;
    }
    if (lastPage <= 4) {
      setActivePage(activePage + 1);
      changeOffset(`${productsOnPage * (activePage - 1)}`);
      return;
    }
    setActivePage(activePage + 1);
    if (activePage >= lastPage - 3 && translateX === (lastPage - 4) * -40) {
      return;
    }
    setTranslateX(translateX - 40);
    changeOffset(`${productsOnPage * (activePage - 1)}`);
  };

  return (
    <aside className={styles.pagination}>
      <button
        className={`${styles.pagination__button} ${styles['pagination__button--arrow']}`}
        onClick={handleMoveLeft}
      >
        {'<'}
      </button>
      <div className={styles.pagination__pagesListContainer}>
        <div
          className={styles.pagination__pagesList}
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
      <button
        className={`${styles.pagination__button} ${styles['pagination__button--arrow']}`}
        onClick={handleMoveRight}
      >
        {'>'}
      </button>
    </aside>
  );
};
