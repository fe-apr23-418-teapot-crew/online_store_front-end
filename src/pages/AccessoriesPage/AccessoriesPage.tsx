import React from 'react';
import { Outlet } from 'react-router-dom';
import { ProductsLayout } from '../../layout/ProductsLayout/ProductsLayout';

export const AccessoriesPage: React.FC = () => {
  return (
    <ProductsLayout category="accessories">
      <Outlet />
    </ProductsLayout>
  );
};
