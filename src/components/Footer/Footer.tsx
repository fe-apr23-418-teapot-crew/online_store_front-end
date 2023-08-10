import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../icons/Logo.svg';
import slider from '../../icons/Vector (Stroke).svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  const GITHUB_URL = 'https://github.com/fe-apr23-418-teapot-crew';
    
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <a href="/" className={styles.footer__logo}>
          <img
            src={logo}
            alt="Nice Gadgets logo"
            className={styles.footer__logoImage}
          />
        </a>
      </div>

      <nav className={styles.footer__menuLinks}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <a href={GITHUB_URL} className={styles.list__link}>
              Github
            </a>
          </li>
          <li className={styles.list__item}>
            <Link to={'/contacts'} className={styles.list__link}>
              Contacts
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link to={'/rights'} className={styles.list__link}>
              Rights
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.footer__moveTop}>
        <div className={styles.backToTop}>
          Back to top
          <button
            className={styles.backToTop__button}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth', // Use smooth scrolling behavior
              });
            }}
          >
            <img
              src={slider}
              alt="BACK TO TOP"
              className={styles.backToTop__pic}
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
