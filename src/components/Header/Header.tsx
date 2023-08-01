import React, { useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../images/Logo.svg';
import logoBurger from '../../images/LogoForBurger.svg';
import likes from '../../images/Favourites (Heart Like).svg';
import shopBag from '../../images/Shopping bag (Cart).svg';
import closeMenu from '../../images/Close.svg';
import menu from '../../images/Menu.svg';
import { MenuLink } from '../MenuLink';

export const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header_logo}>
            <img src={logo} alt="LOGO" className={styles.header_logoImage} />
          </div>

          <div className={styles.header_menuItems}>
            <MenuLink to="/" path="Home" />
            <MenuLink to="/phones" path="Phones" />
            <MenuLink to="/tablets" path="Tablets" />
            <MenuLink to="/accessories" path="Accessories" />
          </div>
        </div>

        <div className={styles.header_buttons}>
          <MenuLink isBurgerItem={true} to="/favourites" path="Favourites">
            <img src={likes} alt="LIKES" />
          </MenuLink>

          <MenuLink isBurgerItem={true} to="/cart" path="Cart">
            <img src={shopBag} alt="SHOPING BAG" />
          </MenuLink>
        </div>

        <div
          className={styles.header_buttonBurgerMenu}
          onClick={() => setIsBurgerMenuOpen((prevState) => !prevState)}
        >
          <a href="#" className={styles.header_buttonMenu}>
            <img src={menu} alt="MENU" />
          </a>
        </div>

        {isBurgerMenuOpen && (
          <div className={styles.burger}>
            <div className={styles.container}>
              <div className={styles.header_logo}>
                <img
                  src={logoBurger}
                  alt="LOGO"
                  className={styles.header_logoImage}
                />
              </div>

              <div
                className={styles.header_buttonBurgerMenu}
                onClick={() => setIsBurgerMenuOpen((prevState) => !prevState)}
              >
                <a href="#" className={styles.header_buttonMenu}>
                  <img src={closeMenu} alt="CLOSE MENU" />
                </a>
              </div>
            </div>

            <div className={styles.burgerMenuItems}>
              <MenuLink to="/" path="Home" />
              <MenuLink to="/phones" path="Phones" />
              <MenuLink to="/tablets" path="Tablets" />
              <MenuLink to="/accessories" path="Accessories" />
            </div>

            <div className={styles.burgerButtons}>
              <a href="#" className={styles.burgerButton}>
                <img src={likes} alt="LIKES" />
              </a>

              <a href="#" className={styles.burgerButton}>
                <img src={shopBag} alt="SHOPPING BAG" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
