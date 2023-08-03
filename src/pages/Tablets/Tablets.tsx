import React from 'react';
import { ProductsLayout } from '../../layout/ProductsLayout/ProductsLayout';

interface TabletsProps {}

export const Tablets: React.FC<TabletsProps> = () => {
  return <ProductsLayout path="tablets" title="Tablets" pathAPI="products" />;
};
