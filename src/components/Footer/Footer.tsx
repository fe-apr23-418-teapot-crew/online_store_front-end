import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <div className={s.footer_logo}>
          <img 
            // src={}
            alt="LOGO"
            className={s.footer_logoImage}
          />
        </div>

        <div className={s.footer_menuItems}>
          <a href="#" className={s.footer_menuLink}>Github</a>
          <a href="#" className={s.footer_menuLink}>Contacts</a>
          <a href="#" className={s.footer_menuLink}>Rights</a>
        </div>

        <div className={s.footer_menuItems__back}>
          <a href="#" className={s.footer_menuItems_title}>Back to top</a>
          <a href="#" className={s.footer_menuItems_link}>
            {/* <img src={} alt="BACK TO TOP" /> */}
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
