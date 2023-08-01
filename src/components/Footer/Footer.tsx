import React from 'react';
import s from './Footer.module.scss';
import logo from '../../images/Logo.svg';
import slider from '../../icons/Vector (Stroke).svg';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__content}>
        <a href="/" className={s.footer__logo}>
          <img 
            src={logo}
            alt="Nice Gadgets logo"
            className={s.footer__logoImage}
          />
        </a>
      </div>

      <nav className={s.footer__menuLinks}>
        <ul className={s.list}>
          <li className={s.list__item}>
            <a href="#" className={s.list__link}>Github</a>
          </li>
          <li className={s.list__item}>
            <a href="#" className={s.list__link}>Contacts</a>
          </li>
          <li className={s.list__item}>
            <a href="#" className={s.list__link}>Rights</a>
          </li>
        </ul>       
      </nav>

      <div className={s.footer__moveTop}>
        <div className={s.backToTop}>
            Back to top
          <a href='#' className={s.backToTop__button}>
            <img 
              src={slider}
              alt='BACK TO TOP' 
              className={s.backToTop__pic}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
