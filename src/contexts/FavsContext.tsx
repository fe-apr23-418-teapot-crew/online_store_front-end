import React from 'react';
import { Product } from '../types/Product';

interface FavsContextType {
  favsProducts: Product[];
  cartProducts: Product[];
  addToStorage: (key: string, newProduct: Product) => void;
  removeFromStorage: (key: string, productId: number) => void;
  resetStorage: (key: string) => void;
}

export const FavsContext = React.createContext<FavsContextType>({
  favsProducts: [],
  cartProducts: [],
  addToStorage: () => {},
  removeFromStorage: () => {},
  resetStorage: () => {},
});
