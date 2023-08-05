import React, { useEffect, useState } from 'react';
import { FavsAndCartContext } from '../contexts/FavsAndCart';
import { getStoredItems } from '../helpers/localStorage/getStoredItems';
import { Product } from '../types/Product';

interface FavsAndCartProviderProps {
  children: React.ReactNode;
}

export const FavsAndCartProvider: React.FC<FavsAndCartProviderProps> = ({
  children,
}) => {
  const [storedCartItems, setStoredCartItems] = useState<Product[]>(
    getStoredItems('cart'),
  );
  const [storedFavsItems, setStoredFavsItems] = useState<Product[]>(
    getStoredItems('favs'),
  );

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'cart') {
        setStoredCartItems(getStoredItems('cart'));
      }

      if (event.key === 'favs') {
        setStoredFavsItems(getStoredItems('favs'));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <FavsAndCartContext.Provider value={{ storedCartItems, storedFavsItems }}>
      {children}
    </FavsAndCartContext.Provider>
  );
};
