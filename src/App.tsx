import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavLayout } from './layout/NavLayout';
import { Home } from './pages/Home';
// import { NotFound } from './pages/NotFound';
import { Phones } from './pages/Phones';
import './App.scss';
import { Tablets } from './pages/Tablets';
import { Accessories } from './pages/Accessories';

export const App = () => (
  <div className='app'>
    <header><Header /></header>
    <main className='streched'>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="phones" element={<Phones />}>
            <Route path=":selectedSlug" element={<Phones />} />
          </Route>

      <Route path="tablets" element={<Tablets />}>
        <Route path=":selectedSlug" element={<Tablets />} />
      </Route>

      <Route path="accessories" element={<Accessories />}>
        <Route path=":selectedSlug" element={<Accessories/>} />
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  </Routes>
);
