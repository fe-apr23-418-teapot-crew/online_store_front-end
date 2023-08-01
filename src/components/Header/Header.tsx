import React, { useState } from 'react';
import s from './Header.module.scss';
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
      <header className={s.header}>
        <div className={s.container}>
          <div className={s.header_logo}>
            <img src={logo} alt="LOGO" className={s.header_logoImage} />
          </div>

          <div className={s.header_menuItems}>
            <MenuLink to="/" path="Home" />
            <MenuLink to="/phones" path="Phones" />
            <MenuLink to="/tablets" path="Tablets" />
            <MenuLink to="/accessories" path="Accessories" />
          </div>
        </div>

        <div className={s.header_buttons}>
          <a href="#" className={s.header_button}>
            <img src={likes} alt="LIKES" />
          </a>

          <a href="#" className={s.header_button}>
            <img src={shopBag} alt="SHOPING BAG" />
          </a>
        </div>

        <div 
          className={s.header_buttonBurgerMenu}
          onClick={() => setIsBurgerMenuOpen(prevState => !prevState)}
        >
          <a 
            href="#" 
            className={s.header_buttonMenu}
          >
            <img src={menu} alt="MENU" />
          </a>
        </div>

        {isBurgerMenuOpen && (
          <div className={s.burger}>
            <div className={s.container}>
              <div className={s.header_logo}>
                <img 
                  src={logoBurger} 
                  alt="LOGO" 
                  className={s.header_logoImage}
                />
              </div>

              <div 
                className={s.header_buttonBurgerMenu}
                onClick={() => setIsBurgerMenuOpen(prevState => !prevState)}
              >
                <a href="#" className={s.header_buttonMenu}>
                  <img src={closeMenu} alt="CLOSE MENU" />
                </a>
              </div>
            </div>

            <div className={s.burgerMenuItems}>
              <a href="#" className={s.burgerMenuLink}>Home</a>
              <a href="#" className={s.burgerMenuLink}>Phones</a>
              <a href="#" className={s.burgerMenuLink}>Tablets</a>
              <a href="#" className={s.burgerMenuLink}>Accessories</a>
            </div>

            <div className={s.burgerButtons}>
              <a href="#" className={s.burgerButton}>
                <img src={likes} alt="LIKES" />
              </a>

              <a href="#" className={s.burgerButton}>
                <img src={shopBag} alt="SHOPPING BAG" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
