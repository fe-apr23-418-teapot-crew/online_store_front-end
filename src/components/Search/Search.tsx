import React, { useCallback, useState } from 'react';
import styles from './Search.module.scss';

type Props = {
  query?: string;
  changeQuery: (query: string) => void;
};

export const Search: React.FC<Props> = ({ query, changeQuery }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [inputValue, setInputValue] = useState(query);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const debounce = (func: Function, delay: number) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: unknown[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedChangeQuery = useCallback(
    debounce((value: string) => {
      changeQuery(value);
    }, 1000),
    [],
  );

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputValue(value);
    debouncedChangeQuery(value);
  }

  return (
    <div className={styles['search-filter']}>
      <input
        className={styles.search__input}
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </div>
  );
};
