import React, { useState, useMemo } from 'react';
import phones from './phones.json';
import cn from 'classnames';
import './Pagination.scss';

// ! Used the phones file instead of server data

interface Props {
  currentPage: number;
  pages: number;
}

export const Pagination: React.FC<Props> = ({ currentPage, pages }) => {
  const [activePage, setActivePage] = useState(currentPage);
  const [translateX, setTranslateX] = useState(0);
  const lastPage = Math.ceil(phones.length/pages); 
  const displayedPhones = useMemo(() => {
    return phones.filter(
      (phone) => +phone.id > pages * (activePage - 1) && +phone.id <= pages * activePage
    );
  }, [phones, pages, activePage]);
  
  const pageNumbers = useMemo(() => {
    const lastPage = Math.ceil(phones.length / pages);
    return Array.from({ length: lastPage }, (_, index) => index + 1);
  }, [phones, pages]);
  
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
    if (activePage >= lastPage - 3) {
      return;
    }
    setTranslateX(translateX - 40);
  };
  
  return (
    <>
      <section className='phones'>
        {displayedPhones.map((phone) => (
          <React.Fragment key={phone.id}>
            <p>{phone.name}</p>
            <p className='text'>{phone.id}</p>
          </React.Fragment>
        ))}
      </section>
      <aside className='pagination'>
        <button className='pagination__button pagination__button--arrow' onClick={handleMoveLeft}>
          {'<'}
        </button>
        <div
          className='pagination__pages-list-container'
        >
          <div
            className='pagination__pages-list'
            style={{
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.3s ease',
            }}
          >
            {pageNumbers.map((num) => (
              <button
                className={cn('pagination__button', {
                  'pagination__button--active': activePage === num,
                })}
                key={num}
                onClick={() => setActivePage(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
        <button className='pagination__button pagination__button--arrow' onClick={handleMoveRight}>
          {'>'}
        </button>
      </aside>
    </>
  );
};