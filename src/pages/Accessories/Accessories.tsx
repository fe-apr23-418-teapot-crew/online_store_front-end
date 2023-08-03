import React from 'react';
import { ProductsLayout } from '../../layout/ProductsLayout/ProductsLayout';

interface AccessoriesProps {}

export const Accessories: React.FC<AccessoriesProps> = () => {
  return <ProductsLayout path="accessories" title="Accessories" pathAPI="products"/>;
};
