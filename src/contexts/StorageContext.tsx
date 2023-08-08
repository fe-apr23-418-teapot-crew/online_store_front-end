import React from 'react';
import { Product } from '../types/Product';

interface StorageContextType {
  favsProducts: Product[];
  cartProducts: Product[];
  addToStorage: (key: string, newProduct: Product) => void;
  removeFromStorage: (key: string, productId: number) => void;
  resetStorage: (key: string) => void;
}

export const StorageContext = React.createContext<StorageContextType>({
  favsProducts: [],
  cartProducts: [],
  addToStorage: () => {},
  removeFromStorage: () => {},
  resetStorage: () => {},
});
