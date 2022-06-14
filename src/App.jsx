import React, { useState, useEffect, useMemo } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const memoLoggedIn = useMemo(() => ({ isLoggedIn }), [isLoggedIn]);

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

  return (
    <AuthContext.Provider value={memoLoggedIn}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
