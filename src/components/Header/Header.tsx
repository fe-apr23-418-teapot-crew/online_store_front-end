import React, { useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../images/Logo.svg';
import logoBurger from '../../images/LogoForBurger.svg';
import likes from '../../images/Favourites (Heart Like).svg';
import shopBag from '../../images/Shopping bag (Cart).svg';
import user from '../../icons/User.svg';
import logOut from '../../icons/Logout.svg';
import closeMenu from '../../images/Close.svg';
import menu from '../../images/Menu.svg';
import { MenuLink } from '../MenuLink';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { User } from '../../types/User';
import { AuthScreens} from '../AuthScreens/AuthScreens';

export const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [isRegistration, setIsRegistration] = useState(false);
  const [loggedUser, setLoggedUser] = useState<User | null>(
    null
  );
  const { pathname } = useLocation();

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
          {loggedUser
            ? <div className={styles.header__authUserData}>
              <p className={styles.header__authUserName}>{loggedUser.email.split('@')[0]}</p>
              <Link 
                to={'/'}
                className={styles.header__authButton}
                onClick={() => setLoggedUser(null)}
              >
                <img src={logOut} alt="LOG OUT" />
              </Link>
            </div>
            : <Link 
              to={pathname}
              className={styles.header__authButton}
              onClick={() => setIsLogging(true)}
            >
              <img src={user} alt="USER AUTH" />
            </Link>
          
          }
          {isLogging && <AuthScreens
            loggedUser={loggedUser}
            isRegistration={isRegistration}
            setIsLogging={setIsLogging}
            setLoggedUser={setLoggedUser}
            setIsRegistration={setIsRegistration}
          />}
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
              <MenuLink 
                to="/" 
                path="Home" 
                onClick={setIsBurgerMenuOpen} 
              />
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
              <NavLink 
                to="/favourites" 
                className={styles.burgerButton}
                onClick={() => setIsBurgerMenuOpen(false)}
              >
                <img src={likes} alt="LIKES" />
              </NavLink>

              <NavLink 
                to="/cart" 
                className={styles.burgerButton}
                onClick={() => setIsBurgerMenuOpen(false)}
              >
                <img src={shopBag} alt="SHOPPING BAG" />
              </NavLink>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
