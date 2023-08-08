import React from 'react';
import { Outlet } from 'react-router-dom';
import { ProductsLayout } from '../../layout/ProductsLayout/ProductsLayout';

export const PhonesPage: React.FC = () => {
  return (
    <ProductsLayout path="phones" title="Mobile Phones">
      <Outlet />
    </ProductsLayout>
  );
};
