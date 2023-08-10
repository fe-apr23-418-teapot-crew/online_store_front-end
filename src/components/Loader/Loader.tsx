import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Loader.module.scss';

interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className={styles.loader}>
      <CircularProgress
        className={styles.loader__muiLoader}
        color="info"
        size={70}
      />
    </div>
  );
};
