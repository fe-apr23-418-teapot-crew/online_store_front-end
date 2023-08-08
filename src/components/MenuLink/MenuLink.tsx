import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './MenuLink.module.scss';

interface MenuLinkProps {
  to: string;
  path: string;
  children?: React.ReactNode;
  isBurgerItem?: boolean;
  onClick?: (value: boolean) => void;
}

export const MenuLink: React.FC<MenuLinkProps> = ({
  to,
  path,
  children,
  isBurgerItem,
  onClick,
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(styles.menuLink, {
        [styles['menuLink--active']]: isActive,
        [styles['menuLink--burger']]: isBurgerItem,
      })
    }
    onClick={onClick ? () => onClick(false) : () => {}}
  >
    {children ? children : path}
  </NavLink>
);
