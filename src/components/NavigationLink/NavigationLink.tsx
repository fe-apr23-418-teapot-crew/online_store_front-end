import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface NavigationLinkProps {
  to: string;
  path: string
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({ to, path }) => (
  <NavLink
    to={to}
    className={({ isActive }) => cn(
      'navbar-item', {
        'has-background-grey-lighter': isActive,
      },
    )}
  >
    {path}
  </NavLink>
);