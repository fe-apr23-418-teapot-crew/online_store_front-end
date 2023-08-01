import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './MenuLink.module.scss';

interface MenuLinkProps {
  to: string;
  path: string;
}

export const MenuLink: React.FC<MenuLinkProps> = ({ to, path }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(styles.menuLink, {
        'styles.menuLink-active': isActive,
      })
    }
  >
    {path}
  </NavLink>
);
