import { IconButton } from '@mui/material';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleSelectThemeClick = () => {
    if (theme === 'dark') {
      setTheme('light');

      return;
    }

    setTheme('dark');
  };

  return (
    <IconButton
      className={styles.themeSwitcher__icons}
      onClick={handleSelectThemeClick}
    >
      {theme === 'dark' ? (
        <Brightness4Icon
          fontSize="small"
          className={styles.themeSwitcher__icon}
        />
      ) : (
        <Brightness7Icon
          fontSize="small"
          className={styles.themeSwitcher__icon}
        />
      )}
    </IconButton>
  );
};
