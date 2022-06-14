import propTypes from 'prop-types';
import React from 'react';
import AuthContext from '../../store/auth-context';

import classes from './Navigation.module.css';

function Navigation(props) {
  const { onLogout } = props;
  return (
    <AuthContext.Consumer>
      {(ctx) => (
        <nav className={classes.nav}>
          <ul>
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <button type="button" onClick={onLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </AuthContext.Consumer>
  );
}

Navigation.propTypes = {
  onLogout: propTypes.func.isRequired,
};

export default Navigation;
