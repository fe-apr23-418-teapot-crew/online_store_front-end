import React, { useContext, useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../icons/Logo.svg';
import logoBurger from '../../icons/LogoForBurger.svg';
import likes from '../../icons/Favourites (Heart Like).svg';
import shopBag from '../../icons/Shopping bag (Cart).svg';
import closeMenu from '../../icons/Close.svg';
import menu from '../../icons/Menu.svg';
import { MenuLink } from '../MenuLink';
import { StorageContext } from '../../contexts/StorageContext';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { favsProducts, cartProducts } = useContext(StorageContext);
  const location = useLocation();

  const { pathname, search } = location;

  const favsProductsCount = favsProducts.length;
  const cartProductsCount = cartProducts.length;
  const isFavsEmpty = favsProductsCount < 1;
  const isCartEmpty = cartProductsCount < 1;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__logo}>
          <img src={logo} alt="LOGO" className={styles.header__logoImage} />
        </div>

        <div className={styles.header__menuItems}>
          <MenuLink to="/" path="Home" />
          <MenuLink to="/phones" path="Phones" />
          <MenuLink to="/tablets" path="Tablets" />
          <MenuLink to="/accessories" path="Accessories" />
        </div>
      </div>

      <div className={styles.header__buttons}>
        <ThemeSwitcher />

        <div className={styles.header__button}>
          <MenuLink isBurgerItem={true} to="/favourites" path="Favourites">
            <img src={likes} alt="LIKES" />
          </MenuLink>

          {!isFavsEmpty && (
            <div className={styles.header__productsCount}>
              {favsProductsCount}
            </div>
          )}
        </div>

        <div className={styles.header__button}>
          <MenuLink isBurgerItem={true} to="/cart" path="Cart">
            <img src={shopBag} alt="SHOPING BAG" />
          </MenuLink>

          {!isCartEmpty && (
            <div className={styles.header__productsCount}>
              {cartProductsCount}
            </div>
          )}
        </div>
      </div>

      <div
        className={styles.header__buttonBurgerMenu}
        onClick={() => setIsBurgerMenuOpen((prevState) => !prevState)}
      >
        <Link to={`${pathname}${search}`} className={styles.header__buttonMenu}>
          <img src={menu} alt="MENU" />
        </Link>
      </div>

      {isBurgerMenuOpen && (
        <div className={styles.burger}>
          <div className={styles.container}>
            <div className={styles.header__logo}>
              <img
                src={logoBurger}
                alt="LOGO"
                className={styles.header__logoImage}
              />
            </div>

            <div
              className={styles.header__buttonBurgerMenu}
              onClick={() => setIsBurgerMenuOpen((prevState) => !prevState)}
            >
              <Link to={`${pathname}${search}`} className={styles.header__buttonMenu}>
                <img src={closeMenu} alt="CLOSE MENU" />
              </Link>
            </div>
          </div>

          <div className={styles.burgerMenuItems}>
            <MenuLink to="/" path="Home" onClick={setIsBurgerMenuOpen} />
            <MenuLink
              to="/phones"
              path="Phones"
              onClick={setIsBurgerMenuOpen}
            />
            <MenuLink
              to="/tablets"
              path="Tablets"
              onClick={setIsBurgerMenuOpen}
            />
            <MenuLink
              to="/accessories"
              path="Accessories"
              onClick={setIsBurgerMenuOpen}
            />
          </div>

          <div className={styles.burgerButtons}>
            <div className={styles.burgerButton}>
              <MenuLink
                isBurgerItem={true}
                to="/favourites"
                path="Favourites"
                onClick={() => setIsBurgerMenuOpen(false)}
              >
                <img src={likes} alt="LIKES" />
              </MenuLink>

              {!isFavsEmpty && (
                <div
                  className={`${styles['header__productsCount']} ${styles['header__productsCount--burger']}`}
                >
                  {favsProductsCount}
                </div>
              )}
            </div>

            <div className={styles.burgerButton}>
              <MenuLink
                isBurgerItem={true}
                to="/cart"
                path="Cart"
                onClick={() => setIsBurgerMenuOpen(false)}
              >
                <img src={shopBag} alt="SHOPING BAG" />
              </MenuLink>

              {!isCartEmpty && (
                <div
                  className={`${styles['header__productsCount']} ${styles['header__productsCount--burger']}`}
                >
                  {cartProductsCount}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
