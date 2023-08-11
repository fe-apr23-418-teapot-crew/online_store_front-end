import React, { useContext, useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../icons/Logo.svg';
import logoBurger from '../../icons/LogoForBurger.svg';
// import user from '../../icons/User.svg';
// import logOut from '../../icons/Logout.svg';
// import closeMenu from '../../icons/Close.svg';
// import menu from '../../icons/Menu.svg';
import { MenuLink } from '../MenuLink';
import { StorageContext } from '../../contexts/StorageContext';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { Link, useLocation } from 'react-router-dom';
import { CartIcon } from '../../icons2/CartIcon';
import { FavIcon } from '../../icons2/FavIcon';
import { User } from '../../types/User';
import { AuthScreens } from '../AuthScreens/AuthScreens';
import { resetStoredItems } from '../../helpers/localStorage/resetStoredItems';
import { getStoredItem } from '../../helpers/localStorage/getStoredItem';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { MenuIcon } from '../../icons2/MenuIcon';
import { CloseIcon } from '../../icons2/CloseIcon';

export const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { favsProducts, cartProducts } = useContext(StorageContext);
  const location = useLocation();

  const { pathname, search } = location;

  const favsProductsCount = favsProducts.length;
  const cartProductsCount = cartProducts.length;
  const isFavsEmpty = favsProductsCount < 1;
  const isCartEmpty = cartProductsCount < 1;
  const [isLogging, setIsLogging] = useState(false);
  const [isRegistration, setIsRegistration] = useState(false);
  const storedUser = getStoredItem('user');
  const [loggedUser, setLoggedUser] = useState<User | null>(storedUser);

  const handleLogOut = () => {
    setLoggedUser(null);
    resetStoredItems('user');
  };

  console.log(loggedUser);

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

      <div className={styles.header__buttons}>
        <div className={styles.header__button}>
          <ThemeSwitcher />
        </div>

        <div className={styles.header__button}>
          <MenuLink
            isBurgerItem={true}
            to="/favourites"
            path="Favourites"
            isPages={true}
          >
            <FavIcon />
          </MenuLink>

          {!isFavsEmpty && (
            <div className={styles.header__productsCount}>
              {favsProductsCount}
            </div>
          )}
        </div>

        <div className={styles.header__button}>
          <MenuLink isBurgerItem={true} to="/cart" path="Cart" isPages={true}>
            <CartIcon />
          </MenuLink>

          {!isCartEmpty && (
            <div className={styles.header__productsCount}>
              {cartProductsCount}
            </div>
          )}
        </div>

        {loggedUser ?
          <div className={styles.header__authUserData}>
            <p className={styles.header__authUserName}>{loggedUser.email.split('@')[0]}</p>
            <div className={styles.header__button}>
              <Link
                to={'/'}
                className={styles.header__authButton}
                onClick={handleLogOut}
              >
                <ExitToAppOutlinedIcon sx={{ width: '20px' }} />
              </Link>
            </div>
          </div>
          : <div className={styles.header__button}>
            <Link
              to={pathname}
              className={styles.header__authButton}
              onClick={() => setIsLogging(true)}
            >
              <PersonOutlinedIcon sx={{ width: '24px' }} />
            </Link>
          </div>
        }
        {isLogging && <AuthScreens
          loggedUser={loggedUser}
          isRegistration={isRegistration}
          setIsLogging={setIsLogging}
          setLoggedUser={setLoggedUser}
          setIsRegistration={setIsRegistration}
        />}


      </div>

      <div
        className={styles.header__buttonBurgerMenu}
        onClick={() => setIsBurgerMenuOpen((prevState) => !prevState)}
      >
        <Link to={`${pathname}${search}`} className={styles.header__buttonMenu}>
          <MenuIcon />
        </Link>
      </div>

      {
        isBurgerMenuOpen && (
          <div className={styles.burger}>
            <div className={styles.container}>
              <div className={styles.header__logo}>
                <img
                  src={logoBurger}
                  alt="LOGO"
                  className={styles.header__logoImage}
                />
              </div>

              <div className={styles.header__burgerContainer}>
                <div className={styles.header__button}>
                  <ThemeSwitcher />
                </div>
                {loggedUser ?
                  <div className={styles.header__authUserData}>
                    <p className={styles.header__authUserName}>{loggedUser.email.split('@')[0]}</p>
                    <div className={styles.header__button}>
                      <Link
                        to={'/'}
                        className={styles.header__authButton}
                        onClick={handleLogOut}
                      >
                        <ExitToAppOutlinedIcon sx={{ width: '20px' }} />
                      </Link>
                    </div>
                  </div>
                  : <div className={styles.header__button}>
                    <Link
                      to={pathname}
                      className={styles.header__authButton}
                      onClick={() => setIsLogging(true)}
                    >
                      <PersonOutlinedIcon sx={{ width: '24px' }} />
                    </Link>
                  </div>
                }
                {isLogging && <AuthScreens
                  loggedUser={loggedUser}
                  isRegistration={isRegistration}
                  setIsLogging={setIsLogging}
                  setLoggedUser={setLoggedUser}
                  setIsRegistration={setIsRegistration}
                />}

                <div
                  className={styles.header__buttonBurgerMenu}
                  onClick={() => setIsBurgerMenuOpen((prevState) => !prevState)}
                >
                  <Link
                    to={`${pathname}${search}`}
                    className={styles.header__buttonMenu}
                  >
                    <CloseIcon />
                  </Link>
                </div>
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
        )
      }
    </header >
  );
};
