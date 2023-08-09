import React, { ReactNode, useEffect, useState } from 'react';
import styles from './AuthScreens.module.scss';
// import cn from 'classnames';
import closeIcon from '../../icons/Close.svg';
import arrowLeft from '../../icons/ArrowLeft.svg';
import { useQuery } from 'react-query';

export interface User {
    email: string;
    phone: string;
    username: string;
}

interface Props {
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
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isUserRegistered, setIsUserRegistered] = useState(false);

  //   const fetchUsers = async () => {
  //     const response = await fetch('https://mate.acade2my/students-api/users');
  //     return response.json();
  //   };

  //   const { data: users, error, isLoading } = useQuery<User[]>('users', fetchUsers);
  //   console.log('error -', error);

  const fetchUsers = async () => {
    const response = await fetch('https://mate.academy/students-api/users');
    
    if (!response.ok) {
      setErrorMessage('Server error');
      throw new Error('Server error');
    }
  
    return response.json();
  };

  const { data: users, error, isLoading } = useQuery<User[], ReactNode>('users', fetchUsers);

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

    const visitor = users?.find(
      user => user.email === userEmail && user.phone === password
    );
    if (visitor) {
      setLoggedUser(visitor);
      setIsLogging(false);
      return;
    }
    setErrorMessage('Wrong e-mail or password');
  };

  const handleReg = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userEmail || !userName || !password) {
      setErrorMessage('Please enter data required');
      return;
    }
    if (users?.find(user => user.email === userEmail)) {
      setErrorMessage('Email is registered');
      return;
    }
    if (password.length < 8) {
      setErrorMessage('Password must consist of at least 8 chars');
      return;
    }
    const newUser = {
      username: userName,
      email: userEmail,
      phone: password,
    };
  
    try {
    //   setIsLoading(true);
      const response = await fetch('https://mate.academy/students-api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // The new user has been successfully created
      console.log('New user created:', newUser);
    } catch (error) {
      setErrorMessage('error');
    } finally {
    //   setIsLoading(false);
    }
    setIsUserRegistered(true);
  };
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
  
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div>
      <section className={styles.auth}>
        {isRegistration
          ? <div className={styles.auth__container}>
            <div className={styles.auth__header}>
              <h4>Registration</h4>
              <div className={styles.auth__navButtons}>
                <img
                  className={styles.auth__icon}
                  src={arrowLeft}
                  onClick={() => setIsRegistration(false)}
                  alt="BACK"
                />
                <img
                  className={styles.auth__icon}
                  src={closeIcon}
                  onClick={() => {
                    setIsRegistration(false);
                    setIsLogging(false);
                  }}
                  alt="CLOSE ICON"
                />
              </div>
            </div>
            {isUserRegistered
              ? <p>Please check your email</p>
              : <form
                className={styles.auth__form}
                onSubmit={handleReg}
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
            }
          </div>
          : <div className={styles.auth__container}>
            <div className={styles.auth__header}>
              <h4>Log in</h4>
              {error &&
            <div
              className={styles.auth__error}
            >
              {errorMessage}
            </div>}
              <img
                className={styles.auth__icon}
                src={closeIcon}
                onClick={() => setIsLogging(false)}
                alt="CLOSE ICON"
              />
            </div>
            {isLoading
              ? <p>Loading...</p>
              : <form
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
                  //   setIsLogging(false);
                  }} 
                >
          Sign up
                </button>
              </form>
            }
          </div>
        }
      </section>
    </div>
  );
};










// export const RegScreens: React.FC<RegProps> = ({
// //   setLoggedUser,
//   setIsRegistration,
// }) => {
// //   const [users, setUsers] = useState(usersFromServer);
//   const [userName, setUserName] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isUserRegistered, setIsUserRegistered] = useState(false);
  

//   const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setUserName(event.target.value);
//   };

//   const handleUserEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setUserEmail(event.target.value);
//   };

//   const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(event.target.value);
//   };

//   const handleReg = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (!userEmail || !userName || !password) {
//       setErrorMessage('Please enter data required');
//       return;
//     }
//     const newUser = {
//       username: userName,
//       email: userEmail,
//       phone: password,
//     };
  
//     try {
//     //   setIsLoading(true);
//       const response = await fetch('https://mate.academy/students-api/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newUser),
//       });
  
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
  
//       // The new user has been successfully created
//       console.log('New user created:', newUser);
//     } catch (error) {
//       setErrorMessage('error');
//     } finally {
//     //   setIsLoading(false);
//     }
//     // setIsRegistration(false);
//     setIsUserRegistered(true);
//   };

//   useEffect(() => {
//     const originalStyle = window.getComputedStyle(document.body).overflow;
//     document.body.style.overflow = 'hidden';
  
//     return () => {
//       document.body.style.overflow = originalStyle;
//     };
//   }, []);
//   return (
//     <section className={styles.auth}>
//       <div className={styles.auth__container}>
//         <div className={styles.auth__header}>
//           <h4>Registration</h4>
//           <img
//             className={styles.auth__icon}
//             src={closeIcon}
//             onClick={() => setIsRegistration(false)}
//             alt="CLOSE ICON"
//           />
//         </div>
//         {isUserRegistered
//           ? <p>Please check your email</p>
//           : <form
//             className={styles.auth__form}
//             onSubmit={handleReg}
//           >
//             <div className={styles.auth__formSection}>
//               <label
//                 htmlFor="email"
//                 className={styles.auth__formLabel}
//               >
//                 E-mail:
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className={styles.auth__formInput}
//                 value={userEmail}
//                 onChange={handleUserEmailChange}
//               />
//             </div>
//             <div className={styles.auth__formSection}>
//               <label
//                 htmlFor="userName"
//                 className={styles.auth__formLabel}
//               >
//                 User name:
//               </label>
//               <input
//                 type="text"
//                 id="userName"
//                 className={styles.auth__formInput}
//                 value={userName}
//                 onChange={handleUserNameChange}
//               />
//             </div>
//             <div className={styles.auth__formSection}>
//               <label
//                 htmlFor="password"
//                 className={styles.auth__formLabel}
//               >
//                 Password:
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className={styles.auth__formInput}
//                 value={password}
//                 onChange={handlePasswordChange}
//               />
//             </div>
//             {errorMessage &&
//             <div
//               className={styles.auth__error}
//             >
//               {errorMessage}
//             </div>}
//             <button 
//               type="submit"
//               className={styles.auth__formButton}
//               disabled={!userEmail || !userName || !password}
//             >
//             Sign in
//             </button>
//           </form>
//         }
//       </div>
//     </section>
//   );
// };
    