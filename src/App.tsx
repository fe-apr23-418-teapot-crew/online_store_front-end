import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { Home } from './pages/Home';
// import { NotFound } from './pages/NotFound';
import { Phones } from './pages/Phones';
import './styles/App.scss';
import { Tablets } from './pages/Tablets';
import { Accessories } from './pages/Accessories';
import { Cart } from './pages/Cart';
import { Favourites } from './pages/Favourites';
import { ProductPage } from './components/ProductPage';

export const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Navigate to="/" replace />} />

      <Route path="phones" element={<Phones />}>
        <Route path=":selectedSlug" element={<Phones />} />
      </Route>

      <Route path="tablets" element={<Tablets />}>
        <Route path=":selectedSlug" element={<Tablets />} />
      </Route>

      <Route path="accessories" element={<Accessories />}>
        <Route path=":selectedSlug" element={<Accessories />} />
      </Route>

      <Route path="favourites" element={<Favourites />}>
        <Route path=":selectedSlug" element={<Favourites />} />
      </Route>

      <Route path="cart" element={<Cart />}>
        <Route path=":selectedSlug" element={<Cart />} />
      </Route>

      <Route path="/product/:productId" element={<ProductPage />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  </Routes>
);
