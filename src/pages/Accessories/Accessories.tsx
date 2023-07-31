import React from 'react';
import { ProductsLayout } from '../../layout/ProductsLayout/ProductsLayout';

interface AccessoriesProps {}

export const Accessories: React.FC<AccessoriesProps> = () => {
  return <ProductsLayout path="Accessories" title="Accessories" pathAPI="products"/>;
};
