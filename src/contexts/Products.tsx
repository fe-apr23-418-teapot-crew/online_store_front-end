import React from 'react';
import { ApiResponse } from '../types/APIResponse';

interface ProductsContextType {
  data: ApiResponse | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const ProductsContext = React.createContext<ProductsContextType>({
  data: undefined,
  isLoading: true,
  error: null,
});
