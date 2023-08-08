import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { TabletsPage } from './pages/TabletsPage';
import { ProductPage } from './components/Product/ProductPage';
import { FavsPage } from './pages/FavsPage/FavsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
//import { CartPage } from './pages/CartPage';
import { CartPage } from './pages/CartPage/CartPage';
import './styles/App.scss';

export const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="homepage" element={<Navigate to="/" replace />} />

      <Route path="phonespage/:productId" element={<ProductPage />} />
      <Route path="phonespage" element={<PhonesPage />} />

      <Route path="tabletspage/:productId" element={<ProductPage />} />
      <Route path="tabletspage" element={<TabletsPage />}></Route>

      <Route path="accessories/:productId" element={<ProductPage />} />
      <Route path="accessories" element={<AccessoriesPage />} />

      <Route path="favourites" element={<FavsPage />} />

      <Route path="cart" element={<CartPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
