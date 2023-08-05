import React from 'react';
import { Product } from '../types/Product';

interface FavsContextType {
  favsProducts: Product[];
  addFavProduct: (product: Product) => void;
  removeFavProduct: (productId: number) => void;
}

export const FavsContext = React.createContext<FavsContextType>({
  favsProducts: [],
  addFavProduct: () => {},
  removeFavProduct: () => {},
});
