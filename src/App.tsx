import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { TabletsPage } from './pages/TabletsPage';
import { ProductPage } from './pages/ProductPage';
import { FavsPage } from './pages/FavsPage/FavsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { CartPage } from './pages/CartPage/CartPage';
import { ErrorPage } from './pages/ErrorPage';
import { ActivationPage } from './pages/ActivationPage';
import './styles/App.scss';
import { OrderPage } from './pages/OrderPage';
import { RightsPage } from './pages/RightsPage/RightsPage';
import { ContactsPage } from './pages/ContactsPage';

export const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" replace />} />

      <Route path="phones/:productId" element={<ProductPage />} />
      <Route path="phones" element={<PhonesPage />} />

      <Route path="tablets/:productId" element={<ProductPage />} />
      <Route path="tablets" element={<TabletsPage />} />

      <Route path="accessories/:productId" element={<ProductPage />} />
      <Route path="accessories" element={<AccessoriesPage />} />

      <Route path="favourites" element={<FavsPage />} />

      <Route path="cart" element={<CartPage />} />

      <Route path="orders" element={<OrderPage />} />

      <Route path="error" element={<ErrorPage />} />

      <Route path="rights" element={<RightsPage />} />

      <Route path="contacts" element={<ContactsPage />} />

      <Route path="activation/:activationToken" element={<ActivationPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
