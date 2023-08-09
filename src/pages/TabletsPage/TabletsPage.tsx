import React from 'react';
import { Outlet } from 'react-router-dom';
import { ProductsLayout } from '../../layout/ProductsLayout/ProductsLayout';

export const TabletsPage: React.FC = () => {
  return (
    <ProductsLayout category="tablets">
      <Outlet />
    </ProductsLayout>
  );
};
