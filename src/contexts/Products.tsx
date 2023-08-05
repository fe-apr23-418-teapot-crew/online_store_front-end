import React from 'react';
import { APIResponse } from '../types/APIResponse';

interface ProductsContextType {
  data: APIResponse | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const ProductsContext = React.createContext<ProductsContextType>({
  data: undefined,
  isLoading: true,
  error: null,
});
