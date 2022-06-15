import propTypes from 'prop-types';
import React, { useState, useEffect, useMemo } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export function AuthContextProvider(props) {
  const { children } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('logged_in') === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    console.log(email, password);
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem('logged_in', '1');
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem('logged_in', '0');
  };

  const memoLoggedIn = useMemo(
    () => ({ isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }),
    [isLoggedIn],
  );

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <AuthContext.Provider value={memoLoggedIn}>{children}</AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: propTypes.element.isRequired,
};

export default AuthContext;
