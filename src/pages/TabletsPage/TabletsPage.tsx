import React from 'react';
import { Outlet } from 'react-router-dom';
import { ProductsLayout } from '../../layout/ProductsLayout/ProductsLayout';

export const TabletsPage: React.FC = () => {
  return (
    <ProductsLayout path="tablets">
      <Outlet />
    </ProductsLayout>
  );
};
