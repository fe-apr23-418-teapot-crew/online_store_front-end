import React from 'react';
import { Product } from '../types/Product';

interface StorageContextType {
  selectedProductId: number;
  addSelectedId: (id: number) => void;
  removeSelectedId: () => void;
  favsProducts: Product[];
  cartProducts: Product[];
  addToStorage: (key: string, newProduct: Product) => void;
  removeFromStorage: (key: string, productId: number) => void;
  resetStorage: (key: string) => void;
}

export const StorageContext = React.createContext<StorageContextType>({
  selectedProductId: 0,
  addSelectedId: () => {},
  removeSelectedId: () => {},
  favsProducts: [],
  cartProducts: [],
  addToStorage: () => {},
  removeFromStorage: () => {},
  resetStorage: () => {},
});
