import React from 'react';
import { NavigationLink } from '../NavigationLink';

export const Navigation: React.FC = () => (
  <nav
    className="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <ul className="navbar_list">
        <NavigationLink to="/" path="Home" />
        <NavigationLink to="/phones" path="Phones" />
        <NavigationLink to="/tablets" path="Tablets" />
        <NavigationLink to="/accessories" path="Accessories" />
      </ul>
    </div>
  </nav>
);