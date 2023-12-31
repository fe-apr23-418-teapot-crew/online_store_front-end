import React, {
  useEffect,
  useState,
} from 'react';
import styles from './AuthScreens.module.scss';
// import closeIcon from '../../icons/Close.svg';
// import arrowLeft from '../../icons/ArrowLeft.svg';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import { User } from '../../types/User';
import { addNewItem } from '../../helpers/localStorage/addNewItem';
import { Loader } from '../Loader';
import { CloseIcon } from '../../icons2/CloseIcon';

interface Props {
    loggedUser: User | null;
    isRegistration: boolean;
    setIsLogging: (arg: boolean) => void;
    setIsRegistration: (arg: boolean) => void;
    setLoggedUser: (arg: User) => void;
}

export const AuthScreens: React.FC<Props> = ({
  isRegistration,
  setIsLogging,
  setLoggedUser,
  setIsRegistration,
}) => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    setIsLoading(true);

    const existingUser = {
      email: userEmail,
      password,
    };

    try {
      const response = await fetch('https://online-store-api-swbg.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(existingUser),
      });
  
      if (!response.ok) {
        throw new Error(`Server ${response.statusText}${response.status}`);
      }
      const responseData = await response.json();
      const newUser = responseData.user;
      setLoggedUser(newUser);

      setIsLogging(false);

      addNewItem('user', newUser);

      return responseData;

    } catch (error) {
      setErrorMessage('Wrong e-mail or password!');
    } finally {
      
      setIsLoading(false);
    }
  };
  
  const handleUserEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
    setIsDataLoaded(false);
  };
  
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsDataLoaded(false);
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    fetchUser();
    setIsDataLoaded(true);
    
   

    // setErrorMessage('Wrong e-mail or password');
  };
  const handleReg = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    if (password.length < 8) {
      setErrorMessage('Password must consist of at least 8 chars');
      setIsDataLoaded(true);
      setIsLoading(false);
      return;
    }
    const newUser = {
      email: userEmail,
      password: password,
    };
  
    try {
      const response = await fetch('https://online-store-api-swbg.onrender.com/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setIsUserRegistered(true);
      console.log('New user created:', newUser);
    } catch (error) {

      console.log('New EEEEERRRR:');
      
      setErrorMessage('User with this email already exists');
    }
    setTimeout(() => {
      setIsDataLoaded(true);
      setIsLoading(false);
    }, 2000);
  };
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div>
      <section className={styles.auth}>
        {isRegistration ? (
          <>
            {isLoading ? (
              <Loader />
            ) : (
              <div className={styles.auth__container}>
                <div className={styles.auth__header}>
                  <h4>Registration</h4>
                  <div className={styles.auth__navButtons}>
                    {!isUserRegistered && (
                      <div
                        className={styles.auth__icon}
                        // src={arrowLeft}
                        onClick={() => {
                          setIsRegistration(false);
                          setIsDataLoaded(false);
                        }}
                        // alt="BACK"
                      >
                        <KeyboardArrowLeftRoundedIcon sx={{width: '20px'}}/>
                      </div>
                    )}
                    <div
                      className={styles.auth__icon}
                      // src={closeIcon}
                      onClick={() => {
                        setIsRegistration(false);
                        setIsLogging(false);
                      }}
                      // alt="CLOSE ICON"
                    >
                      <CloseIcon />
                    </div>
                  </div>
                </div>
                {isUserRegistered ? (
                  <p className={styles.auth__success}>
                    Please check your email to finish the registration of your
                    account
                  </p>
                ) : (
                  <form className={styles.auth__form} onSubmit={handleReg}>
                    <div className={styles.auth__formSection}>
                      <label htmlFor="email" className={styles.auth__formLabel}>
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
                    {isDataLoaded ? (
                      <div className={styles.auth__error}>{errorMessage}</div>
                    ) : (
                      <div className={styles.auth__error}></div>
                    )}
                    <button
                      type="submit"
                      className={styles.auth__formButton}
                      disabled={!userEmail || !password}
                    >
                      {'Sign in'}
                    </button>
                  </form>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            {isLoading ? (
              <Loader />
            ) : (
              <div className={styles.auth__container}>
                <div className={styles.auth__header}>
                  <h4>Log in</h4>
                  <div
                    className={styles.auth__icon}
                    // src={closeIcon}
                    onClick={() => setIsLogging(false)}
                    // alt="CLOSE ICON"
                  >
                    <CloseIcon />
                  </div>
                </div>
                <form className={styles.auth__form} onSubmit={handleLogin}>
                  <div className={styles.auth__formSection}>
                    <label htmlFor="email" className={styles.auth__formLabel}>
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
                  {isDataLoaded && (
                    <div className={styles.auth__error}>{errorMessage}</div>
                  )}
                  <button
                    type="submit"
                    className={styles.auth__formButton}
                    disabled={!userEmail || !password}
                  >
                    Log in
                  </button>
                  <p className={styles.auth__formLabel}>
                    {'Don\'t have an account?'}
                  </p>
                  <button
                    type="button"
                    className={`${styles.auth__formButton} ${styles['auth__formButton--light']}`}
                    onClick={() => {
                      setIsRegistration(true);
                      setIsDataLoaded(false);
                    }}
                  >
                    Sign up
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};