import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavLayout } from './layout/NavLayout';
import { Home } from './pages/Home';
// import { NotFound } from './pages/NotFound';
import { Phones } from './pages/Phones';

export const App = () => (
  <Routes>
    <Route path="/" element={<NavLayout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Navigate to="/" replace />} />

      <Route path="phones" element={<Phones />}>
        <Route path=":selectedSlug" element={<Phones />} />
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  </Routes>
);
