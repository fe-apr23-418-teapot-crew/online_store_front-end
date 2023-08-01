import React from 'react';
import s from './Header.module.scss';
import logo from '../../images/Logo.svg';
import likes from '../../images/Favourites (Heart Like).svg';
import shopBag from '../../images/Shopping bag (Cart).svg';
import menu from '../../images/Menu.svg';

export const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <div className={s.header_logo}>
            <img 
              src={logo} 
              alt="LOGO" 
              className={s.header_logoImage}
            />
          </div>

          <div className={s.header_menuItems}>
            <a href="#" className={s.header_menuLink}>Home</a>
            <a href="#" className={s.header_menuLink}>Phones</a>
            <a href="#" className={s.header_menuLink}>Tablets</a>
            <a href="#" className={s.header_menuLink}>Accessories</a>
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

        <div className={s.header_buttonBurgerMenu}>
          <a href="#" className={s.header_buttonMenu}>
            <img src={menu} alt="MENU" />
          </a>
        </div>
      </header>
    </>
  );
};