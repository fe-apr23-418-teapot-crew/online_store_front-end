import React from 'react';
import { useQuery } from 'react-query';
import { fetchProducts } from '../api/products';
import { ProductsContext } from '../contexts/Products';
import { APIResponse } from '../types/APIResponse';

interface ProductsProviderProps {
  children: React.ReactNode;
}

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const { data, isLoading, error } = useQuery<APIResponse>(
    'products',
    fetchProducts,
  );

  return (
    <ProductsContext.Provider
      value={{ data, isLoading, error: error as Error | null }}
    >
      {children}
    </ProductsContext.Provider>
  );
};