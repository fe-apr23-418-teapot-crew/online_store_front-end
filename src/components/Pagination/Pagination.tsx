import React, { useMemo, useEffect } from 'react';
import cn from 'classnames';
import styles from './Pagination.module.scss';
import { useSearchParams } from 'react-router-dom';

interface Props {
  activePage: number;
  offset: string;
  productsOnPage: number;
  productsNumber: number;
  changePage: (page: number) => void;
  changeOffset: (serverData: string) => void;
}

export const Pagination: React.FC<Props> = ({
  activePage,
  productsOnPage,
  productsNumber,
  changeOffset,
  changePage,
  offset,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lastPage = Math.ceil(productsNumber / productsOnPage);

  const pageNumbers = useMemo(() => {
    const lastPage = Math.ceil(productsNumber / productsOnPage);
    return Array.from({ length: lastPage }, (_, index) => index + 1);
  }, [productsNumber, productsOnPage]);

  useEffect(() => {
    searchParams.set('offset', `${productsOnPage * (activePage - 1)}`);
    setSearchParams(searchParams);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  useEffect(() => {
    searchParams.set('offset', '0');
    changePage(activePage);
    console.log('activePage -', activePage);
    console.log('productsOnPage -', productsOnPage);
    console.log('offset -', offset);
  }, [productsOnPage]);

  const handleMoveLeft = () => {
    if (activePage === 1) {
      changePage(1);
      changeOffset(`${productsOnPage * (activePage - 1)}`);
      return;
    }
    changePage(activePage - 1);
    if (activePage) {
      changeOffset(`${productsOnPage * (activePage - 1)}`);
      return;
    }
    changeOffset(`${productsOnPage * (activePage - 1)}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMoveRight = () => {
    if (activePage === lastPage) {
      changePage(activePage);
      changeOffset(`${productsOnPage * (activePage - 1)}`);
      return;
    }
    if (lastPage <= 4) {
      changePage(activePage + 1);
      changeOffset(`${productsOnPage * (activePage - 1)}`);
      return;
    }
    changePage(activePage + 1);
    if (activePage >= lastPage - 3) {
      return;
    }
    changeOffset(`${productsOnPage * (activePage - 1)}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside className={styles.pagination}>
      <button
        className={`${styles.pagination__button} ${styles['pagination__button--arrow']}`}
        onClick={handleMoveLeft}
        disabled={activePage === 1}
      >
        {'<'}
      </button>
      <div className={styles.pagination__pagesListContainer}>
        <div className={styles.pagination__pagesList}>
          {pageNumbers.map((num) => (
            <button
              className={cn(styles.pagination__button, {
                [styles['pagination__button--active']]: activePage === num,
              })}
              key={num}
              onClick={() => {
                changePage(num);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
      <button
        className={`${styles.pagination__button} ${styles['pagination__button--arrow']}`}
        onClick={handleMoveRight}
        disabled={activePage === lastPage}
      >
        {'>'}
      </button>
    </aside>
  );
};
