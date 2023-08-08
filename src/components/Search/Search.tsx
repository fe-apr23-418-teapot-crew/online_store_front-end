import React from 'react';
import styles from './Search.module.scss';

type Props = {
  changeQuery: (query: string) => void,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Search: React.FC<Props> = ({ changeQuery }) => {
  function onChangeQuery(event: React.ChangeEvent<HTMLInputElement>) {
    changeQuery(event.target.value);
  }

  return (
    <div className={styles['search-filter']}>
      <input
        className={styles.search__input}
        type="text"
        placeholder='Search'
        onChange={onChangeQuery}
      >
      </input>
    </div>
  );
};
