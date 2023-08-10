import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './ModalWindow.module.scss';
import logo from '../../icons/Logo.svg';
import close from '../../icons/Close.svg';

export const ModalWindow = () => {
  const [isModal, setIsModal] = useState(true);
  const closeModal = () => {
    return () => setIsModal(false);
  };

  return (
    <div className={cn(styles.modal, { [styles['is-active']]: isModal })}>
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
          <img src={logo} alt="Logo" className={styles.modal__header__logo} />

          <NavLink onClick={closeModal} to="/">
            <button
              className={styles.modal__header__icon__close}
              onClick={closeModal}
            >
              <img src={close} alt="CloseButton" />
            </button>
          </NavLink>
        </div>

        <div className={styles.modal__message}>
          Thank you for shopping in our store!
        </div>

        <h1
          className={styles.modal__text}
        >
          Be Happy
        </h1>

        <NavLink onClick={closeModal} to="/">
          <button className={styles.modal__button}>OK</button>
        </NavLink>
      </div>
    </div>
  );
};
