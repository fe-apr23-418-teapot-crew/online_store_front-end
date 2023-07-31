import React from 'react';
import { ProductsLayout } from '../../layout/ProductsLayout/ProductsLayout';

interface PhonesProps {}

export const Phones: React.FC<PhonesProps> = () => {
  return <ProductsLayout path="phones" title="Mobile Phones" pathAPI="products" />;
};
