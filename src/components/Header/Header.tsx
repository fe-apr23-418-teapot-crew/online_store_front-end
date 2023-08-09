import React, { useContext, useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../icons/Logo.svg';
import logoBurger from '../../icons/LogoForBurger.svg';
import closeMenu from '../../icons/Close.svg';
import menu from '../../icons/Menu.svg';
import { MenuLink } from '../MenuLink';
import { StorageContext } from '../../contexts/StorageContext';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { CartIcon } from '../../icons2/CartIcon';
import { FavIcon } from '../../icons2/FavIcon';

export const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { favsProducts, cartProducts } = useContext(StorageContext);

  const favsProductsCount = favsProducts.length;
  const cartProductsCount = cartProducts.length;
  const isFavsEmpty = favsProductsCount < 1;
  const isCartEmpty = cartProductsCount < 1;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.header__logo}>
          <img src={logo} alt="LOGO" className={styles.header__logoImage} />
        </a>

        <div className={styles.header__menuItems}>
          <MenuLink to="/" path="Home" />
          <MenuLink to="/phones" path="Phones" />
          <MenuLink to="/tablets" path="Tablets" />
          <MenuLink to="/accessories" path="Accessories" />
        </div>
      </div>

      <div className={styles.header__themeSwitcherWrapper}>
        <ThemeSwitcher />
      </div>

      <div className={styles.header__buttons}>
        <div className={styles.header__button}>
          <MenuLink isBurgerItem={true} to="/favourites" path="Favourites">
            <FavIcon />
          </MenuLink>

          {!isFavsEmpty && (
            <div className={styles.header__productsCount}>
              {favsProductsCount}
            </div>
          )}
        </div>

        <div className={styles.header__button}>
          <MenuLink isBurgerItem={true} to="/cart" path="Cart">
            <CartIcon />
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
        <a href="#" className={styles.header__buttonMenu}>
          <img src={menu} alt="MENU" />
        </a>
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
              <a href="#" className={styles.header__buttonMenu}>
                <img src={closeMenu} alt="CLOSE MENU" />
              </a>
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
                <FavIcon />
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
                <CartIcon />
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
