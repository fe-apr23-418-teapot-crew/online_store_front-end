import React, { useEffect, useState } from 'react';
import styles from './AuthScreens.module.scss';
// import cn from 'classnames';
import closeIcon from '../../icons/Close.svg';

interface Props {
    setIsLogging: (arg: boolean) => void;
    setLoggedUser: (arg: { userEmail: string; password: string; userName: string; }) => void;
}

const usersFromServer: { userEmail: string; password: string; userName: string; }[] = [
  {
    userEmail: 'user@user.ua',
    password: '123456',
    userName: 'Bill',
  }
];

export const AuthScreens: React.FC<Props> = ({
  setIsLogging,
  setLoggedUser,
}) => {
//   const [users, setUsers] = useState(usersFromServer);
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const visitor = usersFromServer.find(
      user => user.userEmail === userEmail && user.password === password
    );
    if (visitor) {
      setLoggedUser(visitor);
      
    } 
    setIsLogging(false);
  };

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
  
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
  return (
    <section className={styles.auth}>
      <div className={styles.auth__container}>
        <div className={styles.auth__header}>
          <h4>Log in</h4>
          <img
            className={styles.auth__icon}
            src={closeIcon}
            onClick={() => setIsLogging(false)}
            alt="CLOSE ICON"
          />
        </div>
        <form
          className={styles.auth__form}
          onSubmit={handleLogin}
        >
          <div className={styles.auth__formSection}>
            <label
              htmlFor="email"
              className={styles.auth__formLabel}
            >
                E-mail:
            </label>
            <input
              type="email"
              id="email"
              className={styles.auth__formInput}
              value={userEmail}
              onChange={handleUserEmailChange}
            />
          </div>
          <div className={styles.auth__formSection}>
            <label
              htmlFor="password"
              className={styles.auth__formLabel}
            >
                Password:
            </label>
            <input
              type="password"
              id="password"
              className={styles.auth__formInput}
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button 
            type="submit"
            className={styles.auth__formButton}
            disabled={!userEmail || !password}
          >
            Log in
          </button>
          {/* <button type="button">Registration</button> */}
        </form>
      </div>
    </section>
  );
};
    