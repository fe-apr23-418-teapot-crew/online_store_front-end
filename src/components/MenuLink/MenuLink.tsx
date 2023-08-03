import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './MenuLink.module.scss';

interface MenuLinkProps {
  to: string;
  path: string;
  children?: React.ReactNode;
  isBurgerItem?: boolean;
}

export const MenuLink: React.FC<MenuLinkProps> = ({
  to,
  path,
  children,
  isBurgerItem,
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(styles.menuLink, {
        [styles['menuLink--active']]: isActive,
        [styles['menuLink--burger']]: isBurgerItem,
      })
    }
  >
    {children ? children : path}
  </NavLink>
);
