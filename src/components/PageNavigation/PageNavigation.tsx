import React from 'react';
import { MenuLink } from '../MenuLink';
import styles from './PageNavigation.module.scss';
import chevron from '../../icons/Chevron (Arrow Right).svg';

interface PageNavigationProps {
  
}

export const PageNavigation: React.FC<PageNavigationProps> = () => {
  return (
    <div className={styles.pageNavigation}>
      <MenuLink to="/" path="Back">
        <img
          src={chevron}
          alt="Chevron"
          className={styles.pageNavigation__chevronButton}
        />
        <div className={styles.pageNavigation__backButton}>Back</div>
      </MenuLink>
    </div>
  );
};