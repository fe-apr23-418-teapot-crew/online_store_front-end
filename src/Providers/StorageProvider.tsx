import React, { useCallback, useState } from 'react';
import { StorageContext } from '../contexts/StorageContext';
import { getStoredItems } from '../helpers/localStorage/getStoredItems';
import { removeStoredItem } from '../helpers/localStorage/removeStoredItem';
import { resetStoredItems } from '../helpers/localStorage/resetStoredItems';
import { setStoredItem } from '../helpers/localStorage/setStoredItem';
import { Product } from '../types/Product';

const FAVS_LOCAL_STORAGE_KEY = 'favs';
const CART_LOCAL_STORAGE_KEY = 'cart';

interface StorageProviderProps {
  children: React.ReactNode;
}

export const StorageProvider: React.FC<StorageProviderProps> = ({
  children,
}) => {
  const [favsProducts, setFavsProducts] = useState<Product[]>(
    getStoredItems(FAVS_LOCAL_STORAGE_KEY) || [],
  );
  const [cartProducts, setCartProducts] = useState<Product[]>(
    getStoredItems(CART_LOCAL_STORAGE_KEY) || [],
  );

  const addToStorage = useCallback((key: string, newProduct: Product) => {
    setStoredItem(key, newProduct);

    if (key === FAVS_LOCAL_STORAGE_KEY) {
      setFavsProducts((prevProducts: Product[]) => [
        ...prevProducts,
        newProduct,
      ]);
    }

    if (key === CART_LOCAL_STORAGE_KEY) {
      setCartProducts((prevProducts: Product[]) => [
        ...prevProducts,
        newProduct,
      ]);
    }
  }, []);

  const removeFromStorage = useCallback((key: string, productId: number) => {
    removeStoredItem(key, productId);

    if (key === FAVS_LOCAL_STORAGE_KEY) {
      setFavsProducts((prevProducts: Product[]) =>
        prevProducts.filter((product) => product.id !== productId),
      );
    }

    if (key === CART_LOCAL_STORAGE_KEY) {
      setCartProducts((prevProducts: Product[]) =>
        prevProducts.filter((product) => product.id !== productId),
      );
    }
  }, []);

  const resetStorage = useCallback((key: string) => {
    resetStoredItems(key);

    if (key === FAVS_LOCAL_STORAGE_KEY) {
      setFavsProducts([]);
    }

    if (key === CART_LOCAL_STORAGE_KEY) {
      setCartProducts([]);
    }
  }, []);

  return (
    <StorageContext.Provider
      value={{
        favsProducts,
        cartProducts,
        addToStorage,
        removeFromStorage,
        resetStorage,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
