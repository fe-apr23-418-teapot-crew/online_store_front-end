import React, { useEffect, useState } from 'react';
import styles from './AuthScreens.module.scss';
// import cn from 'classnames';
import closeIcon from '../../icons/Close.svg';

interface Props {
    setIsLogging: (arg: boolean) => void;
    setIsRegistration: (arg: boolean) => void;
    setLoggedUser: (arg: {
        userEmail: string;
        password: string;
        userName: string;
        // photo: string | null;
    }) => void;
}

interface RegProps {
    setIsRegistration: (arg: boolean) => void;
    setLoggedUser: (arg: {
        userEmail: string;
        password: string;
        userName: string;
        // photo: string | null;
    }) => void;
}

const usersFromServer: {
    userEmail: string;
    password: string;
    userName: string;
    // photo: string | null;
}[] = [
  {
    userEmail: 'user@user.ua',
    password: '123456',
    userName: 'Johan_Johanson89987754',
    // photo: 'https://www.nj.com/resizer/iqV2J-QFgh0227ybHBor4exTVBk=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg',
  },
  {
    userEmail: 'user@user.ua',
    password: '123456',
    userName: 'Johan_Johanson89987754',
    // photo: '',
  },
];

export const AuthScreens: React.FC<Props> = ({
  setIsLogging,
  setLoggedUser,
  setIsRegistration,
}) => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
      setIsLogging(false);
      return;
    }
    setErrorMessage('Wrong e-mail or password');
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
          {errorMessage &&
            <div
              className={styles.auth__error}
            >
              {errorMessage}
            </div>}
          <button 
            type="submit"
            className={styles.auth__formButton}
            disabled={!userEmail || !password}
          >
            Log in
          </button>
          <p className={styles.auth__formLabel}>
            {'Don\'t have an account? Sign Up'}
          </p>
          <button 
            type="button"
            className={`${styles.auth__formButton} ${styles['auth__formButton--light']}`}
            onClick={() => {
              setIsRegistration(true);
              setIsLogging(false);
            }} 
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};
export const RegScreens: React.FC<RegProps> = ({
//   setLoggedUser,
  setIsRegistration,
}) => {
  const [users, setUsers] = useState(usersFromServer);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorMessage, setErrorMessage] = useState('');

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleUserEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userEmail || !userName || !password) {
      setErrorMessage('Please enter data required');
      return;
    }
    setUsers((prevUsers) => [
      ...prevUsers,
      {
        userEmail,
        userName,
        password,
      }
    ]);
    console.log('users -', users);
    // setIsRegistration(false);
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
          <h4>Registration</h4>
          <img
            className={styles.auth__icon}
            src={closeIcon}
            onClick={() => setIsRegistration(false)}
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
              htmlFor="userName"
              className={styles.auth__formLabel}
            >
                User name:
            </label>
            <input
              type="text"
              id="userName"
              className={styles.auth__formInput}
              value={userName}
              onChange={handleUserNameChange}
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
          {errorMessage &&
            <div
              className={styles.auth__error}
            >
              {errorMessage}
            </div>}
          <button 
            type="submit"
            className={styles.auth__formButton}
            disabled={!userEmail || !userName || !password}
          >
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
};
    