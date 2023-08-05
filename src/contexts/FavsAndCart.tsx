import React from 'react';
import { Product } from '../types/Product';

interface FavsAndCartContextType {
  storedCartItems: Product[];
  storedFavsItems: Product[];
}

export const FavsAndCartContext = React.createContext<FavsAndCartContextType>({
  storedCartItems: [],
  storedFavsItems: [],
});
