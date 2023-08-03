import React from 'react';
import { ProductsLayout } from '../../layout/ProductsLayout/ProductsLayout';
// import styles from './Favourites.module.scss';
interface FavouritesProps {}

export const Favourites: React.FC<FavouritesProps> = () => {
  return (
    <ProductsLayout
      path="favourites"
      title="Favourites"
      pathAPI="favourites"
      localStorageItem="favouritesItems"
    />
  );
};

export default Favourites;
