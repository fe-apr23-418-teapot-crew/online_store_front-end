import React, { useCallback, useState } from 'react';
import { FavsContext } from '../contexts/FavsContext';
import { getStoredItems } from '../helpers/localStorage/getStoredItems';
import { removeStoredItem } from '../helpers/localStorage/removeStoredItem';
import { setStoredItem } from '../helpers/localStorage/setStoredItem';
import { Product } from '../types/Product';

interface FavsProviderProps {
  children: React.ReactNode;
}

export const FavsProvider: React.FC<FavsProviderProps> = ({ children }) => {
  const storedFavsProducts = getStoredItems('favs');
  const [favsProducts, setFavsProducts] = useState(storedFavsProducts);

  const addFavProduct = useCallback((newProduct: Product) => {
    setStoredItem('favs', newProduct);

    setFavsProducts((prevProducts: Product[]) => [...prevProducts, newProduct]);
  }, []);

  const removeFavProduct = useCallback((productId: number) => {
    removeStoredItem('favs', productId);

    setFavsProducts((prevProducts: Product[]) =>
      prevProducts.filter((product) => product.id !== productId),
    );
  }, []);

  return (
    <FavsContext.Provider
      value={{ favsProducts, addFavProduct, removeFavProduct }}
    >
      {children}
    </FavsContext.Provider>
  );
};
